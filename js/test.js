var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add("active");
}
function closeNav() {
    sidenav.classList.remove("active");
}

// function toggleDarkMode() {
//     document.body.classList.toggle("sombre");
//     }

const toggleButton = document.getElementById("dark-mode-toggle");
const icon = document.getElementById("dark-mode-icon");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    }

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});