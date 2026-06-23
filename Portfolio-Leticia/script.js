function mostrarMensagem(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;

    let mensagem =
    document.getElementById("mensagem");

    mensagem.innerHTML =
    "Obrigado pelo contato, " + nome + "!";
}

document
.getElementById("formContato")
.addEventListener("submit", mostrarMensagem);