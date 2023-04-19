addEventListener("scroll", (e) => {
    if (innerWidth < 1080) {
        let menu = document.querySelector("menu");
        
        if (menu.getBoundingClientRect().top == 0) {
            setTimeout(() => {
                menu.style.height = "100px";
            }, 300);
        } else {
            setTimeout(() => {
                menu.style.height = "150px";
            }, 300);
        }
    }
})