
var audioContext = new AudioContext();
var sched = new WebAudioScheduler({ context: audioContext });
var masterGain = null;

  function pitch(e) {
    var t0 = e.playbackTime;
    var pitch = e.args.note;
    vox = e.args.voice;
    getTime();
    ws.send('sche '+vox+" "+futuredate+" "+pitch);
  }

  function page(e) {
    var t0 = e.playbackTime;
    var npage = thistune + "/" +e.args.npage;
    vox = e.args.voice;
    getTime();
    ws.send('turn '+vox+" "+futuredate+" "+npage);
  }

  function soundSeek(e) {
    var t0 = e.playbackTime;
    // var nsound = thistune + "/" +e.args.nsound;
    time = e.args.time;
    getTime();
    ws.send('soundSeek '+time+" "+futuredate);
    console.log("ms sent")
  }

  function soundPlay(e) {
    var t0 = e.playbackTime;
    // var nsound = thistune + "/" +e.args.nsound;
    vox = e.args.voice;
    getTime();
    ws.send('sound '+vox+" "+futuredate);
    console.log("ms sent")
  }

  function soundStop(e) {
    var t0 = e.playbackTime;
    // var nsound = thistune + "/" +e.args.nsound;
    vox = e.args.voice;
    getTime();
    ws.send('soundStop '+vox+" "+futuredate);
    console.log("ms sent")
  }



sched.on("start", function() {
  masterGain = audioContext.createGain();
  masterGain.connect(audioContext.destination);
});

sched.on("stop", function() {
  masterGain.disconnect();
  masterGain = null;
});



function stopSched() {
  sched.stop(true);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    sched.aheadTime = 0.1;
  } else {
    sched.aheadTime = 1.0;
    sched.process();
  }
});