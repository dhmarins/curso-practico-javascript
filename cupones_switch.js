const cupones = [
    "DESC15",
    "DESC25",
    "DESC30"
];

function calcularPrecioConDescuento(precio,cupon){
    
    const descuentoAplicar = 100 - cupon;
    const precioDescuento = (precio * descuentoAplicar) / 100;
    return precioDescuento;
}


function calcularPrecioFinal(){
    
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;

    const inputCupon = document.getElementById("inputCupon");
    const cupon = inputCupon.value;

    let descuento;

    switch(cupon){
        case cupones[0]: // DESC15
            descuento = 15;
        break;
        case cupones[1]: // DESC25
            descuento = 25;
        break;
        case cupones[2]: // DESC30
            descuento = 30;
        break;
        default:
            descuento = 0;
        break;
    }

const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

const mostrarPrecio = document.getElementById("mostrarPrecioFinal");
alert("El cupón tiene un descuento de " + descuento + "%");
mostrarPrecio.innerText = "El precio después de aplicar cupón es: " + precioConDescuento;
    
}



