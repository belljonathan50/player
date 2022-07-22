  // sync instanciation
 
 var ts = timesync.create({
  server: '/timesync',
  interval: 10000
});

ts.on('change', function (offset) {
});
setInterval(function () {
  var now = new Date(ts.now());
  console.log(now);
}, 5000);

 

(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  window.ws = new WebSocket(HOST);
  
  ws.onmessage = function(msg) {
    
    console.log(msg.data);
      var str = msg.data;
      var obj = str.split(' ');
      var header = obj[0] ;
      var value =  obj[1] ;
      var when = obj[2] ;
      console.log("-------------");
     console.log(when);

    var NowClientSide = new Date(ts.now());
    var NowClientNum = NowClientSide.getTime()

    console.log(`NowClientSideNum `+NowClientNum);
    
    console.log(`when `+when);
    
console.log("now " + NowClientNum + " later " + when);
 var difference =  Math.abs(NowClientNum - when);
 console.log("difference " + difference);

 setTimeout( update,difference)

 function update() {
  // synth.send([0x90, 60, 100])



  switch(header) {
    case "play":
      // code block
      if (value == 1){playMidi()} else {stopMidi()}
      break;
    case "seek":
      // code block
      console.log("I seek");
      synth.locateMIDI(value);
      break;
    case "tune":
      // code block
      console.log("I tune "+value);
      loadMidiUrl('/midi/'+thispath+'/'+value+'.mid');
      break;
    case "dummy":
        // code block
        console.log("dummy");
        break; 
    default:
      // code block
  }



}
};
}());



