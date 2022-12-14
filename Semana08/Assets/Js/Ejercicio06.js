const precio = 70

const descuento = (cantidad, forma_pago)=>{
    let descuento = 0, total=0,cantidad_descuento='',pago=''

    if(forma_pago == 1){
        total = cantidad * precio
        descuento = total * 0.1
        descuento = total - descuento
        cantidad_descuento = '10%'
        pago='Efectivo'
    }
    else if(forma_pago == 2){
        total = cantidad * precio
        descuento = total * 0.05
        descuento = total - descuento
        cantidad_descuento = '5%'
        pago='Tarjeta de crédito'
    }
    else if(forma_pago == 3){
        total = cantidad * precio
        descuento = total * 0.15
        descuento = total - descuento
        cantidad_descuento = '15%'
        pago='Vale'
    }
    else{
        return 'Forma de pago invalida'
    }

    return `    --Cantidad de impresoras: ${cantidad}
    --Forma de pago: ${pago}
    --Descuento a aplicar: ${cantidad_descuento}
    --Total a pagar: ${descuento}
    `
}

let cantidad_impresoras = Number(prompt('Ingrese la cantidad de impresoras a vender: '))
let forma_pago = Number(prompt("Ingrese el codigo de la forma de pago:\n1.Efectivo\n2.Tarjeta de crédito\n3.Vale"))

alert(descuento(cantidad_impresoras,forma_pago))