// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy8ivlgJYzdCHPksmcjGVnWvLooKa6cjk",
  authDomain: "vite-test-758cb.firebaseapp.com",
  projectId: "vite-test-758cb",
  storageBucket: "vite-test-758cb.appspot.com",
  messagingSenderId: "1005784053638",
  appId: "1:1005784053638:web:d0066119fdd88279591e07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);