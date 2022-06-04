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

$(document).ready(function(){
    $("#nome").mouseenter(function(){
      alert("Oi eu sou a Luísa");
    });
  });

function criarLinha(){
  $.get("http://127.0.0.1:3020/user", function(mensagem){
      var msg = JSON.parse(mensagem);
      console.log(msg);
      console.log(msg[0].curso);
      $("#linha").append(
          `<table>
          <tr>
              <th>Instituicão</th>
              <th>Curso</th>
          </tr>
          <tr>
              <td>` + msg[0].Instituicao + `</td>
              <td>` + msg[0].Curso + `</td>
          </tr>
          <tr>
              <td>` + msg[1].Instituicao + `</td>
              <td>` + msg[1].Curso + `</td>
          </tr>
          <tr>
              <td>` + msg[2].Instituicao + `</td>
              <td>` + msg[2].Curso + `</td>
          </tr>`
      );
  });
}