let mensagem = document.getElementById("mensagem");
let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    mensagem.textContent = "Você clicou no botão! 🎉";
});
