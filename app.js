function abrirLogin() {
  alert("Página de login aqui");
}

function participar() {
  const email = document.getElementById("email").value;
  if (!email) return alert("Digite um email");
  alert("Inscrito no sorteio!");
}
