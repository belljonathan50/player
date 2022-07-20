
const Max = require('max-api');
const WS  = require('ws');
var timesyncServer = require('timesync/server');


var ws = null;


let file = editJsonFile(`${__dirname}/public/libs/DistributedState/state.json`);


Max.outlet("WebSocket is running");

Max.addHandler("connect", (url) => {
	ws = new WS.WebSocket (url)
	if (ws) {
		Max.outlet("Connected to", url);
		ws.onmessage = function(msg) {
			Max.outlet(msg.data);
		};
	}
	else
		Max.outlet("Can't connect to", url);
});

Max.addHandler("send", (msg) => {
	if (ws)
		ws.send(msg);
	else
		Max.outlet("Can't send " + msg + "': websocket is not connected");
});

// Max.addHandler('send', () => {
//
//   const timetag = Date.now();
//   Max.post(`now   `+timetag);
//   var when = timetag+ file.data.lag;
//    Max.post(`when `+ when);
//    file.set("when", when);
//    Max.post(file.data.lag);
//
//   Max.post(`send`);
//   connects.forEach(socket => {
//
//     socket.send(JSON.stringify(file));
//     // socket.send(file);
//   });
// });

Max.addHandler("inscore", (msg) => {
	let b64 = Buffer.from (msg).toString('base64');
	if (ws)
		ws.send('INSCORE ' + b64);
	else
		Max.outlet("Can't send '" + msg + "': websocket is not connected");
});
