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

console.log(delay);

 if (thispath != 'vid'){delay = 0}


(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  window.ws = new WebSocket(HOST);
  
  ws.onmessage = function(msg) {
    

      var str = msg.data;
      console.log("incoming" + str);
      var obj = str.split(' ');
      var header = obj[0] ;
      var value =  obj[1] ;
      var when = obj[2] ;
      var note = obj[3] ;

    var NowClientSide = new Date(ts.now());
    var NowClientNum = NowClientSide.getTime()



 var difference =  delay;
// Tis is not ideal!!!!!!!!!!!!!!!!!!!!!! bypassing the sync module---- var difference =  Math.abs(NowClientNum - when)+delay;


 setTimeout( update,difference)

 function update() {


  switch(header) {
    // case "video":
    //   // code block
    //   if (value == 1){ 
    //     console.log(str);console.log(str);
    //     let video = document.getElementById("vid"); 
    //     video.play();};
    //   if (value == 0){ if (thispath == 'vid'){
    //     console.log("stoooooooop"+ value)
    //         let video = document.getElementById("vid"); 
    //         video.pause();}};
    //   break;


      case "play":
      if (value == 1){console.log("plaaaaaaaaay"); 
        let video = document.getElementById("vid"); 
        video.play()} 
    //     else if (value == 0){console.log("paussssse");
    //   let video = document.getElementById("vid"); 
    //   video.pause()
    // }

    case "seek":
      // code block
      let video = document.getElementById("vid");
      video.currentTime = value;
      video.pause()
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
// function myFunction(p1) {
//   synth.send([0x90,p1,100])
// }

// function changePage(p1) {
//   var img = document.getElementById("img");
//   img.src = "./images/" +thispath  + "/"+p1 + ".png";
// console.log(img.src)
// }







