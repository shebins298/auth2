import { auth, db } from "./firebase-config.js";
import { GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById("google-login").addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const uid = user.uid;
        const userEmail = user.email;

        console.log("User logged in:", userEmail);

        // Check if user exists in Firestore
        const userDoc = await getDoc(doc(db, "users", uid));

        if (!userDoc.exists()) {
            // First-time login: Assign "pending" role (Admin assigns role later)
            await setDoc(doc(db, "users", uid), {
                email: userEmail,
                role: "pending"
            });

            alert("Access Denied! Contact Admin to get a role.");
            await signOut(auth);
            window.location.href = "index.html";
        } else {
            // Redirect to control panel if role exists
            window.location.href = "control-panel.html";
        }
    } catch (error) {
        console.error("Login Error:", error);
    }
});
