

const descuento_cupon = {
    DESC10: 10,
    DESC15: 15,
    DESC20: 20,
    DESC25: 25,
    DESC30: 30
}

function calcularPrecioConDescuento(precio,cupon){
    const descuentoAplicar = 100 - cupon;
    const precioDescuento = (precio * descuentoAplicar) / 100;
    return precioDescuento;
}

function calcularPrecioFinal(){
    //const descuento_defecto = 0;
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;
    const inputCupon = document.getElementById("inputCupon");
    const cuponValor = inputCupon.value;

    const descuento_definitivo = descuento_cupon[cuponValor] || 0; //*descuento_defecto

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento_definitivo);

    const mostrarPrecio = document.getElementById("mostrarPrecioFinal");
    alert("El cupón tiene un descuento de " + descuento_definitivo + "%");
    mostrarPrecio.innerText = "El precio después de aplicar cupón es: $" + precioConDescuento;
}

