import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAozyBpHjJtY9HW6-qdoqPM0QhmYshNzTg",
    authDomain: "projetotraineegrupob.firebaseapp.com",
    projectId: "projetotraineegrupob",
    storageBucket: "projetotraineegrupob.appspot.com",
    messagingSenderId: "987574682106",
    appId: "1:987574682106:web:e024be2a6c964e390ce443",
    measurementId: "G-QDLDKTDEH3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
