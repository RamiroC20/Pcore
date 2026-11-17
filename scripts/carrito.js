const contenedorCarrito = document.querySelector("#contenedor-carrito");
const totalCarrito = document.querySelector("#total-carrito");
const botonVaciarCarrito = document.querySelector("#vaciar-carrito");

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
    botonVaciarCarrito.disabled = carrito.length === 0;

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
                <div class="cantidad-carrito">
                    <button type="button" data-accion="restar" data-id="${producto.id}" aria-label="Restar una unidad de ${producto.titulo}">−</button>
                    <span>Cantidad: ${producto.cantidad}</span>
                    <button type="button" data-accion="sumar" data-id="${producto.id}" aria-label="Sumar una unidad de ${producto.titulo}">+</button>
                </div>
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
    const productoId = Number(evento.target.dataset.id);

    if (evento.target.classList.contains("boton-eliminar")) {
        const carritoActualizado = obtenerCarritoGuardado().filter((producto) => {
            return producto.id !== productoId;
        });

        guardarCarrito(carritoActualizado);
        mostrarCarrito();
        window.dispatchEvent(new Event("carritoActualizado"));
        return;
    }

    if (!evento.target.dataset.accion) {
        return;
    }

    const carrito = obtenerCarritoGuardado();
    const producto = carrito.find((item) => item.id === productoId);

    if (evento.target.dataset.accion === "sumar") {
        producto.cantidad++;
    }

    if (evento.target.dataset.accion === "restar" && producto.cantidad > 1) {
        producto.cantidad--;
    }

    guardarCarrito(carrito);
    mostrarCarrito();
    window.dispatchEvent(new Event("carritoActualizado"));
});

botonVaciarCarrito.addEventListener("click", () => {
    localStorage.removeItem("carritoPcore");
    mostrarCarrito();
    window.dispatchEvent(new Event("carritoActualizado"));
});

mostrarCarrito();
