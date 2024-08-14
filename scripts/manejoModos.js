// script.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const icon = toggleButton.querySelector("i");
    const html = document.documentElement;

    //Neon
    const toggleBtnNeon = document.getElementById("neon-toggle");
    const iconNeon = toggleBtnNeon.querySelector("i");

    const currentNeon = localStorage.getItem("neon") || "off";
    html.setAttribute("neon", currentNeon);
    iconNeon.classList.add(currentNeon === "off" ? "fa-bolt" : "fa-droplet");

    // Cargar el tema guardado en el almacenamiento local
    const currentTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("theme-mode", currentTheme);
    icon.classList.add(currentTheme === "dark" ? "fa-sun" : "fa-moon");

    toggleButton.addEventListener("click", () => {
        if (html.getAttribute("theme-mode") === "dark") {
            html.setAttribute("theme-mode", "light");
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        } else {
            html.setAttribute("theme-mode", "dark");
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        }
    });

    toggleBtnNeon.addEventListener('click', () => {
        if (html.getAttribute("neon") === "off") {
            html.setAttribute("neon", "on");
            iconNeon.classList.replace("fa-bolt", "fa-droplet");
            localStorage.setItem("neon", "on");
        } else {
            html.setAttribute("neon", "off");
            iconNeon.classList.replace("fa-droplet", "fa-bolt");
            localStorage.setItem("neon", "off");
        }
    });

});
