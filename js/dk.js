

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { addDoc, collection,getFirestore , } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"; 
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCBwJftKjEhUxB6KPyOTdvfEaHzBMhV0Rk",
  authDomain: "final-bd5b7.firebaseapp.com",
  projectId: "final-bd5b7",
  storageBucket: "final-bd5b7.appspot.com",
  messagingSenderId: "106863198123",
  appId: "1:106863198123:web:aa9e1f61ce5d451108dcee",
  measurementId: "G-HMB88KPL1S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const form = document.getElementById("form")
form.addEventListener("submit", function(e) {
  e.preventDefault()

  const name = document.getElementById("Username").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  
  createUserWithEmailAndPassword(auth,name, email, pass)
  .then((userCredential) => {
    
    const user = userCredential.user;
    window.location.href="dn.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})


