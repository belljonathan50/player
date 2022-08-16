
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

//  if (thispath != 'vid'){delay = 0}


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

    case "play":
      if (value == 1)
      {vid.play(); sound.play(); console.log("play???") } 
     else if (value == 0)
      {vid.pause()}; sound.pause()
      break;
      


    case "tune":
      // delete all
   
         var bob = document.getElementById("body"); bob.innerHTML = "";
         writeTune(value);
         break;

    // case "sche":

    //   switch(value) {
    //     case "sop2":
    //       console.log(note);
    //       sound.stop()
    //       sound.play(cars[note]);
    //       break; }
    //   break;

    // case "seek":
    //   // code block
    //   sound.seek(value);
    //   console.log("seek "+ value)
    //   // synth.locateMIDI(value);
    //   if (thispath == "vid"){console.log("ededededzdzdzdzdsdsdsds"+ value)
    //    let video = document.getElementById("vid");
    //   video.currentTime = value;
    //   video.pause()}
    //   break;

      case "soundSeek":
        // play anyway
        console.log("seek "+ value);
        // if (sound.playing()==true){console.log("ça joue")}
        // else{console.log("ça joue pas"); sound.play(); vid.play()};
        // glitch?
        if (Math.abs(sound.seek() - value) >0.1){sound.seek(value)};
        if (Math.abs(vid.currentTime - value) >0.5){vid.currentTime=value; console.log("kzejhgfjhzegrf")};



        // synth.locateMIDI(value);
        // if (thispath == "vid"){console.log("ededededzdzdzdzdsdsdsds"+ value)
        //  let video = document.getElementById("vid");
        // video.currentTime = value;
        // video.pause()}
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
                case "sop2":
                  if (thispath == "vocaloid5"){changePage(note)}; 
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







function writeTune (tune) {

  switch(tune) {

    case "tallis": 
    
                  // Create the element using the createElement method.
                  var myDuv = document.createElement("div");
                  var myDiv = document.createElement("div");
          

                  //Set its unique ID.
                  myDiv.id = 'div_id';




                  myDuv.innerHTML = "      <button id='lock' type='button' onclick='this.remove();'>please click</button>";
                  //Add your content to the DIV
                  myDiv.innerHTML = "<video id='vid' height='80%' width='100%' src='libs/vids/comp.mp4' controls muted></video><script>let video = document.getElementById('vid'); </script>";
                  // {src: '/libs/vids/'+ thispath + "/"+'tallis.mp4'});

                  //Finally, append the element to the HTML body
                  document.body.appendChild(myDuv);
                  document.body.appendChild(myDiv);
                  Window.vid = document.getElementById("vid");


                  switch(thispath) {
                    case "modular1": 
                    sound = new Howl({src: '/audio/tallis1.mp3'});
                    sound.play();
                    sound.stop();
                    break;

                    case "modular2": 
                    sound = new Howl({src: '/audio/tallis2.mp3'});
                    sound.play();
                    sound.stop();
                    break;

                    case "modular3": 
                    sound = new Howl({src: '/audio/tallis3.mp3'});
                    sound.play();
                    sound.stop();
                    break;

                    case "modular4": 
                    sound = new Howl({src: '/audio/tallis4.mp3'});
                    sound.play();
                    sound.stop();
                    break;

                    case "modular5": 
                    sound = new Howl({src: '/audio/tallis5.mp3'});
                    sound.play();
                    sound.stop();
                    break;



      break;



    case "moro": console.log("do that")
      break;     }


}}









