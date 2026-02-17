import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
     apiKey: "AIzaSyAxZBYQd9X2s_bdttAgn4Bn8tFfNSi4PPY",
  authDomain: "notes-by-ishika.firebaseapp.com",
  projectId: "notes-by-ishika",
  storageBucket: "notes-by-ishika.firebasestorage.app",
  messagingSenderId: "769311075872",
  appId: "1:769311075872:web:0e312fefd9d610f056d645"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };