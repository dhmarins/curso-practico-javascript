//Función para calcular el promedio
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( (valorAcumulado,nuevoElemento) => {
        //Se pasan a enteros, porque de lo contrario concatena los dos valores sumados
        return parseInt(valorAcumulado) + parseInt(nuevoElemento);
    }, 0);

    const promedioLista = sumaLista/2;

    return promedioLista;
}

//Es necesario declararlo de forma global
let lista1 = [];

//Almacena los valores ingresados por el usuario
function almacenarArray(){
    //1- Se recibe la cantidad de veces que el usuario va a ingresar números
    const inputRepeticiones = document.getElementById("inputRepeticiones");
    const numero = parseInt(inputRepeticiones.value);
    
    //2- Se itera la cantidad de veces que el usuario ingresó
    for (let i = 0; i < numero; i++) {
        //2.1- Se crea una variable en la que el usuario va a ingresar un número para el array
        let iteracion = prompt("Ingrese el número");
        //2.2- Se almacena en el array vacío en cada iteración
        lista1.push(iteracion);        
    }

    //3- Se ordena el array (Función sort para organizar el array ascendente)
    lista1.sort((a, b) => {
        if(a == b){
            return 0;
        }
        if( a < b){
            return -1;
        }
        return 1;
    });

    //4- Se envía la lista organizada a la función calcular mediana
    calcularMediana(lista1);

    //Capturar y enviar el array para mostrar en HTML
    const mostrarLista1 = document.getElementById("imprimirArray");
    mostrarLista1.innerText = "El array ingresado es" + lista1;
    
    return lista1;
}

//Función para validar el array es par o impar
function esPar(itemArray){
    // % -> módulo (es el valor del residuo en la división)
    if (itemArray % 2 === 0 ){
        return true;
    }else{
        return false;
    }
}

//Se declara global sin inicializarla
let mediana;

//5- Realiza el cálculo de la mediana
function calcularMediana(lista1){
    //Permite, de acuerdo a la cantidad, conocer el tamaño del array para luego determinar la posición de la mitad
    const mitadLista1 = parseInt(lista1.length / 2);
    //Se valida con la función si es par
    if (esPar(lista1.length)) {
        //como es par, debe ir a las 2 posiciones del medio
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
        
        //se envían los dos datos para calcular el promedio de la mediana (para los pares)
        const promedioMitadLista = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        //La mediana es el valor del cálculo del promedio
        mediana = promedioMitadLista;
    }else{
        //De lo contrario ma mediana es la posición de la mitad
        mediana = lista1[mitadLista1];
    }
    
    //Capturar y enviar el valor de la mediana para mostrar en HTML
    const mostrarMediana = document.getElementById("imprimirMediana");
    mostrarMediana.innerText = "La mediana es " + mediana;
    return mediana;
}

