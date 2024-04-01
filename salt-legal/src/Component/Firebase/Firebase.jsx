

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtGTKJ42EN8Acnz7cedZQgrZLF1G28GzY",
  authDomain: "salt-legal.firebaseapp.com",
  projectId: "salt-legal",
  storageBucket: "salt-legal.appspot.com",
  messagingSenderId: "737779989238",
  appId: "1:737779989238:web:96e9df95af4fc3cb970ad7",
  measurementId: "G-KFGQQ6VJBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);