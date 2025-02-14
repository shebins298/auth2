// Ensure Firebase SDK is loaded before initializing
if (typeof firebase !== "undefined") {
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
    firebase.initializeApp(firebaseConfig);

    // Global Firebase Variables
    const auth = firebase.auth();
    const db = firebase.firestore();

    console.log("✅ Firebase initialized successfully!");
} else {
    console.error("❌ Firebase SDK not loaded. Check script order in index.html!");
}
