function lerMais() {
    var conteudoOculto = document.getElementById("contentOculto");
    var lerMaisLink = document.getElementById("lerMais");

    if (conteudoOculto.style.display === "none" || conteudoOculto.style.display === "") {
        conteudoOculto.style.display = "inline";
        lerMaisLink.textContent = "Ler menos";
    } else {
        conteudoOculto.style.display = "none";
        lerMaisLink.textContent = "Ler mais";
    }
}
