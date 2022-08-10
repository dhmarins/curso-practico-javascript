//function calcularPrecioConCupon(){
    //const inputCupon = document.getElementById("inputCupon");
    //const cuponValue = inputCupon.value;   
//}

let cupones = [
    { nombre:"DESCUENTO10", descuento:10 },
    { nombre:"DESCUENTO15", descuento:15 },
    { nombre:"DESCUENTO20", descuento:20 },
    { nombre:"DESCUENTO25", descuento:25 },
    { nombre:"DESCUENTO30", descuento:30 }
];

function calcularDescuento(precio,cupon){

    if (cupon === cupones[0].nombre){
        const descuento = 100 - cupones[0].descuento;
        const precioDescuento = (precio * descuento) / 100;
        return precioDescuento; 
    }else if (cupon === cupones[1].nombre){
        const descuento = 100 - cupones[1].descuento;
        const precioDescuento = (precio * descuento) / 100;
        return precioDescuento; 
    }else if (cupon === cupones[2].nombre){
        const descuento = 100 - cupones[2].descuento;
        const precioDescuento = (precio * descuento) / 100;
        return precioDescuento; 
    }else if (cupon === cupones[3].nombre){
        const descuento = 100 - cupones[3].descuento;
        const precioDescuento = (precio * descuento) / 100;
        return precioDescuento; 
    }else if (cupon === cupones[4].nombre){
        const descuento = 100 - cupones[4].descuento;
        const precioDescuento = (precio * descuento) / 100;
        return precioDescuento; 
    }else{
        const precioFinalSinDescuento = precio;
        return precioFinalSinDescuento;
    }
    
    
   

}

function calcularPrecioFinal(){
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = inputPrecio.value;
    const inputCupon = document.getElementById("inputCupon");
    const valueCupon = inputCupon.value;

    const calcularPrecioFinal = calcularDescuento(valuePrecio, valueCupon);

    const resultadoPrecio = document.getElementById("resultado");
    resultadoPrecio.innerText = "El precio con descuento aplicando el cupón " + valueCupon + " es $" + calcularPrecioFinal;
}
