(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
        }
            form.classList.add('was-validated')
        
        }, false)
        })
})()


const form = document.getElementById('form-1')

form.addEventListener('submit',(e)=>{
    if(validarTexto()){
        e.preventDefault()
        form.classList.add('d-none')
        document.getElementById('caja-contenedor').innerHTML = mostrarCaja()
    }
})


function validarTexto(){
    if(document.getElementById('validation01').value.trim() == '' || 
        document.getElementById('validation02').value.trim() == '' ||
        document.getElementById('validation03').value.trim() == '' ||
        document.getElementById('validation04').value.trim() == '' ||
        document.getElementById('validation05').value.trim() == '' ||
        document.getElementById('validation06').value.trim() == '' ||
        document.getElementById('validation07').value.trim() == ''){
            return false
        }
    else{
        return true
    }
}

function mostrarCaja(){
    return `<div class="d-flex justify-content-center m-5 py-4">
                <div class="card form-style">
                    <div class="card-body text-white text-center">
                        <h5 class="card-title">Producto registrado exitosamente!</h5>
                            <i class="bi bi-box2-heart-fill text-white"></i>
                            <p class="card-text">Muchas gracias por usar nuestra web, esperamos verte más seguido por aquí
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                                </svg>
                            </p>
                            <img src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5357079588e00bb27e9058_peep-46.png" alt="" class="card-img">
                    </div>
                </div>
            </div>`
}
