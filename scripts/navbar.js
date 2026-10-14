const paginasNavbar = [
    { titulo: "Home", direccion: "index.html" },
    { titulo: "Procesadores", direccion: "pages/procesadores.html" },
    { titulo: "Placas de video", direccion: "pages/placas-video.html" },
    { titulo: "Memorias RAM", direccion: "pages/memorias-ram.html" },
    { titulo: "Almacenamiento", direccion: "pages/almacenamiento.html" }
];

const headerPrincipal = document.querySelector("#header-principal");

if (headerPrincipal) {
    const prefijo = headerPrincipal.dataset.prefijo;

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
                <button class="logout boton-logout" id="boton-logout" type="button">Cerrar sesión</button>
            </div>
        </nav>
    `;

    const botonLogout = document.querySelector("#boton-logout");

    botonLogout.addEventListener("click", () => {
        window.location.href = `${prefijo}/pages/login.html`;
    });
}
