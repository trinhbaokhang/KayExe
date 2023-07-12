

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {getFirestore ,getDocFromCache,collection, doc, setDoc  } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"; 

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

// const form = document.getElementById("form")

// form.addEventListener("submit", async function(e) {
//   e.preventDefault()
  
//   const name2  = document.getElementById("Name2").value
//   const email2 = document.getElementById("email2").value
//   const pass2 = document.getElementById("pass2").value
  
//   signInWithEmailAndPassword(auth,name2, email2, pass2)
//   .then((userCredential) => {
//     window.localStorage.setItem('checklogin', '1')
//     window.location.href="index.html"
//     window.localStorage.setItem('name', name2)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// })

// Lấy đối tượng form đăng nhập thông qua ID của form
const Form = document.getElementById('form')

// Gán sự kiện 'submit' cho form đăng nhập
Form.addEventListener('submit', async (e) => {
  e.preventDefault()

  // Lấy giá trị từ các trường email và password
    
  const name = document.getElementById('Name2').value
  const email = document.getElementById('email2').value
  const password = document.getElementById('pass2').value

  try {
    // Thử đăng nhập người dùng với email và mật khẩu
    await setDoc(auth,name, email, password)
    // Nếu thành công, chuyển hướng đến trang quản trị (admin.html)
    window.localStorage.setItem('checklogin', '1')
    window.location.href="index.html"
    window.localStorage.setItem('name', name)
  } catch (error) {
    // Nếu có lỗi, in ra console
    console.error(error)
  }
})
const docRef = doc(db, "Test");
const docSnap = await getDoc(docRef);
console.log(docSnap)