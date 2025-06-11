import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

const usersRef = collection(db, "users");

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Store user data in Firestore
            return addDoc(usersRef, {
                uid: user.uid, // Unique user ID
                email: email,
                role: "customer" // Default role; change for admin sign-ups
            });
        })
        .then(() => {
            alert("Sign-up successful! Redirecting to login...");
            window.location.href = "index.html"; 
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
