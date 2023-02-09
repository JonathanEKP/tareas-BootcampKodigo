window.addEventListener('load', ()=>{
    const display = document.getElementById('display')
    const buttons = document.getElementsByClassName('btn')

    const buttonsArray = Array.from(buttons)

    buttonsArray.forEach((button)=>{
        button.addEventListener('click',()=>{
            calculadora(button, display)
        })
    })
})


function calculadora(button, display){
    switch (button.innerHTML) {
        case 'CE':
            borrar(display)
            break;
        case '=':
            calcular(display)
            break;
        case '&lt;':
            borrarUltimo(display)
            break;
        case '.':
            punto(display)
            break;
        default:
            actualizar(display, button)
            break;
    }
}


function calcular(display){
    display.innerHTML =  eval(display.innerHTML)
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = ''
    }
    display.innerHTML+=button.innerHTML
}

function borrar(display){
    display.innerHTML = 0
}

function borrarUltimo(display){
    if(!display.innerHTML == 0){
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
        if(display.innerHTML.length == 0){
            display.innerHTML = 0
        }
    }

}

function punto(display){
    let arrayNumbers = Array.from(display.innerHTML)
    if(!arrayNumbers.some(checkPunto)){
        display.innerHTML+= '.'
    }
}


function checkPunto(cadena){
    return cadena == '.'
}