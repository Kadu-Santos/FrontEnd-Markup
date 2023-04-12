
//Função para exibir senha no login
function mostraSenhaLo() {
    var inputPass = document.getElementById("lsenha");

    if (inputPass.type === "password")
        inputPass.type = "text";
    else
        inputPass.type = "password";

}

//Função para evibir senha ao criar conta
function mostraSenhaCr() {
    var inputPass = document.getElementById("csenha");
    var inputCon = document.getElementById("ccsenha");

    if (inputPass.type === "password") {
        inputPass.type = "text";
        inputCon.type = "text";
    }
    else {
        inputPass.type = "password";
        inputCon.type = "password";
    }

}

//Verifica se todos os campos do formulário foram preenchidos e se as senhas conferem
function verifyCamp() {
    const form = document.getElementById('formulario');

    if(form != null) {
        const nome = document.getElementById('cnome');
        const email = document.getElementById('cemail');
        const senha = document.getElementById('csenha');
        const confirmaSenha = document.getElementById('ccsenha');

        form.addEventListener("input", () => {

            if (nome.value === '' || email.value === '' || senha.value === '' || confirmaSenha.value === '') {
                document.getElementById('ccmessage').textContent = 'Por favor, preencha todos os campos.';
                document.getElementById("newAccount").disabled = true;
                document.getElementById("newAccount").style.backgroundColor = "#e6f0ff";
                document.getElementById("newAccount").style.color = "#000000";
            }
            
            else if (senha.value !== confirmaSenha.value) {
                document.getElementById('ccmessage').textContent = "As senhas não coincidem";
                document.getElementById('ccmessage').style.color = "red";
                document.getElementById("newAccount").disabled = true;
                document.getElementById("newAccount").style.backgroundColor = "#e6f0ff";
                document.getElementById("newAccount").style.color = "#000000";
            }

            else if (senha.value.length < 8) {
                document.getElementById('ccmessage').textContent = "Senha Curta. Pelo menos 8 caracteres!";
                document.getElementById('ccmessage').style.color = "red";
                document.getElementById("newAccount").disabled = true;
                document.getElementById("newAccount").style.backgroundColor = "#e6f0ff";
                document.getElementById("newAccount").style.color = "#000000";
            }
    
            else {
                document.getElementById('ccmessage').textContent = '';
                document.getElementById("newAccount").disabled = false;
                document.getElementById("newAccount").style.backgroundColor = "#0d6efd";
                document.getElementById("newAccount").style.color = "#ffffff";
            }
        });

    }
}

function verifyCampLog() {
    const form = document.getElementById('formularioLogin');

    if(form != null) {
        const nome = document.getElementById('lnome');
        const senha = document.getElementById('lsenha');

        form.addEventListener("input", () => {

            if (nome.value === '' || senha.value === '') {
                document.getElementById('lmessage').textContent = 'Por favor, preencha todos os campos.';
                document.getElementById("entrar").disabled = true;
                document.getElementById("entrar").style.backgroundColor = "#e6f0ff";
                document.getElementById("entrar").style.color = "#000000";
            }
            else {
                document.getElementById('lmessage').textContent = '';
                document.getElementById("entrar").disabled = false;
                document.getElementById("entrar").style.backgroundColor = "#0d6efd";
                document.getElementById("entrar").style.color = "#ffffff";
            }
        });
    }
}
  
document.addEventListener("DOMContentLoaded", function(event) { 
    verifyCamp();
    verifyCampLog()
});
  

let respostaLogin;

//Criar conta
const form = document.getElementById('formulario');
if(form != null) {

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const url = "http://127.0.0.1:8000/account/register/";
        const nome = document.getElementById('cnome').value;
        const e_mail = document.getElementById('cemail').value;
        const senha = document.getElementById('csenha').value;

        const data = { username: nome, email: e_mail, password: senha }; 

        const response = await axios
            .post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                window.location.replace("/home.html");
            })
            .catch((error) => {
                console.log(error)
            });
    });
}

//Login
const formi = document.getElementById('formularioLogin');
if(formi != null) {

    formi.addEventListener('submit', async function(event) {
        event.preventDefault();

        const url = "http://127.0.0.1:8000/account/login/";
        const nome = document.getElementById('lnome').value;
        const senha = document.getElementById('lsenha').value;

        const data = { username: nome, password: senha }; 

        const response = await axios
            .post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                window.location.replace("/home.html");
            })
            .catch((error) => {
                console.log(error)
            });
    });
}