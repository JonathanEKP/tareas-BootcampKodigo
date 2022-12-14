const calificacion = Number(prompt('Ingrese la nota a evaluar: '))

const calcular_nota = (nota)=>{
    if(nota>=0 && nota<5){
        alert('Nota insuficiente')
    }
    else if( nota>4 && nota<=6){
        alert('Nota suficiente')
    }else if( nota>6 && nota<=8){
        alert('Bien')
    }
    else if(nota>8 &&nota<=10 ){
        alert('Excelente')
    }
    else{
        alert('Nota invalida')
    }
}

calcular_nota(calificacion)