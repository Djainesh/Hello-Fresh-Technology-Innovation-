import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUScekzZnpA0jcKzFRQhRs9OjyOicE6wo",
    authDomain: "freshkit-44b26.firebaseapp.com",
    projectId: "freshkit-44b26",
    storageBucket: "freshkit-44b26.appspot.com",
    messagingSenderId: "915254463952",
    appId: "1:915254463952:web:aabd04f88c747c4de9bdd5",
    measurementId: "G-3LLS5NZQXS"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp)


export { firebaseDb }
export default firebaseApp;
