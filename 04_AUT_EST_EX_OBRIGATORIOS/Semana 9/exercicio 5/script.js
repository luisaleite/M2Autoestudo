function Calcular(valor1,valor2){
    let inicio = parseInt(valor1.value);
    let fim = parseInt(valor2.value); 
    document.getElementById("resultado").innerHTML = `Os primos entre ${inicio} e ${fim} são: <br>`;

    for (let i = inicio; i <= fim; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            document.getElementById("resultado").innerHTML +=`${i}<br>`;
        }
    }
}