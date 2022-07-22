const express     = require('express');
var timesyncServer = require('timesync/server');
const app         = express();
const fs = require('fs');
const editJsonFile = require("edit-json-file");
const Max = require('max-api');
var timesyncServer = require('timesync/server');



var ws = null;

const router = express.Router();
const path = require('path');
const expressWs   = require('express-ws')(app);
const morgan      = require('morgan');
const compression = require('compression');
const serveStatic = require('serve-static');
const basicAuth   = require('basic-auth-connect');
const user = process.env.USER;
const pass = process.env.PASS;

let connects = [];
let file = editJsonFile(`${__dirname}/public/libs/DistributedState/state.json`);


app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(basicAuth(user, pass));
}


app.use(morgan('dev'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

var publicPath = path.join(__dirname, 'public');


router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

app.get('/client', function (req, res) {
  res.sendfile(publicPath + '/client.html');
});

app.get('/PUMP', function (req, res) {
  res.sendfile(publicPath + '/pump.html');
});

app.get('/doudou', function (req, res) {
  res.sendfile(publicPath + '/doudou.html');
});

app.get('/boom', function (req, res) {
  res.sendfile(publicPath + '/boom.html');
});



app.get('/C', function (req, res) {
  res.sendfile(publicPath + '/jsonC.html');
});


app.get('/S', function (req, res) {
  res.sendfile(publicPath + '/client.html');
});



app.get('/conductor', function (req, res) {
  res.sendfile(publicPath + '/conductor.html');
});


// app.use('/static', express.static(path.join(__dirname, 'public')))

// Max.addHandler("connect", (url) => {
// 	ws = new WS.WebSocket (url)
// 	if (ws) {
// 		Max.outlet("Connected to", url);
// 		ws.onmessage = function(msg) {
// 			Max.outlet(msg.data);
// 		};
// 	}
// 	else
// 		Max.outlet("Can't connect to", url);
// });

Max.addHandler("bang", () => {
  file.set("seek", 12);
	Max.post("Who you think you bangin'?"+ file.get());
});


Max.addHandler("zouzou", () => {

	Max.post("received a zouzou mess");
});

Max.addHandler('currentTime', (dir) => {
  Max.post(`received currentTime ${dir}`);
  file.set("seek", dir);
});

Max.addHandler('isPlaying', (dir) => {
  Max.post(`isPlaying ${dir}`);
  file.set("isPlaying", dir);
});

Max.addHandler('rate', (dir) => {
  Max.post(`rate ${dir}`);
  file.set("rate", dir);
});



Max.addHandler('send', () => {
  
  const timetag = Date.now();
  Max.post(`now   `+timetag);
  var when = timetag+ file.data.lag;
   Max.post(`when `+ when);
   file.set("when", when);
   Max.post(file.data.lag);

  Max.post(`send`);
  connects.forEach(socket => {
      
    socket.send(JSON.stringify(file));
    // socket.send(file);
  });
});


Max.addHandler('lag', (dir) => {
  Max.post(`lag ${dir}`);
  file.set("lag", dir);
});

Max.addHandler('when', () => {

  const timetag = Date.now();
 Max.post(`now   `+timetag);
 var when = timetag+ file.data.lag;
  Max.post(`when `+ when);
  file.set("when", when);
  Max.post(file.data.lag);
});

















app.ws('/', (ws, req) => {
  connects.push(ws);

  ws.on('message', message => {
    console.log("hi");

    // console.log('message received serverside : '+ message);

    var words = message.split(' ');
    var first = words[0];
    var second = words[1];
    // console.log('first : '+first);
    // console.log('second : '+second + ' typeof : ' + typeof second);
    // var seekValue = parseInt(words[1]);
    // var vid = document.getElementById('vid');
    



// switch(first) {
//   case "stop":
//     console.log("totoooo");
//     file.set("isPlaying", "false");
//     file.set("seek", 0);
//     console.log(file.get());
//     break;

//   case "start":
//     file.set("isPlaying", "true");
//     break;

//   case "pause":
//   file.set("isPlaying", "false");
//   break;

//   case "seek":
//     file.set("seek", second);
//     console.log(file.get());
//     break;

//   case "rate":
//     file.set("rate", second);
//     break;

//   case "lag":
//     file.set("lag", second);
//     break;

//   case "tune":
//     file.set("tune", second);
//     console.log("changed tune to "+ second)
//     break;

//   default:
//     console.log("just a sync");
//     console.log("what's triggering? " + second);
//     console.log(file.get());
//     // code block
// } 



    connects.forEach(socket => {
      
      socket.send(message + ' '+  JSON.stringify(file));
      // socket.send(file);
    });



  });
  
  ws.on('close', () => {
    connects = connects.filter(conn => {
      return (conn === ws) ? false : true;
    });
  });
});



app.use("/ws-stuff", router);

app.use('/timesync', timesyncServer.requestHandler);

app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'));
});





