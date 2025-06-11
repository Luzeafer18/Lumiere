import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Sign-up successful! Redirecting to login...");
            window.location.href = "index.html"; // Redirect to login
        })
        .catch((error) => {
            alert(error.message); // Display Firebase error messages
        });
});
