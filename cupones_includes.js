const cupones = [
    {
        nombre: "DESC10",
        descuento: 10
    },
    {
        nombre: "DESC20",
        descuento: 20
    },
    {
        nombre: "DESC30",
        descuento: 30
    },
    {
        nombre: "DESC40",
        descuento: 40
    }
];

function calcularPrecioFinal(){

    const inputCupon = document.getElementById("inputCupon");
    const cuponValor = inputCupon.value; 
    
    const validarCupon = function(cupon){
        return cupon.nombre === cuponValor;
    }

    const usuarioCupon = cupones.find(validarCupon);


    if(!usuarioCupon){
        alert("El cupón " + cuponValor + " no es valido");
    }else{
        const inputPrecio = document.getElementById("inputPrecio");
        const precio = inputPrecio.value;
        const descuento = usuarioCupon.descuento;
        
        const precioConDescuento = calcularPrecioConDescuento(precio,descuento);

        const precioFinal = document.getElementById("mostrarPrecioFinal");
        precioFinal.innerText = "El precio final después de descuento es $" + precioConDescuento;
    }
}


function calcularPrecioConDescuento(precio,cupon){
    const descuentoAplicar = 100 - cupon;
    const precioDescuento = (precio * descuentoAplicar) / 100;
    return precioDescuento;
}

