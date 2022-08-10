const lista = [];

function almacenarLista(){
    const inputRepeticiones = document.getElementById("inputRepeticiones");
    const iteraciones = inputRepeticiones.value;
    for (let i = 0; i < iteraciones; i++){
        const numero = prompt("Ingrese el número para añadir a la lista");
        lista.push(numero);
    }
    

    ordenarLista(lista);
}

function ordenarLista(lista){
    const listaOrdenada = lista.sort((a,b) => {
        return a - b;
    });

    const mostrarLista = document.getElementById("mostrarListaOrdenada");
    mostrarLista.innerText = "La lista ingresada ordenada es " + listaOrdenada;
    
    calcularRangoMedio(listaOrdenada);
    return listaOrdenada;
}

function calcularRangoMedio(listaX){
    const minimo = parseInt(listaX[0]);
    const maximo = parseInt(listaX[listaX.length -1]);


    const rangoMedio = (minimo + maximo)/2;
    const mostrarRangoMedio = document.getElementById("mostrarRangoMedio");
    mostrarRangoMedio.innerText = "el rango medio de los datos ingresados es " + rangoMedio;

    //return rangoMedio;
}
