document.addEventListener("DOMContentLoaded", function(){

    let form = document.getElementsByTagName("form")[0];

    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }

    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }

    function validarFormulario(event){
        let password = document.getElementById("password1");
        let scndpassword = document.getElementById("password2");
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");
        let check = document.getElementById("terminos");
        // Evita que la página se recargue
        event.preventDefault();
        if(password.value===scndpassword.value){
            showAlertSuccess();
        }else{
            showAlertError();
        }
    }

    form.addEventListener("submit", validarFormulario);
});