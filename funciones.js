// ==================================
// MENÚ DE NAVEGACIÓN
// ==================================

const menuButton = document.getElementById("menuButton");
const navbarMenu = document.getElementById("navbarMenu");

if (menuButton && navbarMenu) {
    menuButton.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
        const menuAbierto = navbarMenu.classList.contains("show");
        menuButton.setAttribute("aria-expanded", menuAbierto);
    });
}

// ==================================
// CERRAR MENÚ AL SELECCIONAR OPCIÓN
// ==================================

const enlacesMenu = document.querySelectorAll(".nav-link");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        if (navbarMenu) {
            navbarMenu.classList.remove("show");
        }
        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
});

// ==================================
// AÑO AUTOMÁTICO DEL FOOTER
// ==================================

const currentYear = document.getElementById("currentYear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

console.log("Portafolio de Ángel Caldas cargado correctamente.");