window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.scrollY > 200) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});