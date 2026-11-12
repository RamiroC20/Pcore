const formularioLogin = document.querySelector("#form-login");

formularioLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const email = document.querySelector("#email").value;
    const usuario = { email: email };

    sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
    window.location.href = "../index.html";
});
