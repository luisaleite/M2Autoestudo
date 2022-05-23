let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
        if(meuSrc === 'imagem/luisa.jpg') {
        minhaImagem.setAttribute ('src','imagem/luisa2.jpg');
        } 
        else {
        minhaImagem.setAttribute ('src','imagem/luisa.jpg');
        }
}

function clique(){
    document.getElementById("linha").innerHTML += "oi!"; 
}