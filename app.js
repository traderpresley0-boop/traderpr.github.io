import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import {
getFirestore,
doc,
setDoc,
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


// CRIAR CONTA
window.registrar = async function () {

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

await setDoc(doc(db, "usuarios", userCredential.user.uid), {
email: email,
saldo: 0,
status: "novo",
role: "user",
createdAt: new Date()
});

alert("Conta criada!");
window.location.href = "dashboard.html";
};


// LOGIN
window.login = async function(){

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

const userCredential = await signInWithEmailAndPassword(auth, email, senha);

const userDoc = await getDoc(doc(db,"usuarios",userCredential.user.uid));

if(userDoc.data().role === "admin"){
window.location.href = "admin.html";
}else{
window.location.href = "dashboard.html";
}

};
