const formularioLogin = document.querySelector("#form-login");

formularioLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();
    window.location.href = "../index.html";
});
