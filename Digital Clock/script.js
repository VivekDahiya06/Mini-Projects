time = document.querySelector(".time");
setInterval(() => {
    time.innerText = new Date().toLocaleTimeString();
}, 500);