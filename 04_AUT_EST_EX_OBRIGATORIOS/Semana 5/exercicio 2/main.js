function mostrarPainel(){
    var valor = prompt("Digite o valor a sacar desejado", "0");
    if (valor >= 0){
        calcularNota100(valor);
    }
    else {
        alert("Digite um valor positivo!");
        mostrarPainel()
    }
}

function calcularNota100(vlr){
    var notaCem = Math.floor(vlr/100);
    var resto = vlr % 100;
    document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 100 recebidas = ` + notaCem;
    calcularNota50(resto);
    
} 

function calcularNota50 (vlr){
    var notaCinquenta = Math.floor(vlr/50);
    var resto = vlr % 50;
    document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 50 recebidas = ` + notaCinquenta;
    calcularNota20(resto);
}

function calcularNota20 (vlr){
    var notaVinte = Math.floor(vlr / 20);
    var resto = vlr % 20;
    document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 20 recebidas = ` + notaVinte;
    calcularNota10(resto);
}

function calcularNota10 (vlr){
    var notaDez = Math.floor(vlr / 10);
    var resto = vlr % 10;
    document.getElementById("resultadoFinal").innerHTML += "<br /> Notas(s) de 10 recebidas = " + notaDez;
    calcularNota5(resto);
}

function calcularNota5 (vlr){
    var notaCinco = Math.floor(vlr/5);
    var resto = vlr % 5;
    document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 5 recebidas = ` + notaCinco;
    calcularNota2(resto);
}

function calcularNota2 (vlr){
    var notaDois = Math.floor(vlr / 2);
    var resto = vlr % 2;
    document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 2 recebidas = ` + notaDois;
    calcularNota1(resto);
}

function calcularNota1 (vlr){
    var notaUm = Math.floor(vlr / 1);
    document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 1 recebidas = ` + notaUm;
}

