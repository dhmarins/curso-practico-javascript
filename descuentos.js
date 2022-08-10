//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}



function precioFinalConDescuento(){
    const inputPrecio = document.getElementById("inputPrecio");
    const inputDescuento = document.getElementById("inputDescuento");
    const valuePrecio = inputPrecio.value;
    const valueDescuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrecio,valueDescuento);
    
    const resultadoPrecio = document.getElementById("resultadoPrecio");
    resultadoPrecio.innerText = "El precio con descuento es $" + precioConDescuento;
 }


//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});