// ==========================
// G-Coins v2 Main Script
// ==========================

// ---------- SIGN UP ----------
function signup() {

const fullname=document.getElementById("fullname").value;
const email=document.getElementById("email").value;
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

if(fullname==""||email==""||username==""||password==""){
alert("Please fill in all required fields.");
return;
}

const user={
fullname:fullname,
email:email,
username:username,
password:password,
balance:0,
referrals:0,
mined:0
};

localStorage.setItem("gcoinsUser",JSON.stringify(user));

alert("Account created successfully!");

window.location="home.html";

}

// ---------- LOGIN ----------
function login(){

const username=document.getElementById("loginUsername").value;
const password=document.getElementById("loginPassword").value;

const user=JSON.parse(localStorage.getItem("gcoinsUser"));

if(user==null){
alert("No account found.");
return;
}

if(username===user.username && password===user.password){

alert("Welcome "+user.fullname);

window.location="home.html";

}else{

alert("Incorrect username or password.");

}

}

if(username==user.username && password==user.password){

alert("Welcome "+user.fullname);

window.location="home.html";

}else{

alert("Invalid username or password.");

}

}

// ---------- LOAD USER ----------
function loadUser(){

const user=JSON.parse(localStorage.getItem("gcoinsUser"));

if(user==null) return;

const balance=document.getElementById("balance");

if(balance){

balance.innerHTML=user.balance.toFixed(2)+" G-Coins";

}

}

// ---------- MINING ----------
let mining=false;

function startMining(){

if(mining){

alert("Mining already running.");

return;

}

mining=true;

document.getElementById("status").innerHTML="🟢 Mining";

let seconds=30;

const timer=setInterval(function(){

seconds--;

let m=Math.floor(seconds/60);

let s=seconds%60;

document.getElementById("timer").innerHTML=

m+":"+(s<10?"0":"")+s;

if(seconds<=0){

clearInterval(timer);

mining=false;

let user=JSON.parse(localStorage.getItem("gcoinsUser"));

user.balance+=2;

user.mined+=2;

localStorage.setItem("gcoinsUser",JSON.stringify(user));

loadUser();

document.getElementById("status").innerHTML="✅ Completed";

alert("+2 G-Coins Added!");

}

},1000);

}

// ---------- COPY REFERRAL ----------
function copyReferral(){

const input=document.getElementById("refLink");

if(!input) return;

navigator.clipboard.writeText(input.value);

alert("Referral Link Copied!");

}

window.onload=loadUser;
