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
    ws.send ("seek "+lastDate)
};

function playAt() {
    // console.log ("send", msg);
    start(bach, lastDate);

    getTime();

   
    ws.send('video 1 '+futuredate);
    
}

function pauseVid(){
    ws.send ("video 0")
}

function send (msg) {
    // console.log ("send", msg);
    ws.send (msg);
    start(bach, lastDate)
}

function lastTime() {
    // console.log ("send", msg);
    var msg = inscore.newMessageM("date");
    inscore.msgAddF(msg, lastDate);
    inscore.postMessage("/ITL/scene/pos", msg);
    console.log("tyuytuytuyt")
    
}

function lastStop() {
    lastDate = 0;  
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
