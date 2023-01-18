// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU2wJuSHGTLnzxBK69qKf2WaM1ySJy9tM",
    authDomain: "kuddus-online-food-delivery.firebaseapp.com",
    projectId: "kuddus-online-food-delivery",
    storageBucket: "kuddus-online-food-delivery.appspot.com",
    messagingSenderId: "319213298878",
    appId: "1:319213298878:web:4ffe09e3ea67ae7535eaef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;