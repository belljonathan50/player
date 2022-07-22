  // sync instanciation
 
 var ts = timesync.create({
  server: '/timesync',
  interval: 10000
});

ts.on('change', function (offset) {
});
setInterval(function () {
  var NowHere = new Date(ts.now());
  var NowNum = NowHere.getTime()
  console.log(`here: `+NowNum);
  ws.send("dummy");
}, 5000);




