document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let fone = document.getElementById("fone").value.trim();
  let mensagem = document.getElementById("mensagem");

  mensagem.innerHTML = "";

  if (nome === "" || email === "" || fone === "") {
    mensagem.innerHTML = "Todos os campos são obrigatórios.";
    return;
  }

  if (nome.length < 5 || nome.length > 40) {
    mensagem.innerHTML = "O nome deve ter entre 5 e 40 caracteres.";
    return;
  }

  if (!email.includes("@")) {
    mensagem.innerHTML = "E-mail inválido.";
    return;
  }

  if (fone.length !== 11) {
    mensagem.innerHTML = "O telefone deve conter 11 dígitos (DDD + número).";
    return;
  }

  alert("Formulário enviado com sucesso!");
});
