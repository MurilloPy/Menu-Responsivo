const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("open");
    menu.classList.toggle("show-menu");

});

document.addEventListener("click", (event) => {

    const targetElement = event.target;

    if (!hamburger.contains(targetElement) && !menu.contains(targetElement)){

        hamburger.classList.remove("open");
        menu.classList.remove("show-menu");

    };

});