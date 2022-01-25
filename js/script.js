const navToggle = document.querySelector(".menu__toggle");
const navMenu = document.querySelector(".menu__lista");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu__lista--visible");

    if (navMenu.classList.contains("menu__lista--visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});


// 

const CONTENT = "9points desarrolla soluciones de software a medida desde start-up hasta empresas establecidas a nivel mundial. Combinamos un diseño innovador con asesoramiento a nuestros clientes en todas las decisiones digitales y comerciales.";

let type = '<span>' + CONTENT.split('').join('</span><span>') + '</span>';


$(type).hide().appendTo('#index_text').each(function (i) {
    $(this).delay(33 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});