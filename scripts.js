let imagem = document.querySelector(".copo-starbucks");
let cor = document.querySelector(".circulo");

function trocarImagem(dadoImg, dadoCor) {
    imagem.src = dadoImg;
    cor.style.background = dadoCor;
}
