import { auth } from "./firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "index.html"; // Redirect non-authenticated users to login page
    }
});

// Logout functionality
document.getElementById("logout").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "index.html"; // Redirect after logout
    });
});
