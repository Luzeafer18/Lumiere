import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.querySelector('input[name="role"]:checked');

    if (!role) {
        alert("Please select a role.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            if (role.value === "admin") {
                window.location.href = "admin.html"; // Redirect admin
            } else {
                window.location.href = "home.html"; // Redirect customer
            }
        })
        .catch((error) => {
            alert("Invalid login credentials.");
        });
});
