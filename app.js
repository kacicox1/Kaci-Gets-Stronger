// ==========================================

// Kaci Strong v6.2

// Part 1 of 2

// ==========================================

// Greeting

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {

    greeting.textContent = "Good Morning, Kaci!";

} else if (hour < 18) {

    greeting.textContent = "Good Afternoon, Kaci!";

} else {

    greeting.textContent = "Good Evening, Kaci!";

}

// ==========================================

// Work Rotation

// ==========================================

// Rotation:

// Work, Work, Work, Off,

// Work, Work, Work,

// Off, Off, Off,

// Work,

// Off, Off, Off

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

// July 17, 2026 = OFF DAY

const rotationStart = new Date(2026, 6, 17);

const today = new Date();

rotationStart.setHours(0,0,0,0);

today.setHours(0,0,0,0);

const daysSince =

Math.floor(

(today - rotationStart) /

(1000 * 60 * 60 * 24)

);

const rotationIndex =

((daysSince % rotation.length)

+ rotation.length)

% rotation.length;

const todayStatus =

rotation[rotationIndex];

const statusPill =

document.getElementById("statusPill");

if(todayStatus === "WORK"){

    statusPill.innerHTML =

    "🔴 WORK DAY";

    statusPill.style.background =

    "#ffe8e8";

    statusPill.style.color =

    "#b91c1c";

}else{

    statusPill.innerHTML =

    "🟢 OFF DAY";

    statusPill.style.background =

    "#eef8ea";

    statusPill.style.color =

    "#2e7d32";

}

// ==========================================

// Next OFF Day

// ==========================================

let nextOff = 0;

for(let i = 1; i <= rotation.length; i++){

    const check =

    rotation[

    (rotationIndex + i)

    % rotation.length

    ];

    if(check === "OFF"){

        nextOff = i;

        break;

    }

}

const nextOffLabel =

document.getElementById("nextOffDay");

if(nextOff === 1){

    nextOffLabel.textContent =

    "Tomorrow is your next OFF day";

}else{

    nextOffLabel.textContent =

    nextOff +

    " days until your next OFF day";

}
// ==========================================

// Daily Workout Assignment

// ==========================================

const workoutTitle =

document.getElementById("todayWorkout");

let todaysWorkout = "";

if (todayStatus === "WORK") {

    todaysWorkout =

    "🚶 Recovery Walk & Stretch";

} else {

    // Count which OFF day we're on

    let offDay = 1;

    let i = rotationIndex;

    while (i > 0 && rotation[i - 1] === "OFF") {

        offDay++;

        i--;

    }

    switch (offDay) {

        case 1:

            todaysWorkout =

            "💪 Upper Body & Arms";

            break;

        case 2:

            todaysWorkout =

            "🦵 Lower Body";

            break;

        default:

            todaysWorkout =

            "🔥 Full Body & Cardio";

            break;

    }

}

workoutTitle.textContent =

todaysWorkout;
// ==========================================

// Saved Data

// ==========================================

let water =

Number(

localStorage.getItem("water")

) || 0;

let protein =

Number(

localStorage.getItem("protein")

) || 0;

let streak =

Number(

localStorage.getItem("streak")

) || 0;

function refreshDashboard(){

document.getElementById(

"waterCount"

).textContent =

water + " / 8";

document.getElementById(

"proteinCount"

).textContent =

protein + " / 120g";

document.getElementById(

"streak"

).textContent =

streak + " Days";

}

refreshDashboard();
// ==========================================

// Water Tracker

// ==========================================

document.getElementById("waterPlus").addEventListener("click", () => {

    if (water < 8) {

        water++;

        localStorage.setItem("water", water);

        refreshDashboard();

    }

});

document.getElementById("waterMinus").addEventListener("click", () => {

    if (water > 0) {

        water--;

        localStorage.setItem("water", water);

        refreshDashboard();

    }

});

// ==========================================

// Protein Tracker

// ==========================================

document.getElementById("proteinPlus").addEventListener("click", () => {

    protein = Math.min(120, protein + 10);

    localStorage.setItem("protein", protein);

    refreshDashboard();

});

document.getElementById("proteinMinus").addEventListener("click", () => {

    protein = Math.max(0, protein - 10);

    localStorage.setItem("protein", protein);

    refreshDashboard();

});

// ==========================================

// Workout Checklist

// ==========================================

const exerciseBoxes =

document.querySelectorAll(".exercise-list input");

const progressFill =

document.getElementById("progressFill");

function updateWorkoutProgress() {

    let completed = 0;

    exerciseBoxes.forEach((box, index) => {

        const saved =

        localStorage.getItem("exercise" + index);

        if (saved === "true") {

            box.checked = true;

        }

        if (box.checked) {

            completed++;

        }

        box.onchange = () => {

            localStorage.setItem(

                "exercise" + index,

                box.checked

            );

            updateWorkoutProgress();

        };

    });

    const percent =

    (completed / exerciseBoxes.length) * 100;

    progressFill.style.width =

    percent + "%";

}

updateWorkoutProgress();

// ==========================================

// Start Workout Button

// ==========================================

const startWorkout =

document.getElementById("startWorkout");

startWorkout.addEventListener("click", () => {

    const finished =

    [...exerciseBoxes].every(box => box.checked);

    if (!finished) {

        alert("Complete every exercise first 💪");

        return;

    }

    streak++;

    localStorage.setItem("streak", streak);

    refreshDashboard();

    startWorkout.textContent =

    "✅ Workout Complete";

    startWorkout.style.background =

    "#2ecc71";

    alert("🎉 Awesome job, Kaci!");

});

// ==========================================

// Bottom Navigation

// ==========================================

const navButtons =

document.querySelectorAll(".bottom-nav button");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        navButtons.forEach(btn =>

            btn.classList.remove("active"));

        button.classList.add("active");

    });

});

// ==========================================

// End of Version 6.2

// ==========================================

console.log("Kaci Strong Version 6.2 Loaded");
