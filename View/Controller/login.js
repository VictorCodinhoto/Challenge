//function logar(){
//     var user = document.getElementById('user').value;
//     var senha = document.getElementById('senha').value;

//     if(user == "root" && senha == "root"){
//         windows.alert("sucesso")
//     }
//     else{
//         windows.alert("Usuário ou senha incorretos!")
//     }
//  }

function validateFields() {
     const senha = document.getElementById("senha").value;
     if (senha != null){
        document.getElementById("botao-login").disabled = false;
     }else{
        document.getElementById("botao-login").disabled = true;
     }
}
// function validateEmail() {
//     return /\S+@\S+\,\S+/.test(email)
// }
