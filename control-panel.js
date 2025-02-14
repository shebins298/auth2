document.addEventListener("DOMContentLoaded", function () {
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("User logged in:", user.email);
            fetchUserRole(user.uid);
        } else {
            console.log("No user logged in. Redirecting to login...");
            window.location.href = "index.html"; // Redirect if not logged in
        }
    });

    document.getElementById("logout").addEventListener("click", () => {
        auth.signOut().then(() => {
            window.location.href = "index.html";
        });
    });
});

// Function to fetch user role and update UI
function fetchUserRole(uid) {
    db.collection("users").doc(uid).get().then(doc => {
        if (doc.exists) {
            const role = doc.data().role;
            console.log("User role:", role);

            const userPanelBtn = document.getElementById("user-panel-btn");
            const adminPanelBtn = document.getElementById("admin-panel-btn");

            // Default: Hide all buttons
            userPanelBtn.style.display = "none";
            adminPanelBtn.style.display = "none";

            // Show buttons based on role
            if (role === "admin") {
                userPanelBtn.style.display = "block";
                adminPanelBtn.style.display = "block"; // Admins can access both
            } else if (role === "user") {
                userPanelBtn.style.display = "block"; // Users can access only User Panel
            } else {
                alert("Unauthorized Access! Contact Admin.");
                auth.signOut().then(() => {
                    window.location.href = "index.html";
                });
            }
        } else {
            alert("Unauthorized Access! Contact Admin.");
            auth.signOut().then(() => {
                window.location.href = "index.html";
            });
        }
    }).catch(error => {
        console.error("Error fetching role:", error);
    });
}
