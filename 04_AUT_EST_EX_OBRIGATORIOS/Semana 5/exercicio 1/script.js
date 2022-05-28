function calcular(){
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir \n[5] Dividir e arredondar \n[6] Resto da divisão`))
    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando...</h2>`

    switch (op) { 
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break  
    }

    switch (op){
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
        break
    }

    switch(op){
        case 3:
            saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
        break
    }

    switch (op){
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${n1/n2}</strong></p> `
        break
    }

    switch (op){
        case 5:
            saida.innerHTML += `<p>${n1} // ${n2} = <strong> ${Math.round(n1/n2)}</strong></p>`
        break
    }

    switch (op){
        case 6:
            saida.innerHTML += `<p>${n1} % ${n2} = <strong> ${n1%n2}</strong></p>`
        break
        

    }
}