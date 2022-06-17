const inputetanol = document.querySelector("#etanol-price");
const inputgasolina = document.querySelector("#gasolina-price");
const button = document.querySelector("#button");
const result = document.querySelector('#result');




function calcular() {

    let entradaetanol = inputetanol.value;
    let entradagasolina = inputgasolina.value;
    


    if(entradaetanol / entradagasolina >= 0.7){
       result.textContent = 'É mais vantajoso abastecer com Gasolina'
    }else if(entradaetanol / entradagasolina <= 0.7){
        result.textContent = 'É mais vantajoso abastecer com Etanol'
    }

    
}
button.onclick = calcular;
