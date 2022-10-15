// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjMtCeFNAuPHTYSbpoEcxDtNJoAQeRRys",
  authDomain: "email-password-auth-ae0a0.firebaseapp.com",
  projectId: "email-password-auth-ae0a0",
  storageBucket: "email-password-auth-ae0a0.appspot.com",
  messagingSenderId: "11482444134",
  appId: "1:11482444134:web:da1652a257d1f1108218a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;