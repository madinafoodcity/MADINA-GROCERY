function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector(".dark-btn");

    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);

    button.textContent = isDark ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", function () {
    const savedMode = localStorage.getItem("darkMode");
    const button = document.querySelector(".dark-btn");

    if (savedMode === "true") {
        document.body.classList.add("dark-mode");
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
});