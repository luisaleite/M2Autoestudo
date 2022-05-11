console.log("Luisa");
function calcular(){
    var velocidade = Number(document.getElementById("velocidade").value);
    const g = 10;

    var altura = (velocidade * velocidade)/(2 * g);
    var tempo = velocidade/g;

    console.log(altura);
    console.log(tempo);

    document.getElementById("resultado").innerHTML = "Altura: " + altura + "<br />Tempo: " + tempo;
}