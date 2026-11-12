const contenedorCarrito = document.querySelector("#contenedor-carrito");
const totalCarrito = document.querySelector("#total-carrito");

function formatearPrecioCarrito(precio) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(precio);
}

function obtenerCarritoGuardado() {
    return JSON.parse(localStorage.getItem("carritoPcore")) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carritoPcore", JSON.stringify(carrito));
}

function mostrarCarrito() {
    const carrito = obtenerCarritoGuardado();
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <div class="carrito-vacio">
                <p>Tu carrito está vacío.</p>
                <a class="boton" href="../index.html">Ver productos</a>
            </div>
        `;
        totalCarrito.textContent = formatearPrecioCarrito(0);
        return;
    }

    carrito.forEach((producto) => {
        const item = document.createElement("article");
        item.classList.add("carrito-item");
        item.innerHTML = `
            <img src="../${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-info">
                <span>${producto.etiqueta}</span>
                <h2>${producto.titulo}</h2>
                <p>${producto.descripcion}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <strong>${formatearPrecioCarrito(producto.precio * producto.cantidad)}</strong>
            </div>
            <button class="boton-eliminar" type="button" data-id="${producto.id}">Eliminar</button>
        `;
        contenedorCarrito.appendChild(item);
    });

    const total = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.precio * producto.cantidad;
    }, 0);

    totalCarrito.textContent = formatearPrecioCarrito(total);
}

contenedorCarrito.addEventListener("click", (evento) => {
    if (!evento.target.classList.contains("boton-eliminar")) {
        return;
    }

    const productoId = Number(evento.target.dataset.id);
    const carritoActualizado = obtenerCarritoGuardado().filter((producto) => {
        return producto.id !== productoId;
    });

    guardarCarrito(carritoActualizado);
    mostrarCarrito();
});

mostrarCarrito();
