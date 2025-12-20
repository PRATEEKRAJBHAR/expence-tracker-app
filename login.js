

// let loggedUser=localStorage.getItem("logged_in_username")
// console.log(loggedUser,"sdfsdf");
// document.getElementById("usrname").textContent=`Hello ${loggedUser} Welcome To Expense Tracker App !`





// this code is not using in out project keep only understanding purpose
// console.log(loggedUser);
// let uniquekey=`logged_in_key_${loggedUser}`
// console.log(uniquekey,"sdfsd");
// let logged_in_user=JSON.parse(localStorage.getItem(uniquekey))||generateUniqueId(loggedUser);
// localStorage.setItem(uniquekey,JSON.stringify(logged_in_user));

// console.log(logged_in_user,"jai shuheldev");
// this code is not using in out project keep only understanding purpose





let validepass=document.getElementById("validation-password")
let validename=document.getElementById("validation-names")

// validepass.style.display="none"
// validename.style.display="none"


// document.getElementById("register").addEventListener("click", function () {
//     login(); // Function tabhi chalega jab button click hoga
// });



function login(){
    let loginUsername=document.getElementById("user-name")
    let loginPassword=document.getElementById("password")

if(loginUsername.value.trim()==""||loginPassword.value.trim()==""){
    alert("please filled both inputs ")
    return
}

    
    let existingUsers = JSON.parse(localStorage.getItem("register_user_details")) || [];


    let validUser = existingUsers.find(user => user.user_name == loginUsername.value && user.password == loginPassword.value);
    // console.log(validUser,"validuser");

    if (validUser) {

        // console.log(validUser);
        localStorage.setItem("logged_in_username", loginUsername.value);//key-value pair its means loginusername me hum jo kuchh bhi input denge o value ke roop  me save ho jayega
        // Redirect to the task page
        localStorage.setItem("logged_in_password", loginPassword.value);
        // console.log(localStorage.setItem("logged_in_password", loginPassword.value),"shree ram ji ki jai ho");
        window.location.href = "filter.html";
    } 

    else {
        alert("something went wrong");
        
    }

    loginUsername.value = "";
    loginPassword.value = "";
    

}

document.getElementById("create-id").addEventListener("click", function() {
    sessionStorage.setItem("clearFields", "true");
});


