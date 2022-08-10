const lista1 = [];

function almacenarArray(){
    const inputRepeticiones = document.getElementById("inputRepeticiones");
    const repeticiones = inputRepeticiones.value;

    for (let i = 0; i < repeticiones; i++){
        let iteracion = prompt("Ingrese el valor a almacenar en la lista");
        lista1.push(iteracion);
    }

    ordenarArray(lista1);
    const mostrarLista1 = document.getElementById("imprimirArray");
    mostrarLista1.innerText = "La lista ingresada es: " + lista1;
    
    return lista1;
        
}

const lista1Contador = {};


function ordenarArray(lista1){
    lista1.map(
    //Se envía a una función los elementos del array a un objeto
    function(elemento){
        if(lista1Contador[elemento]){
            lista1Contador[elemento] += 1;
        }else{
            lista1Contador[elemento] = 1;
        }        
    }
    );
    
    //Se convierte el objeto nuevamente en lista
    const lista1Array = Object.entries(lista1Contador).sort(
        function (valorAcumulado,nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];
    const mostrarModa = document.getElementById("imprimirModa");
    mostrarModa.innerText = "La moda o el elemento que más se repite es " + moda[0] + " y se repite " + moda[1] + " veces"; 
    return moda;
}


