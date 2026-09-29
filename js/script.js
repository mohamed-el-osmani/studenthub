"use strict";

/* =========================================
   1. DOM ELEMENTS
========================================= */

const mobileMenu = document.querySelector("#mobileMenu");
const sidebar = document.querySelector(".sidebar");
const themeToggle = document.querySelector(".theme-toggle");

const taskCheckboxes = document.querySelectorAll(".task-checkbox");


/* =========================================
   2. APPLICATION STATE
========================================= */

let darkMode = false;


/* =========================================
   3. INITIALIZATION
========================================= */

function init() {

    console.log("StudentHub is running 🚀");

    loadTasks();

}
init();
/* =========================================
   TASK MANAGEMENT
========================================= */

function saveTasks() {

    const tasks = [];

    taskCheckboxes.forEach(function(checkbox) {

        tasks.push(checkbox.checked);

    });

    localStorage.setItem(
        "studenthubTasks",
        JSON.stringify(tasks)
    );
}
taskCheckboxes.forEach(function(checkbox) {

    checkbox.addEventListener("change", function() {

        const taskText = checkbox
            .parentElement
            .querySelector("span");

        taskText.classList.toggle(
            "completed",
            checkbox.checked
        );

        saveTasks();

    });

});
function loadTasks() {

    const savedTasks =
        JSON.parse(
            localStorage.getItem("studenthubTasks")
        );

    if (!savedTasks) {
        return;
    }

    taskCheckboxes.forEach(function(checkbox, index) {

        checkbox.checked = savedTasks[index];

        const taskText = checkbox
            .parentElement
            .querySelector("span");

        taskText.classList.toggle(
            "completed",
            checkbox.checked
        );

    });
}
