var getDBResDiv = "#getDB";
/* Função que faz uma requisição GET */
function TestGETDB(){
    var url = "http://localhost:3000/user";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    console.log("printei");
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
    //console.log(xhttp.responseText);
}

function criarLinha(){
    var url="http://localhost:3000/userinsert"
    console.log('estou na funcao')
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            Instituicao: $('#instituicao').val(),
            Curso: $('#curso').val(),
        },
    });
    }

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

$(document).ready(function(){
    $("#nome").mouseenter(function(){
      alert("Oi eu sou a Luísa");
    });
  });

  



