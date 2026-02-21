<!DOCTYPE html>
<html>
<head>
<title>Dashboard</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Minha Conta</h1>

<p>Email: <span id="email"></span></p>
<p>Saldo: <span id="saldo"></span></p>
<p>Status: <span id="status"></span></p>

<h3>Enviar comprovante</h3>
<input type="file" id="comprovante">
<button onclick="enviar()">Enviar</button>

<br><br>
<button onclick="logout()">Sair</button>

<script type="module" src="dashboard.js"></script>

</body>
</html>
