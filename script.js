document.addEventListener("DOMContentLoaded", function() {
    var iconoUsuario = document.getElementById("icono-usuario");

    iconoUsuario.addEventListener("click", function() {
        mostrarFormulario();
    });
    function mostrarFormulario() {
        var formulario = document.getElementById("formularioRegistro");
        formulario.style.display = (formulario.style.display === "block") ? "none" : "block";
        overlay.style.display = (overlay.style.display === "block") ? "none" : "block";
    }
});

const btnCart = document.querySelector('.contenedor-carrito-icono');
const containerCartProducts = document.querySelector('.contenedor-carrito');

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('ocultar-carrito');
});

/* ========================= */
const cartInfo = document.querySelector('.carrito-producto');
const rowProduct = document.querySelector('.lista-producto');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.contenedor-producto');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contadorCarrito');
const cartEmpty = document.querySelector('.carrito-vacío');
const cartTotal = document.querySelector('.precio-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;
        const infoProduct = {

			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

        const exits = allProducts.some(product => product.title === infoProduct.title);

        if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
            allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

        showHTML();

    }
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('boton-x')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});


// Funcion para mostrar  HTML
const showHTML = () => {

    if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

    //limpiar html
    rowProduct.innerHTML = '';

    let total = 0;
	let totalOfProducts = 0;

    allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('carrito-producto');

        containerProduct.innerHTML = `
        <div class="info-producto">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <button class="boton-x"><i class="bi bi-x-lg"></i></button>
        `;

		rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;

    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;

};
