// whats the structure?

// varibales
// big switch
// functions

var vids = document.getElementsByClassName("snob");

function playMyVids() {
  vids[0].play();
  vids[1].play();
}

function pauseMyVids() {
  vids[0].pause();
  vids[1].pause();

}

function seekMyVids(x) {
  vids[0].currentTime =x;
  vids[1].currentTime =x;
}

// 
// sync instanciation i have it already in sound
 
//  var ts = timesync.create({
//   server: '/timesync',
//   interval: 10000
// });

// ts.on('change', function (offset) {
// });
// setInterval(function () {
//   var now = new Date(ts.now());
//   // console.log(now);
// }, 5000);

   // init delay

//  if (thispath != 'vid'){delay = 0}


(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  window.ws = new WebSocket(HOST);
  
  ws.onmessage = function(msg) {
    

      var str = msg.data;
      // console.log("general output (vid): "+str);

      var obj = str.split(' ');
      var header = obj[0] ;
      var value =  obj[1] ;
      var when = obj[2] ;
      var note = obj[3] ;

    var NowClientSide = new Date(ts.now());
    var NowClientNum = NowClientSide.getTime();

// console.log("typeof delay "+typeof parseInt(delay));
// console.log("typeof NowClientNum "+typeof NowClientNum);
// console.log("typeof when "+typeof parseInt(when));


 var predifference =  Math.abs(NowClientNum - when);
// console.log("delay "+delay);
// console.log("predifference "+predifference);

//  console.log("difference "+difference);

var a =  Number(predifference)
var b =  Number(delay);
var difference = a+b;
//  console.log("typeof "+typeof difference);
//  console.log("delay "+delay);
//  console.log(" NowClientNum "+NowClientNum);
//  console.log(" when "+when);


 setTimeout(update,difference)

 function update() {


  switch(header) {

    case "sche":

      switch(value) {
        case "sop":
          // code block
          break;
        case "alt":
          // code block
          break;
        case "ten":
          // code block
          break;
        case "bas":
          break; }
      break;
    case "play":
        if (value == 1) 
               {
                console.log("value is 1; ");
                console.log("delay2 is:"+ delay2);
                setTimeout(playMyVids(), 3000);
                setTimeout(console.log("bite"), 3000);
               }
        else
        {pauseMyVids(); console.log("eeeeee")}

      
      // if (value == 1){sound.play(); console.log("plaaaaaaaaay"); 
      //   let video = document.getElementById("vid"); 
      //   video.play()}
      // if (value == 0){sound.pause(); console.log("paussssse");
      // let video = document.getElementById("vid"); 
      // video.pause()
    
         
    
      break;
    case "seek":
      // code block
      seekMyVids(value);
      // console.log("seek "+ value)
      pauseMyVids()


      break;
    case "tune":
      // code block
      console.log("I tune "+value);
      vids[0].src = "./libs/vids/"+value+".mp4";
      vids[1].src = "./libs/vids/"+value+".mp4"
      break;


    // case "turn":
    //           switch(value) {
    //             case "sop":
    //               // code block
    //               if (thispath == "vocaloid1"){changePage(note)}; 
    //               break;
    //             case "alt":
    //               // code block
    //               if (thispath == value){changePage(note)}; 
    //               break;
    //             case "ten":
    //               // code block
    //               if (thispath == value){changePage(note)}; 
    //               break;
    //             case "bas":
    //               if (thispath == value){changePage(note)}; 
    //               break; }
    //     break; 


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









