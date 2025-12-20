
let loggedInUsername = localStorage.getItem("logged_in_username");
if(loggedInUsername){
document.getElementById("usernames").textContent = `Hello ${loggedInUsername}`;
}else{
    window.location.href="login.html"
}