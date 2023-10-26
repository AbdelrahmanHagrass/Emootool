import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBHcs94IMjH7_jZ8Vmmyxi-XpLXg_1-Uq4",
    authDomain: "emotool-f0be0.firebaseapp.com",
    projectId: "emotool-f0be0",
    storageBucket: "emotool-f0be0.appspot.com",
    messagingSenderId: "84248088479",
    appId: "1:84248088479:web:26a6b7ae192588484ef7aa"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)
