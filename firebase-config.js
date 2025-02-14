// Import Firebase modules (if using ES6 modules, else include script tags in HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjRuZYFEub2V0Wuq3pCIkxb0VcLB-iQO4",
    authDomain: "auth2-29838.firebaseapp.com",
    projectId: "auth2-29838",
    storageBucket: "auth2-29838.appspot.com", // ✅ Corrected
    messagingSenderId: "29566239372",
    appId: "1:29566239372:web:cbfb708f58fc64a94ff1a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export auth & db for use in other scripts
export { auth, db };

console.log("Firebase initialized successfully!");
