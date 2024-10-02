// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK9s_8Zejb9mjkFAQXCSuL6FchKQnaOnY",
  authDomain: "aegis-e265d.firebaseapp.com",
  projectId: "aegis-e265d",
  storageBucket: "aegis-e265d.appspot.com",
  messagingSenderId: "167192758124",
  appId: "1:167192758124:web:e6b6e1c83fc34d73d89549",
  measurementId: "G-7C3FQ9GS70"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireStore = getFirestore(app);