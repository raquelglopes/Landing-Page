/*
Case Sensitive = reconhece letras maiusaculas e minusculas

por Tag : getElementByTagName()
porId: getElementById()
por nome : getElementsByName()
por Classe :getElementsBuClassName()
por Seletor: querySelector()


!let nome = getElementById(#inputNome)
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (txtNome.value.length <2) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML= 'Nome Válido'
        txtNome.style.color = 'blue'
        nomeOk= true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color='red'
    }else
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color='blue'
        emailOk = true
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length>= 100){
        txtAssunto.innerHTML= 'Texto excede o limite de 100 caracteres.'
        txtAssunto.style.color = 'red'
    }else
    txtAssunto.innerHTML= 'Texto com limite de 100 caracteres.'
    txtAssunto.style.color = 'blue'
    assuntoOk = true
    
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk){
        alert('Formulario enviado com sucesso')
    } else {
        alert('Preencha todos os campos do formulário antes de enviar.')
    }
*/