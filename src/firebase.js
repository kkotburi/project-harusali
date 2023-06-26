// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHWhbVdzmI4bIRHEZayOEk-gD5i-4TksU",
  authDomain: "react-week2-5375f.firebaseapp.com",
  projectId: "react-week2-5375f",
  storageBucket: "react-week2-5375f.appspot.com",
  messagingSenderId: "156842521520",
  appId: "1:156842521520:web:0117164b6049cc1b02dc75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
