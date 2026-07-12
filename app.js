// =========================

// Kaci Strong v5.0

// =========================

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

// ----------------------

// Load Saved Data

// ----------------------

let water = Number(localStorage.getItem("water")) || 0;

let protein = Number(localStorage.getItem("protein")) || 0;

let streak = Number(localStorage.getItem("streak")) || 0;

// Update Screen

function updateDashboard(){

    document.getElementById("waterCount").textContent =

        water + "/8";

    document.getElementById("proteinCount").textContent =

        protein + "/120g";

    document.getElementById("streak").textContent =

        streak + " Days";

}

updateDashboard();

// ----------------------

// Water Buttons

// ----------------------

document.getElementById("waterPlus").onclick = () =>{

    if(water < 8){

        water++;

        localStorage.setItem("water",water);

        updateDashboard();

    }

};

document.getElementById("waterMinus").onclick = () =>{

    if(water > 0){

        water--;

        localStorage.setItem("water",water);

        updateDashboard();

    }

};

// ----------------------

// Protein Buttons

// ----------------------

document.getElementById("proteinPlus").onclick = () =>{

    protein += 10;

    if(protein > 120){

        protein = 120;

    }

    localStorage.setItem("protein",protein);

    updateDashboard();

};

document.getElementById("proteinMinus").onclick = () =>{

    protein -= 10;

    if(protein < 0){

        protein = 0;

    }

    localStorage.setItem("protein",protein);

    updateDashboard();

};

// ----------------------

// Workout Checklist

// ----------------------

const checks =

document.querySelectorAll(".exercise-list input");

const progress =

document.getElementById("workoutProgress");

checks.forEach(check =>{

    check.addEventListener("change",updateWorkout);

});

function updateWorkout(){

    let completed = 0;

    checks.forEach(c=>{

        if(c.checked){

            completed++;

        }

    });

    let percent =

        (completed / checks.length) * 100;

    progress.style.width =

        percent + "%";

}

// ----------------------

// Finish Workout

// ----------------------

document

.getElementById("startWorkout")

.onclick = () =>{

    if(progress.style.width !== "100%"){

        alert("Complete every exercise first!");

        return;

    }

    streak++;

    localStorage.setItem("streak",streak);

    updateDashboard();

    alert("🎉 Great Job Kaci!");

};

// ----------------------

// Navigation

// ----------------------

const buttons =

document.querySelectorAll(".nav-btn");

const pages =

document.querySelectorAll(".page");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(b=>b.classList.remove("active"));

button.classList.add("active");

const page =

button.dataset.page;

pages.forEach(p=>{

p.classList.remove("active");

});

document

.getElementById(page)

.classList.add("active");

});

});

// ----------------------

// Dark Mode

// ----------------------

const dark =

document.getElementById("darkMode");

if(dark){

dark.addEventListener("change",()=>{

if(dark.checked){

document.body.style.background="#111";

document.body.style.color="white";

}else{

document.body.style.background="#eef5fb";

document.body.style.color="#1f2937";

}

});

}
