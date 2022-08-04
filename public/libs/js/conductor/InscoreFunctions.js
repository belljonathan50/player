var url = location.origin.replace(/^http/, 'ws');
var ws = new WebSocket(url);

ws.onmessage = function(msg) { receive (msg.data); };




function refresh(){
    setInterval(function(){send("dummy;")},10000)
}
var client = true;


function store (any) {
    // console.log ("send", msg);
    window.lastDate = parseFloat(any);
    ws.send ("seek "+lastDate);
    console.log("lastDate "+lastDate)
};

function lastStop() {
    lastDate = 0;  
}


function lastTime() {
    // console.log ("send", msg);
    var msg = inscore.newMessageM("date");
    inscore.msgAddF(msg, lastDate);
    inscore.postMessage("/ITL/scene/pos", msg);
    console.log("tyuytuytuyt")
    
}


function playAt() {
    // when hitting the play button

          // start scheduler at that time
    start(bach, lastDate);
          // play video
    getTime();
    ws.send('video 1 '+futuredate);
          // play sound
    ws.send ("soundSeek sound1 "+lastDate);
    console.log("seek "+lastDate)
  
}

function pauseVid(){
    ws.send ("video 0")
}

function send (msg) {
    // console.log ("send", msg);
    ws.send (msg);
    start(bach, lastDate)
}

// function storedSpeed(speed) {
//     var msg = inscore.newMessageM('tempo');
//     inscore.msgAddF(msg, speed*60);
//     inscore.postMessage('/ITL/scene/pos', msg);
// };

function storedDate(date) {
    var msg = inscore.newMessageM('tempo');
    inscore.msgAddF(msg, speed*60);
    inscore.postMessage('/ITL/scene/pos', msg);
}

function receive (data) {
    let n = data.search(';');
    let msg = data.substring(0, n+1);
    console.log ("receive", msg);
    if (client && (msg!="dummy;")) inscore.loadInscore (msg, false);
}
