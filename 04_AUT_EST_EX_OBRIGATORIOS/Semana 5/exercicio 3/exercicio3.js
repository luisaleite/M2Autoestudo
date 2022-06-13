let input = document.getElementById("lista_desorganizada");
let result = document.getElementById("listaorganizada");
let sortedItems;
let items = input.value.split(",");
let valor = Number(document.getElementById("valor_foco"));

function ordena_lista() {
    items = input.value.split(",");
    items = items.map(item => parseInt(item))
    sortedItems = bubblesort(items)
    let li = document.createElement("li")

    li.innerHTML = `${
        sortedItems
        
    }`
    result.appendChild(li)
}

function bubblesort(items){
    let swap;
    let last = items.length - 1;
    do{
        swap = false;
        for (let i = 0; i < last; i++) {
            if (items[i] > items[i+1]){
                [items[i], items[i+1]] = [items[i+1], items[i]];
                swap = true
            }
        }
        last--;
    } while(swap)
    return items;
}

function ache(){
        let valor = document.getElementById("valor_foco")
        let posicao = buscabinaria(valor)
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = posicao
}

function buscabinaria(valor_foco){
    var nachei = true;
    var maximo = items.length-1;
    var minimo = 0; 
    while (nachei  &&  (maximo > minimo)){
        console.log("Indice do meio " + indicidomeio)
        console.log(maximo)
        console.log(minimo)

        var indicidomeio = Math.floor((maximo+minimo)/2)
        console.log("Item " + items[indicidomeio])
        if (items[indicidomeio] == Number(valor_foco)){
            nachei = false
            return indicidomeio
        }
        else {
            if (items[indicidomeio] > valor_foco){
                maximo = indicidomeio
            }
            else 
            {
                minimo = indicidomeio
            }

        }
        
    }
}



//(items = max=i min=j)
     //let metade = max+min/2

     /*if 
     metade > valor_foco
     max= metade min=j
     else
     metade < valor_foco
     min=metade max=i*/

