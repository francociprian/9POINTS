const navBurger = document.querySelector(".menu__toggle");
const navMenu = document.querySelector(".menu__lista");


navBurger.addEventListener("click", () => {
    navMenu.classList.toggle("menu__lista--visible");

    if (navMenu.classList.contains("menu__lista--visible")) {
        navBurger.setAttribute("aria-label", "Cerrar menú");
    } else {
        navBurger.setAttribute("aria-label", "Abrir menú");
    }
});


// Animacion tipo maquina de escribir del inicio

const CONTENT = "9points desarrolla soluciones de software a medida desde start-up hasta empresas establecidas a nivel mundial. Combinamos un diseño innovador con asesoramiento a nuestros clientes en todas las decisiones digitales y comerciales.";

let type = '<span>' + CONTENT.split('').join('</span><span>') + '</span>';


$(type).hide().appendTo('#index_text').each(function (i) {
    $(this).delay(30 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});