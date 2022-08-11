var key='delay2';
let saveddelay = localStorage.getItem (key);
var delay2 = saveddelay ? saveddelay : 500;

function save(val) {
	delay2 = val;
	document.getElementById('delayStr').innerText = val;
	localStorage.setItem (key, val);
}

