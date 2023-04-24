function changeImage(obj) {
    let imgs = document.querySelectorAll("#galeria img:not(#big)");
    let big = document.querySelector("#big");

    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = "0.3";
    }

    obj.style.opacity = "1";

    big.src = obj.src;
}