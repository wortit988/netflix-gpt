// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_nhkfdmrd6o7iIAK3C3fkSoUs-yV2G7E",
  authDomain: "netflixgpt-9a94b.firebaseapp.com",
  projectId: "netflixgpt-9a94b",
  storageBucket: "netflixgpt-9a94b.appspot.com",
  messagingSenderId: "1016889306603",
  appId: "1:1016889306603:web:5707a7e236e10f0d983dae",
  measurementId: "G-4KSKQ9HJQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();