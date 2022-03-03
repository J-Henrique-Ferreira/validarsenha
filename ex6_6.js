function verifiqueValidade() {
    var inSenha = document.getElementById("inSenha");
    var senha = inSenha.value;

    if (senha == Number(senha) || senha == "") {
        alert("Insira valores válidos no campo.");
        inSenha.value = "";
        inSenha.focus();
        return;
    }

    if (senha.length < 8 || senha.length > 15) {
        alert("Mínimo 8 e no máximo 15 caracteres");
        inSenha.focus();
        return;
    }
    
    var letras_A = senha.match(/[A-Z]/g);
    var letras_a = senha.match(/[a-z]/g);
    var numeros = senha.match(/[0-9]/g);
    var caracteres = senha.match(/\W|_/g);

    var validade = true;

    for (let i = 0; i < senha.length; i++) {
        if (letras_a == null) {
            alert("Por segurança adicione no mínimo 1 letras minúscula.");
            validade = false;
            inSenha.focus();
            break;
        }
        if (letras_A == null) {
            alert("Por segurança adicione no mínimo 2 letras maiúsculas.");
            validade = false;
            inSenha.focus();
            break;
        }
        if (numeros == null) {
            alert("Por segurança adicione no mínimo 1 número.");
            validade = false;
            inSenha.focus();
            break;
        }
        if (caracteres == null) {
            alert("Por segurança adicione no mínimo 1 símbolo.");
            validade = false;
            inSenha.focus();
            break
        }
    }
    if (validade == true) {
        validade = "SENHA SEGURA";
    } else {
        validade = "SENHA VULNERÁVEL";
    }
   var copiaSenha = senha;
    document.getElementById("outValidade").textContent = validade;
    document.getElementById("outSenha").textContent = copiaSenha;
    
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verifiqueValidade);