// ============================

// Kaci Strong v6.2

// Automatic Work Rotation

// ============================

// Greeting

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12){

    greeting.textContent = "Good Morning, Kaci!";

}else if(hour < 18){

    greeting.textContent = "Good Afternoon, Kaci!";

}else{

    greeting.textContent = "Good Evening, Kaci!";

}

// ----------------------------

// Rotation

// July 17, 2026 = OFF DAY

// ----------------------------

const rotation = [

"WORK",

"WORK",

"WORK",

"OFF",

"WORK",

"WORK",

"WORK",

"OFF",

"OFF",

"OFF",

"WORK",

"OFF",

"OFF",

"OFF"

];

const rotationStart =

new Date(2026,6,17); // July = month 6

const today = new Date();

rotationStart.setHours(0,0,0,0);

today.setHours(0,0,0,0);

const days =

Math.floor(

(today-rotationStart)/(1000*60*60*24)

);

const index =

((days % rotation.length)+rotation.length)

% rotation.length;

const todayStatus =

rotation[index];

const status =

document.getElementById("statusPill");

if(todayStatus==="WORK"){

status.innerHTML="🔴 WORK DAY";

status.style.background="#ffe5e5";

status.style.color="#c62828";

}else{

status.innerHTML="🟢 OFF DAY";

status.style.background="#eef8ea";

status.style.color="#2e7d32";

}

// ----------------------------

// Next OFF Day

// ----------------------------

let nextOff = 0;

for(let i=1;i<=rotation.length;i++){

let check =

rotation[(index+i)%rotation.length];

if(check==="OFF"){

nextOff=i;

break;

}

}

const nextText =

document.getElementById("nextOffDay");

if(nextOff===1){

nextText.textContent =

"Tomorrow is an OFF day";

}else if(nextOff===0){

nextText.textContent =

"Today is an OFF day";

}else{

nextText.textContent =

nextOff +

" days until your next OFF day";

}

// ----------------------------

// Existing trackers

// ----------------------------

let water =

Number(localStorage.getItem("water")) || 0;

let protein =

Number(localStorage.getItem("protein")) || 0;

let streak =

Number(localStorage.getItem("streak")) || 0;

function refresh(){

document.getElementById("waterCount").textContent =

water + " / 8";

document.getElementById("proteinCount").textContent =

protein + " / 120g";

document.getElementById("streak").textContent =

streak + " Days";

}

refresh();

document.getElementById("waterPlus").onclick=()=>{

if(water<8){

water++;

localStorage.setItem("water",water);

refresh();

}

};

document.getElementById("waterMinus").onclick=()=>{

if(water>0){

water--;

localStorage.setItem("water",water);

refresh();

}

};

document.getElementById("proteinPlus").onclick=()=>{

protein=Math.min(120,protein+10);

localStorage.setItem("protein",protein);

refresh();

};

document.getElementById("proteinMinus").onclick=()=>{

protein=Math.max(0,protein-10);

localStorage.setItem("protein",protein);

refresh();

};
