var bod = document.querySelector("body");
var mode = document.querySelector("#mode");
mode.addEventListener("click", function () {
    if (bod.classList.contains("dark-theme")) {
        mode.src = "images/moon.png";
    }
    else {
        mode.src = "images/sun.png";
    }
    bod.style.transition = "all linear 0.3s";
    bod.classList.toggle("dark-theme")
})