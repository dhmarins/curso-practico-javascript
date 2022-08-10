

function calcularMediaAritmetica(lista){
    //let sumaLista = 0;

    //for (let i=0; i < lista.length; i++) {
        //sumaLista = sumaLista + lista[i];
    //}
    
    //const sumaLista = lista.reduce(
        //function (valorAcumulado = 0, nuevoElemento) {
            //return valorAcumulado + nuevoElemento;
        //}
    //);

    const sumaLista = lista.reduce( (valorAcumulado,nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    }, 0);

    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}
