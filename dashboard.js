import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import {
getAuth,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import {
getFirestore,
doc,
getDoc,
updateDoc
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

import {
getStorage,
ref,
uploadBytes,
getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

const firebaseConfig = {
apiKey: "SUA_API_KEY",
authDomain: "SEU_PROJETO.firebaseapp.com",
projectId: "SEU_PROJETO",
storageBucket: "SEU_PROJETO.appspot.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


// carregar dados do usuário
onAuthStateChanged(auth, async user => {

if(!user){
window.location.href = "index.html";
return;
}

const docSnap = await getDoc(doc(db,"usuarios",user.uid));

document.getElementById("email").innerText = docSnap.data().email;
document.getElementById("saldo").innerText = docSnap.data().saldo;
document.getElementById("status").innerText = docSnap.data().status;

});


// enviar comprovante
window.enviar = async function(){

const file = document.getElementById("comprovante").files[0];
const user = auth.currentUser;

const storageRef = ref(storage,"comprovantes/"+user.uid);

await uploadBytes(storageRef,file);

const url = await getDownloadURL(storageRef);

await updateDoc(doc(db,"usuarios",user.uid),{
comprovante:url,
status:"Aguardando aprovação"
});

alert("Comprovante enviado!");
location.reload();
}


// sair
window.logout = () => signOut(auth);
