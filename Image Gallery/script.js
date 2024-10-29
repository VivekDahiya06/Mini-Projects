let scrollContainer = document.querySelector(".gallery");
let back = document.querySelector("#backbutton");
let next = document.querySelector("#nextbutton");
scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});
back.addEventListener("click", (e) => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})
next.addEventListener("click", (e) => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})
