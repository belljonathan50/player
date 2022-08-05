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
    ws.send ("seek "+lastDate*4);
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
    ws.send ("seek "+lastDate);
    getTime();
    ws.send('play 1 '+futuredate);

          // start scheduler at that time
        // start(bach, lastDate*4);
          // play video
   
    ws.send('video 1 '+futuredate);
          // play sound
    
    console.log("seek "+lastDate)
  
}

function pauseVid(){
    ws.send ("play 0")
}

function send (msg) {
    // console.log ("send", msg);
    ws.send (msg);
    start(bach, lastDate*4)
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
