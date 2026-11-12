const paginasNavbar = [
    { titulo: "Home", direccion: "index.html" },
    { titulo: "Procesadores", direccion: "pages/procesadores.html" },
    { titulo: "Placas de video", direccion: "pages/placas-video.html" },
    { titulo: "Memorias RAM", direccion: "pages/memorias-ram.html" },
    { titulo: "Almacenamiento", direccion: "pages/almacenamiento.html" },
    { titulo: "Carrito", direccion: "pages/carrito.html" }
];

const headerPrincipal = document.querySelector("#header-principal");

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
                <span class="usuario-navbar" id="usuario-navbar"></span>
                <button class="logout boton-logout" id="boton-logout" type="button">Cerrar sesión</button>
            </div>
        </nav>
    `;

    if (usuario) {
        document.querySelector("#usuario-navbar").textContent = usuario.email;
    }

    const botonLogout = document.querySelector("#boton-logout");

    botonLogout.addEventListener("click", () => {
        sessionStorage.removeItem("usuarioLogueado");
        window.location.href = `${prefijo}/pages/login.html`;
    });
}
