function alternarImagens() {
    const imagem = document.getElementById('dynamicImage');
    const imagens = ['imagens/galeria de fotos foto 2.jpg', 'imagens/galeria de fotos foto 1.jpg', 
        'imagens/galeria de fotos foto 3.jpg', 'imagens/galeria de fotos foto 4.jpg']; 
    let indiceAtual = 0; 

    setInterval(() => {
        indiceAtual = (indiceAtual + 1) % imagens.length; 
        imagem.src = imagens[indiceAtual]; 
    }, 3000); 
}

window.onload = alternarImagens;

