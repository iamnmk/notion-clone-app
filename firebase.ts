// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUvYAedgs96uaKi-P0yVAnHBiqK-qSDE0",
  authDomain: "notion-clone-app-2048f.firebaseapp.com",
  projectId: "notion-clone-app-2048f",
  storageBucket: "notion-clone-app-2048f.firebasestorage.app",
  messagingSenderId: "212046653906",
  appId: "1:212046653906:web:90574a85a026e30ff4c00b",
  measurementId: "G-8G924S00RQ"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app);

export {db};