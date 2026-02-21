import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKRygwlhw-re2luMd0LKfoDqu4Gsjz5Ts",
  authDomain: "sorteio-iphone.firebaseapp.com",
  projectId: "sorteio-iphone",
  storageBucket: "sorteio-iphone.firebasestorage.app",
  messagingSenderId: "744093528955",
  appId: "1:744093528955:web:bed7451f5db2480b0c03de"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Criar conta
window.registrar = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    ..then(() => window.location.href = "dashboard.html")
    .catch(error => alert(error.message));
};
