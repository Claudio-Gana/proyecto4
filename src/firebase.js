// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkTnuVVA_6kyjeM3kI8sv9rpLPDQNogv4",
    authDomain: "bootcamp-udd-cgana.firebaseapp.com",
    projectId: "bootcamp-udd-cgana",
    storageBucket: "bootcamp-udd-cgana.appspot.com",
    messagingSenderId: "333981266495",
    appId: "1:333981266495:web:032a78ff418ffbdb983e8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore ();