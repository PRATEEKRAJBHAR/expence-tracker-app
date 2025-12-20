

let loggedInUsername = localStorage.getItem("logged_in_username");
document.getElementById("usernames").textContent = `Hello ${loggedInUsername}`;
// // let loggedInUsername=localStorage.getItem("logged_in_username");
// let loggedInUserpassword=localStorage.getItem("logged_in_password")
// // console.log(loggedInUserpassword,"ye vatan tere liye");
// if(loggedInUsername==loggedInUserpassword){
if(loggedInUsername){
    
let oldpassword = document.getElementById("old_password");
let newpassword = document.getElementById("New_password");
let confirmnewpassword = document.getElementById("Confirm_New_password");

function btn() {
    if (oldpassword.value === "" || newpassword.value === "" || confirmnewpassword.value === "") {
        alert("All Input Fields Are Mandatory");
        return;
    }

    let loginUsername = localStorage.getItem("logged_in_username");
    let allusers = JSON.parse(localStorage.getItem("register_user_details")) || [];

    let user = allusers.find(user => user.user_name === loginUsername && user.password === oldpassword.value);

    if (user) {  // If user is found
        if (
            newpassword.value.length >= 6 && newpassword.value.length <= 12 &&
            confirmnewpassword.value.length >= 6 && confirmnewpassword.value.length <= 12
        ){ if (newpassword.value === confirmnewpassword.value) {
            user.password = newpassword.value;
            user.conf_password = confirmnewpassword.value;

            localStorage.setItem("register_user_details", JSON.stringify(allusers));
            alert("Password updated successfully!");
            window.location.href = "filter.html";
        } else {
            alert("New password and confirm password do not match!");
        }
    }else{
        alert("plz filled more then 6 digit or less than 12 digit")
    }

    } else {
        alert("Incorrect old password or user not found!");
    }
    oldpassword.value = "";
    newpassword.value = "";
    confirmnewpassword.value = "";
}

}else{
    window.location.href="login.html"
}