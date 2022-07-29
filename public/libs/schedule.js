
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

  function ray(e) {
    var t0 = e.playbackTime;
   
    sched.insert(t0 +  0.487804, ticktack, { voice: 'sop', note: 81});
    sched.insert(t0 +  0.487804, ticktack, { voice: 'alt', note: 81});
    sched.insert(t0 +  0.487804, ticktack, { voice: 'ten', note: 69});
    sched.insert(t0 +  0.715077, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  0.790834, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  0.942349, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  1.093864, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  1.169622, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  1.396894, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  1.396894, ticktack, { voice: 'ten', note: 65});
    sched.insert(t0 +  1.624167, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  1.851439, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  2.002954, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  2.078712, ticktack, { voice: 'sop', note: 81});
    sched.insert(t0 +  2.305984, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  2.305984, ticktack, { voice: 'ten', note: 62});
    sched.insert(t0 +  2.533257, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  2.609014, ticktack, { voice: 'alt', note: 81});
    sched.insert(t0 +  2.987802, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  3.215074, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  3.215074, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  3.215074, ticktack, { voice: 'ten', note: 65});
    sched.insert(t0 +  3.442346, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  3.821134, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  3.896891, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  4.124164, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  4.124164, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  4.351437, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  4.427194, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  4.805982, ticktack, { voice: 'sop', note: 79});
    sched.insert(t0 +  5.033254, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  5.033254, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  5.033254, ticktack, { voice: 'ten', note: 62});
    sched.insert(t0 +  5.260527, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  5.336284, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  5.639314, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  5.715072, ticktack, { voice: 'sop', note: 76});
    sched.insert(t0 +  5.942344, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  5.942344, ticktack, { voice: 'ten', note: 65});
    sched.insert(t0 +  6.245374, ticktack, { voice: 'alt', note: 79});
    sched.insert(t0 +  6.548404, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  6.624162, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  6.851434, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  6.851434, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  6.851434, ticktack, { voice: 'ten', note: 69});
    sched.insert(t0 +  7.305979, ticktack, { voice: 'sop', note: 79});
    sched.insert(t0 +  7.457494, ticktack, { voice: 'alt', note: 76});
    sched.insert(t0 +  7.760524, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  7.987797, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  8.442342, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  8.669614, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  8.669614, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  8.669614, ticktack, { voice: 'ten', note: 65});
    sched.insert(t0 +  8.896887, ticktack, { voice: 'sop', note: 70});
    sched.insert(t0 +  8.972644, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  9.351432, ticktack, { voice: 'sop', note: 69});
    sched.insert(t0 +  9.578704, ticktack, { voice: 'sop', note: 67});
    sched.insert(t0 +  9.578704, ticktack, { voice: 'alt', note: 79});
    sched.insert(t0 +  10.033249, ticktack, { voice: 'sop', note: 67});
    sched.insert(t0 +  10.487794, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  10.487794, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  10.487794, ticktack, { voice: 'ten', note: 62});
    sched.insert(t0 +  10.715067, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  10.942339, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  11.093854, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  11.396884, ticktack, { voice: 'sop', note: 79});
    sched.insert(t0 +  11.396884, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  11.396884, ticktack, { voice: 'ten', note: 62});
    sched.insert(t0 +  11.624156, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  11.699914, ticktack, { voice: 'alt', note: 70});
    sched.insert(t0 +  12.078702, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  12.305974, ticktack, { voice: 'sop', note: 76});
    sched.insert(t0 +  12.305974, ticktack, { voice: 'alt', note: 69});
    sched.insert(t0 +  12.305974, ticktack, { voice: 'ten', note: 60});
    sched.insert(t0 +  12.609004, ticktack, { voice: 'alt', note: 67});
    sched.insert(t0 +  12.987792, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  13.215064, ticktack, { voice: 'sop', note: 79});
    sched.insert(t0 +  13.215064, ticktack, { voice: 'alt', note: 67});
    sched.insert(t0 +  13.442336, ticktack, { voice: 'sop', note: 76});
    sched.insert(t0 +  13.821124, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  13.896882, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  14.124154, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  14.124154, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  14.124154, ticktack, { voice: 'ten', note: 62});
    sched.insert(t0 +  14.351427, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  14.427184, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  14.805972, ticktack, { voice: 'sop', note: 70});
    sched.insert(t0 +  15.033244, ticktack, { voice: 'sop', note: 67});
    sched.insert(t0 +  15.033244, ticktack, { voice: 'alt', note: 79});
    sched.insert(t0 +  15.033244, ticktack, { voice: 'ten', note: 65});
    sched.insert(t0 +  15.260517, ticktack, { voice: 'sop', note: 69});
    sched.insert(t0 +  15.336274, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  15.487789, ticktack, { voice: 'sop', note: 70});
    sched.insert(t0 +  15.715061, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  15.942334, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  15.942334, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  15.942334, ticktack, { voice: 'ten', note: 60});
    sched.insert(t0 +  16.169607, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  16.245364, ticktack, { voice: 'alt', note: 76});
    sched.insert(t0 +  16.624151, ticktack, { voice: 'sop', note: 71});
    sched.insert(t0 +  16.851424, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  17.078697, ticktack, { voice: 'sop', note: 69});
    sched.insert(t0 +  17.154454, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  17.305969, ticktack, { voice: 'sop', note: 69});
    sched.insert(t0 +  17.457484, ticktack, { voice: 'alt', note: 79});
    sched.insert(t0 +  17.533242, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  17.760514, ticktack, { voice: 'sop', note: 71});
    sched.insert(t0 +  17.760514, ticktack, { voice: 'alt', note: 76});
    sched.insert(t0 +  17.760514, ticktack, { voice: 'ten', note: 67});
    sched.insert(t0 +  18.215059, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  18.366574, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  18.669604, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  18.669604, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  18.669604, ticktack, { voice: 'ten', note: 65});
    sched.insert(t0 +  18.972634, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  19.124149, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  19.351422, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  19.578694, ticktack, { voice: 'alt', note: 70});
    sched.insert(t0 +  19.578694, ticktack, { voice: 'ten', note: 62});
    sched.insert(t0 +  19.805966, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  19.881724, ticktack, { voice: 'alt', note: 67});
    sched.insert(t0 +  20.184754, ticktack, { voice: 'alt', note: 69});
    sched.insert(t0 +  20.260512, ticktack, { voice: 'sop', note: 81});
    sched.insert(t0 +  20.487784, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  20.487784, ticktack, { voice: 'alt', note: 70});
    sched.insert(t0 +  20.715056, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  20.790814, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  21.093844, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  21.169602, ticktack, { voice: 'sop', note: 79});
    sched.insert(t0 +  21.396874, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  21.396874, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  21.396874, ticktack, { voice: 'ten', note: 64});
    sched.insert(t0 +  21.851419, ticktack, { voice: 'sop', note: 79});
    sched.insert(t0 +  22.002934, ticktack, { voice: 'alt', note: 71});
    sched.insert(t0 +  22.305964, ticktack, { voice: 'sop', note: 81});
    sched.insert(t0 +  22.305964, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  22.305964, ticktack, { voice: 'ten', note: 62});
    sched.insert(t0 +  22.608994, ticktack, { voice: 'alt', note: 69});
    sched.insert(t0 +  22.760509, ticktack, { voice: 'sop', note: 81});
    sched.insert(t0 +  22.912024, ticktack, { voice: 'alt', note: 69});
    sched.insert(t0 +  22.987781, ticktack, { voice: 'sop', note: 81});
    sched.insert(t0 +  23.215054, ticktack, { voice: 'sop', note: 81});
    sched.insert(t0 +  23.215054, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  23.518084, ticktack, { voice: 'alt', note: 71});
    sched.insert(t0 +  23.669599, ticktack, { voice: 'sop', note: 81});
    sched.insert(t0 +  24.124144, ticktack, { voice: 'sop', note: 69});
    sched.insert(t0 +  24.124144, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  24.351417, ticktack, { voice: 'sop', note: 70});
    sched.insert(t0 +  24.578689, ticktack, { voice: 'sop', note: 69});
    sched.insert(t0 +  24.730204, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  25.033234, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  25.033234, ticktack, { voice: 'ten', note: 60});
    sched.insert(t0 +  25.336264, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  25.487779, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  25.639294, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  25.715052, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  25.942324, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  25.942324, ticktack, { voice: 'ten', note: 65});
    sched.insert(t0 +  26.245354, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  26.396869, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  26.851414, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  26.851414, ticktack, { voice: 'alt', note: 81});
    sched.insert(t0 +  27.078686, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  27.154444, ticktack, { voice: 'alt', note: 74});
    sched.insert(t0 +  27.457474, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  27.533232, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  27.760504, ticktack, { voice: 'sop', note: 70});
    sched.insert(t0 +  27.760504, ticktack, { voice: 'ten', note: 67});
    sched.insert(t0 +  28.063534, ticktack, { voice: 'alt', note: 79});
    sched.insert(t0 +  28.366564, ticktack, { voice: 'alt', note: 77});
    sched.insert(t0 +  28.442322, ticktack, { voice: 'sop', note: 70});
    sched.insert(t0 +  28.669594, ticktack, { voice: 'sop', note: 70});
    sched.insert(t0 +  28.972624, ticktack, { voice: 'alt', note: 79});
    sched.insert(t0 +  29.124139, ticktack, { voice: 'sop', note: 70});
    sched.insert(t0 +  29.578684, ticktack, { voice: 'sop', note: 69});
    sched.insert(t0 +  29.578684, ticktack, { voice: 'alt', note: 81});
    sched.insert(t0 +  29.805957, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  30.184744, ticktack, { voice: 'alt', note: 81});
    sched.insert(t0 +  30.260502, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  30.487774, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  30.487774, ticktack, { voice: 'alt', note: 81});
    sched.insert(t0 +  30.487774, ticktack, { voice: 'ten', note: 65});
    sched.insert(t0 +  30.715047, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  30.790804, ticktack, { voice: 'alt', note: 81});
    sched.insert(t0 +  31.169591, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  31.396864, ticktack, { voice: 'sop', note: 72});
    sched.insert(t0 +  31.396864, ticktack, { voice: 'alt', note: 81});
    sched.insert(t0 +  31.627633, ticktack, { voice: 'sop', note: 74});
    sched.insert(t0 +  31.860191, ticktack, { voice: 'sop', note: 76});
    sched.insert(t0 +  32.016441, ticktack, { voice: 'alt', note: 69});
    sched.insert(t0 +  32.094566, ticktack, { voice: 'sop', note: 77});
    sched.insert(t0 +  32.330786, ticktack, { voice: 'sop', note: 79});
    sched.insert(t0 +  32.330786, ticktack, { voice: 'alt', note: 70});
    sched.insert(t0 +  32.330786, ticktack, { voice: 'ten', note: 62});
    sched.insert(t0 +  32.574688, ticktack, { voice: 'sop', note: 78});
    sched.insert(t0 +  32.659434, ticktack, { voice: 'alt', note: 69});
    sched.insert(t0 +  33.094411, ticktack, { voice: 'sop', note: 76});
    sched.insert(t0 +  33.364681, ticktack, { voice: 'sop', note: 79});
    sched.insert(t0 +  33.364681, ticktack, { voice: 'alt', note: 72});
    sched.insert(t0 +  33.364681, ticktack, { voice: 'ten', note: 60});
    sched.insert(t0 + 35.000, ray);
  }
  
  function ticktack(e) {
    var t0 = e.playbackTime;
    var pitch = e.args.note;
    vox = e.args.voice;
    getTime();
    ws.send('sche '+vox+" "+futuredate+" "+pitch);
  }


sched.on("start", function() {
  masterGain = audioContext.createGain();
  masterGain.connect(audioContext.destination);
});

sched.on("stop", function() {
  masterGain.disconnect();
  masterGain = null;
});

function start(metronome) {
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