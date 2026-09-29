/* =========================================
   STUDENTHUB
   Main JavaScript
========================================= */

"use strict";


/* =========================================
   1. DOM ELEMENTS
========================================= */

const mobileMenu = document.querySelector("#mobileMenu");
const sidebar = document.querySelector(".sidebar");
const themeToggle = document.querySelector(".theme-toggle");


/* =========================================
   2. APPLICATION STATE
========================================= */

let darkMode = false;


/* =========================================
   3. INITIALIZATION
========================================= */

function init() {

    console.log("StudentHub is running 🚀");

}

init();
let darkMode=false;
/* =========================================
   4. DARK MODE
========================================= */

function toggleDarkMode() {

    darkMode = !darkMode;

    document.body.classList.toggle("dark-mode");

}

themeToggle.addEventListener("click", toggleDarkMode);

