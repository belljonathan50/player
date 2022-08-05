const express     = require('express');
var timesyncServer = require('timesync/server');
const app         = express();
const fs = require('fs');
const editJsonFile = require("edit-json-file");


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


app.get('/send', function (req, res) {
  res.sendfile(publicPath + '/send.html');
});

app.get('/s', function (req, res) {
  res.sendfile(publicPath + '/sop.html');
});

app.get('/a', function (req, res) {
  res.sendfile(publicPath + '/alt.html');
});

app.get('/t', function (req, res) {
  res.sendfile(publicPath + '/ten.html');
});

app.get('/b', function (req, res) {
  res.sendfile(publicPath + '/bas.html');
});

app.get('/sop', function (req, res) {
  res.sendfile(publicPath + '/sop.html');
});

app.get('/alt', function (req, res) {
  res.sendfile(publicPath + '/alt.html');
});

app.get('/ten', function (req, res) {
  res.sendfile(publicPath + '/ten.html');
});

app.get('/bas', function (req, res) {
  res.sendfile(publicPath + '/bas.html');
});










// app.use('/static', express.static(path.join(__dirname, 'public')))

app.ws('/', (ws, req) => {
  connects.push(ws);

  ws.on('message', message => {



   // give up on distributed state????
    var obj = message.split(' ');
    var header = obj[0] ;
    var value =  obj[1] ;

    switch(header) {
      case "tune":
        file.set("tune", value);
        file.set("page", 0);
      
        break;
      case "seek":
        file.set("seek", value);
        break;
      default:
    }






    connects.forEach(socket => {

      // console.log(message);
      // console.log("header "+header);
      // console.log("value "+value);
      socket.send(message);

      // switch(header) {
      //   case "update":
      //     socket.send(message +" "+JSON.stringify(file)); 
      //     // socket.send(message +" "+file);    
      //        console.log("json ");
      //     break;
      //   default:
      //     socket.send(message);
      // }




      // distributed state
      // socket.send(message + ' '+  JSON.stringify(file));

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


// constant update
