function mais(){
    var quantidade = Number(document.getElementById("quantidade").value);
    const mais = 1;

    var bmais = (quantidade) + (mais);
    
 document.getElementById("quantidade").value = bmais;
}

function menos(){
    var quantidade = Number(document.getElementById("quantidade").value);
    const menos = 1;

    var bmenos = (quantidade) - (menos);

    document.getElementById("quantidade").value = bmenos;
}
//finalmente resolvi um problema de javascript sozinha sem ajuda de nimguem, aleluia, to muito feliz