var miBotonFlotante = document.getElementById('boton_img');
var urlNav = document.querySelectorAll('.menu-links');
var textoPresentacion = document.querySelectorAll('.color_nocturno');
var colorFondo = document.querySelectorAll('.background_nocturno');
var colorRedesSociales = document.querySelectorAll('.redes_sociales-nocturno')
var cartas = document.querySelectorAll('.cartas_nocturno')
var bodyColor = document.body;

var claro = true;

miBotonFlotante.addEventListener('click', function () {
    if (claro) {
        miBotonFlotante.style.backgroundImage = "url('../recursos/imagenes-iconos/sol.png')";

        urlNav.forEach(function (urlNav) {
            urlNav.classList.add("color_noche-links--nav");
        });
        textoPresentacion.forEach(function (textoPresentacion) {
            textoPresentacion.classList.add("color_nocturno-activado");
        });
        colorFondo.forEach(function (colorFondo) {
            colorFondo.classList.add("background_nocturno-activado");
        });
        colorRedesSociales.forEach(function (colorRedesSociales) {
            colorRedesSociales.classList.add("redes_sociales-nocturno--activado");
        });
        cartas.forEach(function (cartas) {
            cartas.classList.add("cartas_nocturno--activo");
        });

        claro = false;
    } else {
        miBotonFlotante.style.backgroundImage = "url('../recursos/imagenes-iconos/luna.png')";

        urlNav.forEach(function (urlNav) {
            urlNav.classList.remove("color_noche-links--nav");
        });
        textoPresentacion.forEach(function (textoPresentacion) {
            textoPresentacion.classList.remove("color_nocturno-activado");
        });
        colorFondo.forEach(function (colorFondo) {
            colorFondo.classList.remove("background_nocturno-activado");
        });
        colorRedesSociales.forEach(function (colorRedesSociales) {
            colorRedesSociales.classList.remove("redes_sociales-nocturno--activado");
        });
        cartas.forEach(function (cartas) {
            cartas.classList.remove("cartas_nocturno--activo");
        });
        claro = true;
    }
});