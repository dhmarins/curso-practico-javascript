//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//código del triángulo
console.group("Triángulos");

function alturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2){
        return Math.sqrt(lado1**2-((base**2)/4));
    }else{
        return "No es un triangulo iscoceles";
    }
}

function perimetroTriangulo(lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}


function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código círculo
console.group("Circulos");
const PI = Math.PI;
console.log("PI es: " + PI);

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio){
    return (radio * radio) / 2;
} 

console.groupEnd();

//Interacción con html -> Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Interacción con html -> triángulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLadoTriangulo1");
    const input2 = document.getElementById("inputLadoTriangulo2");
    const input3 = document.getElementById("inputBaseTriangulo");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("inputBaseTriangulo");
    const input4 = document.getElementById("inputAlturaTriangulo");
    const value3 = input3.value;
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputLadoTriangulo1");
    const input2 = document.getElementById("inputLadoTriangulo2");
    const input3 = document.getElementById("inputBaseTriangulo");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const altura = alturaTriangulo(value1,value2,value3);
    alert(altura);

}

//Interacción con html -> círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

