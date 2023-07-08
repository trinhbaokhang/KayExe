

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { addDoc, collection,getFirestore  } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"; 

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

form.addEventListener("submit", async function(e) {
  e.preventDefault()

  const email2 = document.getElementById("email2").value
  const pass2 = document.getElementById("pass2").value
  
  signInWithEmailAndPassword(auth, email2, pass2)
  .then((userCredential) => {
    window.localStorage.setItem('checklogin', '1')
    window.location.href="index.html"
    window.localStorage.setItem('name', email2)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

