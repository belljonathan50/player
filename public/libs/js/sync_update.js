  // sync instanciation
 
 var ts = timesync.create({
  server: '/timesync',
  interval: 10000
});

ts.on('change', function (offset) {
});


  // reactivate dummy
setInterval(function () {
  var NowHere = new Date(ts.now());
  var NowNum = NowHere.getTime()
  // console.log(`here: `+NowNum);
  ws.send("update");
}, 5000);




