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
    console.log("lastDate "+lastDate*4)
};

function lastStop() {
    lastDate = 0;  
}


function lastTime() {
    // console.log ("send", msg);
    var msg = inscore.newMessageM("date");
    inscore.msgAddF(msg, lastDate);
    inscore.postMessage("/ITL/scene/pos", msg);
}


function playAt() {
    console.log("thistune "+thistune);
    // when hitting the play button
    ws.send ("seek "+lastDate*4);
    getTime();
    ws.send('play 1 '+futuredate);
 

    switch (thistune) {
        
        case "kunst":
            start(bach,lastDate*4);
          break;
        case "jesu":
            start(jesu,lastDate*4);
          break;
        case "moro":
            start(moro,lastDate*4);
          break;
        case "medee":
            start(medee,lastDate*4);
          break;
        case "orfeo":
            start(orfeo,lastDate*4);
          break;
        case "tallis":
            start(tallis,lastDate*4);
          break;
        default:
          console.log("no tune");
          break;
      }
    // var thistune = Window.thistune;

//       switch(thistune) {
//         case "jesu":
//           // code block

// console.log("ljhgkjhgv,khgvkhgvjhgvc");

          
//           break;
//         case "orfeo":
//             console.log("azezdazedazedazed");

//             break; }


 }

//  
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
    // console.log ("receive: "+ data);
    if (client && (msg!="dummy;")) inscore.loadInscore (msg, false);
}
