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

   // init delay

 if (thispath != 'vid'){delay = 0}


(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  window.ws = new WebSocket(HOST);
  
  ws.onmessage = function(msg) {
    

      var str = msg.data;
      var obj = str.split(' ');
      var header = obj[0] ;
      var value =  obj[1] ;
      var when = obj[2] ;
      var note = obj[3] ;

    var NowClientSide = new Date(ts.now());
    var NowClientNum = NowClientSide.getTime()



 var difference =  Math.abs(NowClientNum - when);


 setTimeout( update,difference)

 function update() {


  switch(header) {
    case "play":
      // code block
      if (value == 1){ if (thispath == 'vid'){
        let video = document.getElementById("vid"); 
        video.play();}};
      if (value == 0){ if (thispath == 'vid'){
        console.log("stoooooooop"+ value)
            let video = document.getElementById("vid"); 
            video.pause();}};
      break;
    case "seek":
      // code block
      // synth.locateMIDI(value);
      if (thispath == "vid"){console.log("ededededzdzdzdzdsdsdsds"+ value)
       let video = document.getElementById("vid");
      video.currentTime = value;
      video.pause()}
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

 

    case "turn":

              switch(value) {
                case "sop":
                  // code block
                  if (thispath == value){changePage(note)}; 
                  break;
                case "alt":
                  // code block
                  if (thispath == value){changePage(note)}; 
                  break;
                case "ten":
                  // code block
                  if (thispath == value){changePage(note)}; 
                  break;
                case "bas":
                  if (thispath == value){changePage(note)}; 
                  break; }
        break; 

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

function changePage(p1) {
  var img = document.getElementById("img");
  img.src = "./images/" +thispath  + "/"+p1 + ".png";
console.log(img.src)
}







