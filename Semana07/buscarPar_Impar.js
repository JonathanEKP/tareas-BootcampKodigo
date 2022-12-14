let par = 0 , suma_par=0, impar = 0, suma_impar=0, n=0

for(i=1; i<=5;i++){
    n = Number(prompt("Ingrese un numero"))

    if(n % 2 == 0){
        par++
        suma_par = suma_par+n
    }else{
        impar++
        suma_impar = suma_impar+n
    }
}

console.log("Cantidad de pares: "+par)
console.log("Promedio de pares: "+(suma_par/par))
console.log("Cantidad de impares: "+impar)
console.log("Promedio de impares: "+(suma_impar/impar))