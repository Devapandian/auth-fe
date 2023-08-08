import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider ,signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCmrQbquEWu6AmTdwx_Hune8DAUS8HXjAs",
  authDomain: "login-in-85856.firebaseapp.com",
  projectId: "login-in-85856",
  storageBucket: "login-in-85856.appspot.com",
  messagingSenderId: "96659129698",
  appId: "1:96659129698:web:012f79f37a7a0ae61c983b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

