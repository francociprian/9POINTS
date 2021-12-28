const navToggle = document.querySelector(".menu__toggle");
const navMenu = document.querySelector(".menu__lista");


    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("menu__lista--visible");

    if (navMenu.classList.contains("menu__lista--visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");}
    else {
         navToggle.setAttribute("aria-label", "Abrir menú");}
});


// BOOTSTRAP 
// Validacion para los formularios!
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
