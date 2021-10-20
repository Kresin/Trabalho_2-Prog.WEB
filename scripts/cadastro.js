function clean() {
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("birthDate").value = "";
    document.getElementById("checkboxF").checked = false;
    document.getElementById("checkboxM").checked = false;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function send() {
    let email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("O campo e-mail é inválido!\nO e-mail deve estar no formato endereco@dominio.dominio");
        return;
    }

    let username = document.getElementById("username").value;
    if (username === "") {
        alert("O campo usuário é inválido!\nO nome do usuário não pode ser vazio");
        return;
    }

    let password = document.getElementById("password").value;
    if (password === "") {
        alert("O campo senha é inválido!\nA senha não pode ser vazia");
        return;
    }

    let firstName = document.getElementById("firstName").value;
    if (firstName === "") {
        alert("O primeiro nome é inválido!\nO primeiro nome não pode ser vazio");
        return;
    }

    let lastName = document.getElementById("lastName").value;
    if (lastName === "") {
        alert("O campo sobrenome é inválido!\nO sobrenome não pode ser vazio");
        return;
    }
    
    let birthDate = document.getElementById("birthDate").valueAsDate;
    if (birthDate == null) {
        alert("O campo data de nascimento é inválido!\nA data deve estar no formato DD/MM/AAAA");
        return;
    }

    let f = document.getElementById("checkboxF").checked;
    let m = document.getElementById("checkboxM").checked;
    if (f == false && m == false) {
        alert("É necessário selecionar seu sexo!");
        return;
    }

    if (f == true && m == true) {
        alert("Apenas uma opção de sexo deve ser selecionada!");
        return;
    }

    alert("Parabéns!\nSeu cadastro foi realizado com sucesso!");
    let actualURL = window.location.href;
    newURL = actualURL.replace("cadastro.html", "index.html");
    window.location.href = newURL;
}