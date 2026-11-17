const paginasNavbar = [
    { titulo: "Home", direccion: "index.html" },
    { titulo: "Procesadores", direccion: "pages/procesadores.html" },
    { titulo: "Placas de video", direccion: "pages/placas-video.html" },
    { titulo: "Memorias RAM", direccion: "pages/memorias-ram.html" },
    { titulo: "Almacenamiento", direccion: "pages/almacenamiento.html" },
    { titulo: "Carrito", direccion: "pages/carrito.html" }
];

const headerPrincipal = document.querySelector("#header-principal");

function actualizarContadorCarrito() {
    const contador = document.querySelector("#contador-carrito");

    if (!contador) {
        return;
    }

    const carrito = JSON.parse(localStorage.getItem("carritoPcore")) || [];
    const cantidadTotal = carrito.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);

    contador.textContent = cantidadTotal;
    contador.setAttribute("aria-label", `${cantidadTotal} productos en el carrito`);
}

if (headerPrincipal) {
    const prefijo = headerPrincipal.dataset.prefijo;
    const usuarioGuardado = sessionStorage.getItem("usuarioLogueado");

    if (!usuarioGuardado) {
        window.location.href = `${prefijo}/pages/login.html`;
    }

    const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

    const enlacesNavbar = paginasNavbar.map((pagina) => {
        return `<a href="${prefijo}/${pagina.direccion}">${pagina.titulo}</a>`;
    }).join("");

    headerPrincipal.innerHTML = `
        <nav class="navbar">
            <a class="marca" href="${prefijo}/index.html">
                <img src="${prefijo}/assets/img/logo-navbar.png" alt="Logo de PCore">
                <span>PCORE</span>
            </a>
            <div class="nav-links">
                ${enlacesNavbar}
                <span class="contador-carrito" id="contador-carrito" aria-label="0 productos en el carrito">0</span>
                <span class="usuario-navbar" id="usuario-navbar"></span>
                <button class="logout boton-logout" id="boton-logout" type="button">Cerrar sesión</button>
            </div>
        </nav>
    `;

    if (usuario) {
        document.querySelector("#usuario-navbar").textContent = usuario.email;
    }

    actualizarContadorCarrito();
    window.addEventListener("carritoActualizado", actualizarContadorCarrito);
    window.addEventListener("storage", actualizarContadorCarrito);

    const botonLogout = document.querySelector("#boton-logout");

    botonLogout.addEventListener("click", () => {
        sessionStorage.removeItem("usuarioLogueado");
        window.location.href = `${prefijo}/pages/login.html`;
    });
}
