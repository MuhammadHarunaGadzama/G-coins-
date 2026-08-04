let balance = 0;

let mining = false;

function startMining(){

if(mining){

alert("Mining is already running.");

return;

}

mining = true;

document.getElementById("status").innerHTML="🟢 Mining";

let time = 30;

let timer = setInterval(function(){

time--;

let minutes = Math.floor(time/60);

let seconds = time%60;

document.getElementById("timer").innerHTML=

minutes+":"+

(seconds<10?"0":"")+seconds;

if(time<=0){

clearInterval(timer);

mining=false;

balance+=2;

document.getElementById("balance").innerHTML=

balance.toFixed(2)+" G-Coins";

document.getElementById("earnings").innerHTML=

"+2 G-Coins";

document.getElementById("status").innerHTML=

"✅ Claim Complete";

document.getElementById("timer").innerHTML=

"12:00:00";

alert("Congratulations! You mined 2 G-Coins.");

}

},1000);

}
