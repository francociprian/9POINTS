const navToggle = document.querySelector(".nav-Toggle");
const navMenu = document.querySelector(".menuNav");


    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");}
    else {
         navToggle.setAttribute("aria-label", "Abrir menú");}
});

// const linksMenu = document.querySelectorAll(".menuNav a[href^='#']"); 

// linksMenu.forEach(linksMenu =>{
//     linksMenu.addEventListener("click", function() {
//         navMenu.classList.remove("nav-menu_visible");
//     }) 
// })
