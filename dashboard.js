<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<title>Painel do Usuário</title>

<style>

/* RESET */
body{
margin:0;
font-family:Arial;
background:#0a0a0a;
color:white;
}

/* DASHBOARD */
.dashboard{
padding:20px;
max-width:500px;
margin:auto;
}

/* CARDS */
.card{
background:#111;
padding:20px;
margin-top:20px;
border-radius:15px;
box-shadow:0 0 20px rgba(0,255,200,0.2);
}

.card h3{
margin-top:0;
}

.card input{
width:100%;
padding:12px;
margin-top:10px;
border-radius:8px;
border:none;
}

.card button{
width:100%;
padding:14px;
margin-top:15px;
background:#00ffe7;
border:none;
border-radius:10px;
font-weight:bold;
cursor:pointer;
}

/* SAIR */
.sair{
margin-top:30px;
background:red;
color:white;
padding:15px;
width:100%;
border:none;
border-radius:10px;
cursor:pointer;
}

hr{
border:1px solid #222;
margin:20px 0;
}

</style>
</head>

<body>

<div class="dashboard">

<h2>🔥 Sorteio iPhone 16</h2>

<!-- CONTA -->
<div class="card">
<h3>👤 Conta</h3>
<p>Email: <span id="userEmail"></span></p>
<p>Saldo: <span id="saldo"></span> Kz</p>
<p>Status: <span id="status"></span></p>
</div>

<!-- PAGAMENTO -->
<div class="card">
<h3>💳 Participar no sorteio</h3>

<p>Valor de participação: <b>1000 Kz</b></p>

<p><strong>Banco:</strong> Kwik</p>
<p><strong>IBAN:</strong> AO06042000000000027091758</p>
<p><strong>Titular:</strong> Leandro António</p>

<hr>

<p>Enviar comprovante:</p>
<input type="file" id="comprovante">

<button onclick="enviarComprovante()">Enviar comprovante</button>
</div>

<!-- EDITAR PERFIL -->
<div class="card">
<h3>✏️ Editar dados pessoais</h3>

<input type="text" id="novoNome" placeholder="Seu nome">
<input type="tel" id="telefone" placeholder="Telefone">

<button onclick="salvarPerfil()">Guardar dados</button>
</div>

<!-- HISTÓRICO -->
<div class="card">
<h3>📊 Histórico</h3>
<p>Participações: <span id="participacoes">0</span></p>
<p>Depósitos: <span id="depositos">0</span> Kz</p>
</div>

<button onclick="logout()" class="sair">Sair</button>

</div>

<script>

/*
SIMULAÇÃO DE UTILIZADOR
Depois podemos ligar ao banco real
*/

let usuario = {
email:"usuario@email.com",
saldo:0,
status:"Não aprovado",
nome:"",
telefone:"",
participacoes:0,
depositos:0
};

// carregar dados ao abrir
document.get
