//primeiro peguei todos as minhas caixas de texto com o querSelectorAll com a ajuda do type text
const textInputs = document.querySelectorAll("input[type='text']");

//abrir a funçao trocar como se chama meu botão, criei o let  para a resposta da minha caixa de texto. 
function trocar(){
    let res1 = r1.value;
//coloquei minha resposta 1 na resposta 2
    r1.value = r2.value;  
//coloquei minha resposta 2 na resposta 1
    r2.value = res1;   
    
}