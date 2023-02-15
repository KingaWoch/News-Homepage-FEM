const nav = document.querySelector(".navigation");
const button = document.querySelector(".mobile-nav-toggle");

button.addEventListener("click", () => {
    if(nav.classList.contains("active")) {
        nav.classList.remove("active");
        button.classList.remove("active");
    } else {
        nav.classList.add("active");
        button.classList.add("active");
    }
})