// ===============================

// Kaci Strong v6.0

// ===============================

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

// ---------- Load Saved Data ----------

let water = parseInt(localStorage.getItem("water")) || 0;

let protein = parseInt(localStorage.getItem("protein")) || 0;

let streak = parseInt(localStorage.getItem("streak")) || 0;

// ---------- Dashboard ----------

function refreshDashboard() {

    document.getElementById("waterCount").textContent =

        `${water} / 8`;

    document.getElementById("proteinCount").textContent =

        `${protein} / 120g`;

    document.getElementById("streak").textContent =

        `${streak} Days`;

}

refreshDashboard();

// ---------- Water ----------

document.getElementById("waterPlus").onclick = () => {

    if (water < 8) water++;

    localStorage.setItem("water", water);

    refreshDashboard();

};

document.getElementById("waterMinus").onclick = () => {

    if (water > 0) water--;

    localStorage.setItem("water", water);

    refreshDashboard();

};

// ---------- Protein ----------

document.getElementById("proteinPlus").onclick = () => {

    protein += 10;

    if (protein > 120) protein = 120;

    localStorage.setItem("protein", protein);

    refreshDashboard();

};

document.getElementById("proteinMinus").onclick = () => {

    protein -= 10;

    if (protein < 0) protein = 0;

    localStorage.setItem("protein", protein);

    refreshDashboard();

};

// ---------- Workout ----------

const boxes =

document.querySelectorAll(".exercise-list input");

const progress =

document.getElementById("progressFill");

boxes.forEach(box => {

    box.addEventListener("change", updateWorkout);

});

function updateWorkout() {

    let checked = 0;

    boxes.forEach(box => {

        if (box.checked) checked++;

    });

    const percent =

        (checked / boxes.length) * 100;

    progress.style.width = percent + "%";

}

// ---------- Start Workout ----------

const workoutButton =

document.getElementById("startWorkout");

workoutButton.onclick = () => {

    let checked = 0;

    boxes.forEach(box => {

        if (box.checked) checked++;

    });

    if (checked !== boxes.length) {

        alert("Complete every exercise first 💪");

        return;

    }

    streak++;

    localStorage.setItem("streak", streak);

    refreshDashboard();

    workoutButton.textContent =

        "✅ Workout Complete";

    workoutButton.style.background =

        "#34c759";

    alert("🎉 Great job, Kaci!");

};

// ---------- Navigation ----------

const navButtons =

document.querySelectorAll(".bottom-nav button");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        navButtons.forEach(btn =>

            btn.classList.remove("active"));

        button.classList.add("active");

    });

});

// ---------- Auto Save Checkboxes ----------

boxes.forEach((box, index) => {

    const saved =

        localStorage.getItem("exercise" + index);

    if (saved === "true")

        box.checked = true;

    box.addEventListener("change", () => {

        localStorage.setItem(

            "exercise" + index,

            box.checked

        );

        updateWorkout();

    });

});

updateWorkout();
