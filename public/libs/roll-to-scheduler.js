const { Console } = require('console');
const fs = require('fs');

let Stronset = "0. 0.472646 1.090000 1.897123 2.932646 4.252646 5.102646 5.832646";
let Strcent = "60 64 67 72 68 65 62 59";
let Strvoice = "sop alt ten bas bas bas ten alt";

let onset = Stronset.split(" ");
let cent = Strcent.split(" ");
let voice = Strvoice.split(" ");

console.log(voice.length, cent.length, onset.length);

console.log(voice[0]);


for (let i = 0 ; i < voice.length; i++) {

  
   

    fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/player/public/libs/rschedule.txt', 
   
    "sched.insert(t0 +  " + onset[i] + ", ticktack, { voice: '" + voice[i]  +  "', note: " + cent[i]+ "});"+ "\n" 
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
  