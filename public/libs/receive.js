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
      var note = obj[3] ;
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
    case "sche":

              switch(value) {
                case "sop":
                  // code block
                  if (thispath == value){myFunction(note);};

                  
                  break;
                case "alt":
                  // code block
                  if (thispath == value){myFunction(note);};
                  break;
                case "ten":
                  // code block
                  if (thispath == value){myFunction(note);};
                  break;
                case "bas":
                  if (thispath == value){myFunction(note);};
                  break; }




      
      break; 


      // Max.addHandler('sop', (toto) => {
      //   const timetag = Date.now();
      //   Max.post(`now   `+timetag);
      //   var when = timetag+ file.data.lag;
      //    Max.post(`when `+ when);
      //    file.set("when", when);
      //    Max.post(file.data.lag);
      //   Max.post(`send`);
      //   connects.forEach(socket => {  
      //     socket.send("sop "+ toto+" "+ when ); 
      //   });
      // });




    case "dummy":
        console.log("dummy");
        break; 
    default:
      // code block
  }



}
};
}());


 // play notes
function myFunction(p1) {
  synth.send([0x90,p1,100])
}



