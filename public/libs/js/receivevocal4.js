const cars = [

  "DO2", "DOd2", "REb2", "RE2", "REd2", "MIb2", "MI2", "FA2", "FAd2", "SOLb2", "SOL2", "SOLd", "LAb2", "LA2", "LAd2", "SIb2", "SI2", "DO3", "DOd3", "REb3", "RE3", "REd3", "MIb3", "MI3", "FA3", "FAd3", "SOLb3", "SOL3", "SOLd", "LAb3", "LA3", "LAd3", "SIb3", "SI3", "DO4", "DOd4", "REb4", "RE4", "REd4", "MIb4", "MI4", "FA4", "FAd4", "SOLb4", "SOL4", "SOLd", "LAb4", "LA4", "LAd4", "SIb4", "SI4", "DO5", "DOd5", "REb5", "RE5", "REd5", "MIb5", "MI5", "FA5", "FAd5", "SOLb5", "SOL5", "SOLd", "LAb5", "LA5", "LAd5", "SIb5", "SI5"

];

// 
// sync instanciation
 
 var ts = timesync.create({
  server: '/timesync',
  interval: 10000
});

ts.on('change', function (offset) {
});
setInterval(function () {
  var now = new Date(ts.now());
  // console.log(now);
}, 5000);

   // init delay

 if (thispath != 'vid'){delay = 0}


(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  window.ws = new WebSocket(HOST);
  
  ws.onmessage = function(msg) {
    

      var str = msg.data;
      console.log(str);

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

    case "sche":

      switch(value) {
        case "sop":
          // code bloc
          break;

        case "alt":
          // code block

          break;
        case "ten":
          // code block
        
          break;
        case "bas":
          console.log(note);
          sound.stop()
          sound.play(cars[note]);
          break; }
          
      break;
    // case "play":
    //   if (value == 1){sound.play(); console.log("plaaaaaaaaay"); 
    //     let video = document.getElementById("vid"); 
    //     video.play()}
    //   if (value == 0){sound.pause(); console.log("paussssse");
    //   let video = document.getElementById("vid"); 
    //   video.pause()
    // }  
    //   break;
    case "seek":
      // code block
      sound.seek(value);
      console.log("seek "+ value)

      // synth.locateMIDI(value);
      if (thispath == "vid"){console.log("ededededzdzdzdzdsdsdsds"+ value)
       let video = document.getElementById("vid");
      video.currentTime = value;
      video.pause()}


      break;
    case "tune":
      // code block
      console.log("I tune "+value);
      
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
                  if (thispath == "vocaloid4"){changePage(note)}; 
                  break; }
        break; 

    
    case "sound":
      if (thispath == value){console.log("hola");sound.play();}; 
        break; 
    
    case "soundStop":
      if (thispath == value){console.log("holi");  sound.stop();}; 
        break; 
    
    case "soundSeek":
      if (thispath == value){console.log("seededeeel");  sound.seek(12);}; 
        break; 

    case "dummy":
        console.log("dummy");
        break; 

    // case "update":
    //       console.log(value);
    //       var myup = JSON.parse(value);
    //       var myFile = "audio/sound1/percussion.mp3";
    //       console.log(myFile);

    //       window.updatedPath = "/"+ myup.data.media+"/"+ thispath+"/"+ myup.data.tune+".mp3";

    //       if(myFile != updatedPath)
    //         {
    //           sound.src = updatedPath;
    //           console.log("updated")
    //         }
    //       break; 

    default:
      // code block
  }



}
};

}());


 // play notes
function playNote(p1) {
  synth.send([0x90,p1,100])
}

function changePage(p1) {
  var img = document.getElementById("img");
  img.src = "./images/" +thispath  + "/"+p1 + ".png";
console.log(img.src)
}









