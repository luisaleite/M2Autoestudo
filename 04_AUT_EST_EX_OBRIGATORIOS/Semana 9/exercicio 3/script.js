function ordena(nome){
    let ns = nome.value;
    let arrNs = ns.split(", ");
    let sort = arrNs.sort();
    console.log(sort);
    document.getElementById("result").innerHTML = sort;
}