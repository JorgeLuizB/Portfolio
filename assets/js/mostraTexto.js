function mostrarTexto() {
    var textos = document.querySelectorAll(".mostra-texto");

    for (var i = 0; i < textos.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = textos[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
        textos[i].classList.add("mostra-texto_ativo");
        } else {
        textos[i].classList.remove("mostra-texto_ativo");
        }
    }
}

    window.addEventListener("scroll", mostrarTexto);