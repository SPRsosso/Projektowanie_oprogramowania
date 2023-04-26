let menu = document.querySelector("menu");
let nav = document.querySelector("nav ul");
let screenWidth = 920;

addEventListener("resize", (e) => {
    if (innerWidth <= screenWidth) {
        menu.style.width = "100%";
        if (menu.getBoundingClientRect().top <= 0)
            menu.style.height = "100px";
        else
            menu.style.height = "150px";
    } else {
        menu.style.height = "100vh";
        menu.style.width = "200px";
    }
})

addEventListener("scroll", (e) => {
    let time = 500;

    if (innerWidth <= screenWidth) {
        if (menu.getBoundingClientRect().top <= 0) {
            setTimeout(() => {
                menu.style.height = "100px";
            }, time);
        } else {
            setTimeout(() => {
                menu.style.height = "150px";
            }, time);
        }
    } else {
        if (menu.getBoundingClientRect().top <= 0) {
            setTimeout(() => {
                nav.style.top = "50%";
                nav.style.transform = "translateY(-50%)";
            }, time);
        } else {
            setTimeout(() => {
                nav.style.top = "0";
                nav.style.transform = "translateY(0)";
            }, time);
        }
    }
})

addEventListener("DOMContentLoaded", (e) => {
    nav.style.top = "0";
    nav.style.transform = "translateY(0)";
})