import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import {
getAuth,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import {
getFirestore,
collection,
getDocs,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "SUA_API_KEY",
authDomain: "SEU_PROJETO.firebaseapp.com",
projectId: "SEU_PROJETO"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// verificar admin
onAuthStateChanged(auth, async user => {

if(!user){
window.location.href="index.html";
return;
}

const userDoc = await getDoc(doc(db,"usuarios",user.uid));

if(userDoc.data().role !== "admin"){
alert("Acesso negado");
window.location.href="dashboard.html";
return;
}

carregarUsuarios();
});


// listar usuários
async function carregarUsuarios(){

const querySnapshot = await getDocs(collection(db,"usuarios"));

querySnapshot.forEach(doc => {

document.getElementById("usuarios").innerHTML += `
<div>
<p>${doc.data().email}</p>
<p>Status: ${doc.data().status}</p>
<hr>
</div>
`;
});
}
