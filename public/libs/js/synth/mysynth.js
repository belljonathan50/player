
function loadMidiUrl(afile){
    synth.loadMIDIUrl(afile);
    console.log('midi loaded');
  }
  
  function loadMidi(files){
    var reader = new FileReader();
    reader.onload=(e)=>{
      synth.loadMIDI(reader.result);
    }
    reader.readAsArrayBuffer(files[0]);
  }
  function playMidi(){
    synth.playMIDI();
  }
  function stopMidi(){
    synth.stopMIDI();
  }
  function SetProgram(p){
    synth.send([0xc0,p]);
  }
  function Init(){
    synth=new WebAudioTinySynth({voices:64});
    for(var i=0;i<128;++i){
      var o=document.createElement("option");
      o.innerHTML=synth.getTimbreName(0,i);
      document.getElementById("prog").appendChild(o);
    }
    setInterval(function(){
      var st=synth.getPlayStatus();
      document.getElementById("status").innerHTML="Play:"+st.play+"  Pos:"+st.curTick+"/"+st.maxTick;
    },100);
  }
  function Test(){
    var o=synth.getAudioContext().createOscillator();
    o.connect(synth.getAudioContext().destination);
    o.start(0);
    o.stop(synth.getAudioContext().currentTime+1);
    console.log(synth)
  }
  window.onload=Init;
  