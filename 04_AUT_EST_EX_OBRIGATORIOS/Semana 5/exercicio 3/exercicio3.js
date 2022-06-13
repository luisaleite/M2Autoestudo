let input = document.getElementById("lista_desorganizada")
let result = document.getElementById("listaorganizada")
let sortedItems

function ordena_lista() {
    let items = input.value.split(",")
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

function valor_foco(){

}

