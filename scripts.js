let imagem = document.querySelector(".copo-starbucks");
let cor = document.querySelector(".circulo");

function trocarImagem(dadoImg) {
    imagem.src = dadoImg;
}

function trocarCor(dadoCor) {
    cor.style.background = dadoCor;
}
