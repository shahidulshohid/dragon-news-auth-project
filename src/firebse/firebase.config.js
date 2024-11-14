// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTMFerVYGKEY6crCzetbFp5CTzIwO2mik",
  authDomain: "dragon-news-30e16.firebaseapp.com",
  projectId: "dragon-news-30e16",
  storageBucket: "dragon-news-30e16.firebasestorage.app",
  messagingSenderId: "489279460098",
  appId: "1:489279460098:web:a0b1c350fecd277a9fa81b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app