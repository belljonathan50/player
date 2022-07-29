
var audioContext = new AudioContext();
var sched = new WebAudioScheduler({ context: audioContext });
var masterGain = null;

function metronome(e) {
    var t0 = e.playbackTime;
    sched.insert(t0 + 0.000, ticktack, { voice: 'sop', note: 60 });
    sched.insert(t0 + 0.500, ticktack, { voice: 'alt', note: 61  });
    sched.insert(t0 + 1.000, ticktack, { voice: 'ten', note: 62  });
    sched.insert(t0 + 1.500, ticktack, { voice: 'bas', note: 63  });
    sched.insert(t0 + 2.000, metronome);
  }
  
  function ticktack(e) {
    var t0 = e.playbackTime;
    var pitch = e.args.note;
    vox = e.args.voice;
    getTime();
    ws.send('sche '+vox+" "+futuredate+" "+pitch);
  }

  // original - - - - - - - - - - - -
// function metronome(e) {
//   var t0 = e.playbackTime;
//   sched.insert(t0 + 0.000, ticktack, { frequency: 880, duration: 1.0 });
//   sched.insert(t0 + 0.500, ticktack, { frequency: 440, duration: 0.2 });
//   sched.insert(t0 + 1.000, ticktack, { frequency: 440, duration: 0.2 });
//   sched.insert(t0 + 1.500, ticktack, { frequency: 440, duration: 0.2 });
//   sched.insert(t0 + 2.000, metronome);
// }

// function ticktack(e) {
//   var t0 = e.playbackTime;
//   var t1 = t0 + e.args.duration;
//   var osc = audioContext.createOscillator();
//   var amp = audioContext.createGain();

//   osc.frequency.value = e.args.frequency;
//   osc.start(t0);
//   osc.stop(t1);
//   osc.connect(amp);

//   amp.gain.setValueAtTime(0.5, t0);
//   amp.gain.exponentialRampToValueAtTime(1e-6, t1);
//   amp.connect(masterGain);

//   sched.nextTick(t1, function() {
//     osc.disconnect();
//     amp.disconnect();
//   });
// }

sched.on("start", function() {
  masterGain = audioContext.createGain();
  masterGain.connect(audioContext.destination);
});

sched.on("stop", function() {
  masterGain.disconnect();
  masterGain = null;
});

function start() {
  sched.start(metronome);
}

function stop() {
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