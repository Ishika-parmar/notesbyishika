import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// 🔴 PUT YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey:"PASTE",
  authDomain:"PASTE",
  projectId:"PASTE",
  appId:"PASTE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// SIGNUP
document.getElementById("signup").onclick=()=>{

const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;

createUserWithEmailAndPassword(auth,email,pass)
.then(()=>show("Signup successful! Now login 🙂"))
.catch(e=>show(e.message));

};


// LOGIN
document.getElementById("login").onclick=()=>{

const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,pass)
.then(()=>{
show("Login success!");
window.location="index.html";
})
.catch(e=>show(e.message));

};


function show(text){
document.getElementById("msg").innerText=text;
}
