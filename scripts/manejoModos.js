// script.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const icon = toggleButton.querySelector("i");
    const html = document.documentElement;

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
});
