let tipo = Number(prompt("Ingrese el codigo del vehiculo: \n1:Vehiculo particular\n2:Autobus\n3:Microbus\n4:Moto taxi\n5:Moto\n6:Otros"))

switch(tipo){
    case 1:
        alert('El vehiculo particula paga: $0.75 de impuesto')
        break
    case 2:
        alert('El Autobus paga: $1.50 de impuesto')
        break
    case 3:
        alert('El microbus paga: $1.25 de impuesto')
        break
    case 4:
        alert('Moto taxi paga: $0.50 de impuesto')
        break
    case 5:
        alert('Moto paga: $0.30 de impuesto')
        break
    case 6:
        alert('Otros paga: $3.00 de impuesto')
    default:
        alert('El codigo seleccionado no existe')
}