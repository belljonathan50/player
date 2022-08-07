const { Console } = require('console');
const fs = require('fs');

var json = require('./score.json');

let Stronset = json.onset;
let Strcent = json.cents;
let Strvoice = json.voice;

let onset = Stronset.split(" ");
let cent = Strcent.split(" ");
let voice = Strvoice.split(" ");

console.log(voice.length, cent.length, onset.length);

console.log(cent[0]);


for (let i = 0 ; i < voice.length; i++) {

  
   

    fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/player/public/libs/bach.txt', 
   
    "sched.insert(t0 +  " + onset[i] + ", pitch, { voice: '" + voice[i]  +  "', note: " + cent[i]+ "});"+ "\n" 
    , 
    function (err) {
        if (err) throw err;
      });



      // +  json.segments[(i+3)%60].effect.join(" ")
  
  // if the number is odd


  
  }


  // sched.insert(t0 + 0., ticktack, { voice: 'sop', note: 60 });
  // sched.insert(t0 + 0.5, ticktack, { voice: 'alt', note: 61 });
  // sched.insert(t0 + 1., ticktack, { voice: 'ten', note: 62 });
  // sched.insert(t0 + 1.5, ticktack, { voice: 'bas', note: 63 });
  