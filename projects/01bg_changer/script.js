let body = document.querySelector(".body");
let btn = document.querySelectorAll(".button");

btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        body.style.backgroundColor = e.target.id;
    });
});