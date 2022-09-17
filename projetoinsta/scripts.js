let imagem = document.getElementById("img-insta2")

const trocaImg = () => {

    if (imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    }
    else {
        imagem.style.opacity = 0
    }
}

setInterval(() => { trocaImg() }, 4000);




