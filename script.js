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

    // Nueva función para agregar productos al carrito
    function agregarAlCarrito(nombreProducto) {
        carrito.push(nombreProducto);
        actualizarContadorCarrito();
    }

    // Nueva función para actualizar el contador del carrito
    function actualizarContadorCarrito() {
        contadorCarrito.textContent = carrito.length;
    }

    // Nueva función para mostrar el carrito al hacer clic en el icono
    function mostrarCarrito() {
        // Puedes implementar la lógica para mostrar el carrito aquí
        console.log("Productos en el carrito:", carrito);
    }

    // Eventos para agregar productos al carrito
    var botonesAgregarCarrito = document.querySelectorAll('.producto button');
    botonesAgregarCarrito.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var nombreProducto = this.parentNode.querySelector('h2').textContent;
            agregarAlCarrito(nombreProducto);
        });
    });
});