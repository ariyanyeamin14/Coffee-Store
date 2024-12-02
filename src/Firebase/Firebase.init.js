// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjjFADlGCH9PTfic-jgonBqs5KSJX8US8",
  authDomain: "coffee-store-ac65b.firebaseapp.com",
  projectId: "coffee-store-ac65b",
  storageBucket: "coffee-store-ac65b.firebasestorage.app",
  messagingSenderId: "229427295958",
  appId: "1:229427295958:web:96ffef90befa21487e3b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
