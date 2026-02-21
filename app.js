// FIREBASE IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// CONFIG FIREBASE (SEU)
const firebaseConfig = {
  apiKey: "AIzaSyDKRygwlhw-re2luMd0LKfoDqu4Gsjz5Ts",
  authDomain: "sorteio-iphone.firebaseapp.com",
  projectId: "sorteio-iphone",
  storageBucket: "sorteio-iphone.firebasestorage.app",
  messagingSenderId: "744093528955",
  appId: "1:744093528955:web:bed7451f5db2480b0c03de"
};


// INICIAR FIREBASE
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// PEGAR CAMPOS
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const criarBtn = document.querySelectorAll("button")[0];
const entrarBtn = document.querySelectorAll("button")[1];


// CRIAR CONTA
criarBtn.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Preencha email e senha");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // salvar dados no banco
    await setDoc(doc(db, "usuarios", userCredential.user.uid), {
      email: email,
      createdAt: new Date()
    });

    alert("Conta criada com sucesso!");
    window.location.href = "painel.html";

  } catch (error) {
    alert(error.message);
  }
});


// LOGIN
entrarBtn.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login feito!");
    window.location.href = "painel.html";

  } catch (error) {
    alert("Erro: " + error.message);
  }
});
