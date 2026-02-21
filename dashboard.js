import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

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

// Verificar utilizador logado
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmail").textContent = user.email;
  } else {
    window.location.href = "index.html";
  }
});

// Logout
window.logout = function() {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};
