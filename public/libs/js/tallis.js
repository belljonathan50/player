var ts = timesync.create({
  server: '/timesync',
  interval: 10000
});

ts.on('change', function (offset) {
});
setInterval(function () {
  var now = new Date(ts.now());
}, 5000);

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
      {vid.play(); sound.play(id1); console.log("play???") } 
     else if (value == 0)
      {vid.pause(); vid.currentTime = 0; sound.pause(id1)}
      break;
      
    case "soundSeek":
       
        console.log("seek "+ value);
        if (Math.abs(sound.seek() - value) >0.1){sound.seek(value, id1)};
        if (Math.abs(vid.currentTime - value) >0.5){vid.currentTime=value; console.log("kzejhgfjhzegrf")};
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







