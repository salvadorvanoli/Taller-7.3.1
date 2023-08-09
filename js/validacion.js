document.addEventListener("DOMContentLoaded", function(){

let submitButton = document.getElementById("regBtn");

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validarFormulario(){
    let password = document.getElementById("password1");
    let scndpassword = document.getElementById("password2");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let check = document.getElementById("terminos");
    if(!password || !scndpassword || password.textContent!=scndpassword.textContent){
        showAlertError();
    } else {
        showAlertSuccess();
    }
}

// || password.length>6) || (!scndpassword || scndpassword!=password) || !nombre || !apellido || !email || !check){

submitButton.addEventListener("click", validarFormulario);
});