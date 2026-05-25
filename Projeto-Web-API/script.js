document.getElementById("formCadastro").addEventListener("submit", async function(e) {
    e.preventDefault();

    const usuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        telefone: document.getElementById("telefone").value
    };
    const response = await fetch("http://localhost:8080/usuarios",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(usuario)
    });
    const data = await response.json();
    console.log("Usuário cadastrado: ", data);
    alert("Usuário cadastro com sucesso!");
})