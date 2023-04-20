let menu = document.querySelector("menu");
let nav = document.querySelector("nav ul");

addEventListener("resize", (e) => {
    if (innerWidth < 1080) {
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
    if (innerWidth < 1080) {
        if (menu.getBoundingClientRect().top <= 0) {
            setTimeout(() => {
                menu.style.height = "100px";
            }, 300);
        } else {
            setTimeout(() => {
                menu.style.height = "150px";
            }, 300);
        }
    } else {
        if (menu.getBoundingClientRect().top <= 0) {
            setTimeout(() => {
                nav.style.top = "50%";
                nav.style.transform = "translateY(-50%)";
            }, 300);
        } else {
            setTimeout(() => {
                nav.style.top = "0";
                nav.style.transform = "translateY(0)";
            }, 300);
        }
    }
})