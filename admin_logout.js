

let logoutButton = document.getElementById("user-logout");

if (logoutButton) {
        document.addEventListener("DOMContentLoaded", function () {
        logoutButton.addEventListener("click", function (event) {
            event.preventDefault(); // Stop the default navigation
            localStorage.removeItem("logged_in_username"); // Remove stored username
            alert("Logged out successfully!"); // Show confirmation
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect after short delay
            }, 500); // Delay to allow alert to show
        });
     
});
}
