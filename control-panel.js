auth.onAuthStateChanged(user => {
    if (user) {
        const uid = user.uid;
        
        db.collection("users").doc(uid).get().then(doc => {
            if (doc.exists) {
                const role = doc.data().role;

                // Show buttons based on role
                document.getElementById("user-panel-btn").style.display = "block";
                if (role === "admin") {
                    document.getElementById("admin-panel-btn").style.display = "block";
                }
            } else {
                alert("Unauthorized Access!");
                auth.signOut();
                window.location.href = "index.html";
            }
        });
    } else {
        window.location.href = "index.html";
    }
});

// Logout
document.getElementById("logout").addEventListener("click", () => {
    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
});
