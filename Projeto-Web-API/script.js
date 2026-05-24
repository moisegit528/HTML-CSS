const formulario = document.querySelector("form");
const Inome = document.querySelector("#nome");
const Iemail = document.querySelector("#email");
const Isenha = document.querySelector("#senha");
const Inascimento = document.querySelector("#nascimento");
const Itelefone = document.querySelector("#telefone");

function cadastro(){
    fetch("http://localhost:8080/cadastro",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                senha: Isenha.value,
                nascimento: Inascimento.value,
                telefone: Itelefone.value
            })
        })
        .then(function (res) {console.log(res) })
        .catch(function (res) {console.log(res) })
};

function limpar(){
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Inascimento.value = "";
    Itelefone.value = "";
};

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    cadastro();
    limpar();
});