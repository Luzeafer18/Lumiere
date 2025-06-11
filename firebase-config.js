import dotenv from "dotenv";
dotenv.config();

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "lumiere-homestay-f2147.firebaseapp.com",
    projectId: "lumiere-homestay-f2147",
    storageBucket: "lumiere-homestay-f2147.firebasestorage.app",
    messagingSenderId: "463221614544",
    appId: "1:463221614544:web:1de67a153b4f13a3ec7bd5",
    measurementId: "G-LEV4NJLEVE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance

export { auth, db };
