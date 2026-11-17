const contenedoresProductos = document.querySelectorAll("[data-productos]");
const rutaJson = document.body.dataset.rutaJson;
const prefijoProductos = document.body.dataset.prefijo;

function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(precio);
}

function crearCardProducto(producto) {
    const card = document.createElement("article");
    card.classList.add("producto-card");
    card.dataset.productoId = producto.id;

    card.innerHTML = `
        <img class="producto-imagen" src="${prefijoProductos}/${producto.imagen}" alt="${producto.titulo}">
        <span class="producto-categoria">${producto.etiqueta}</span>
        <h2>${producto.titulo}</h2>
        <p>${producto.descripcion}</p>
        <strong class="producto-precio">${formatearPrecio(producto.precio)}</strong>
        <div class="cantidad-producto">
            <button class="cantidad-boton" type="button" data-accion="restar" aria-label="Restar una unidad de ${producto.titulo}">−</button>
            <span class="cantidad-valor">1</span>
            <button class="cantidad-boton" type="button" data-accion="sumar" aria-label="Sumar una unidad de ${producto.titulo}">+</button>
        </div>
        <button class="boton-agregar" type="button">Agregar al carrito</button>
    `;

    return card;
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carritoPcore")) || [];
}

function guardarEnCarrito(producto, cantidad) {
    const carrito = obtenerCarrito();
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    localStorage.setItem("carritoPcore", JSON.stringify(carrito));
}

function configurarEventos(contenedor, productos) {
    contenedor.addEventListener("click", (evento) => {
        const card = evento.target.closest(".producto-card");

        if (!card) {
            return;
        }

        const cantidadElemento = card.querySelector(".cantidad-valor");
        let cantidad = Number(cantidadElemento.textContent);

        if (evento.target.dataset.accion === "sumar") {
            cantidad++;
        }

        if (evento.target.dataset.accion === "restar" && cantidad > 1) {
            cantidad--;
        }

        cantidadElemento.textContent = cantidad;

        if (evento.target.classList.contains("boton-agregar")) {
            const productoId = Number(card.dataset.productoId);
            const producto = productos.find((item) => item.id === productoId);
            guardarEnCarrito(producto, cantidad);
            window.dispatchEvent(new Event("carritoActualizado"));

            evento.target.textContent = "Agregado";
            setTimeout(() => {
                evento.target.textContent = "Agregar al carrito";
            }, 1000);
        }
    });
}

async function cargarProductos() {
    try {
        const respuesta = await fetch(rutaJson);

        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar los productos.");
        }

        const productos = await respuesta.json();

        contenedoresProductos.forEach((contenedor) => {
            const categoria = contenedor.dataset.categoria;
            const limite = Number(contenedor.dataset.limite) || productos.length;
            const productosFiltrados = productos
                .filter((producto) => producto.categoria === categoria)
                .slice(0, limite);

            productosFiltrados.forEach((producto) => {
                contenedor.appendChild(crearCardProducto(producto));
            });

            configurarEventos(contenedor, productos);
        });
    } catch (error) {
        contenedoresProductos.forEach((contenedor) => {
            contenedor.innerHTML = `<p class="mensaje-error">${error.message}</p>`;
        });
        console.error(error);
    }
}

cargarProductos();
