document.addEventListener("DOMContentLoaded", function() {
    var iconoUsuario = document.getElementById("icono-usuario");
    var overlay = document.querySelector(".overlay");
    var contadorCarrito = document.getElementById("contadorCarrito"); // Nuevo: contador de productos en el carrito
    var carrito = []; // Nuevo: arreglo para almacenar productos en el carrito

    iconoUsuario.addEventListener("click", function() {
        mostrarFormulario();
    });
    function mostrarFormulario() {
        var formulario = document.getElementById("formularioRegistro");
        formulario.style.display = (formulario.style.display === "block") ? "none" : "block";
        overlay.style.display = (overlay.style.display === "block") ? "none" : "block";
    }
});