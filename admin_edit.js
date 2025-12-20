let loggedInUsername=localStorage.getItem("logged_in_username");
// let loggedInUserpassword=localStorage.getItem("logged_in_password")
// // console.log(loggedInUserpassword,"ye vatan tere liye");
// if(loggedInUsername!==loggedInUserpassword){
    // let loggedInUsername=localStorage.getItem("logged_in_username");
    if(loggedInUsername){
    let validmail=document.getElementById("validation-email")
    let validname=document.getElementById("validation-names")
    let validpass=document.getElementById("validation-password");
    let validrepass=document.getElementById("validation-re-password")
    
    let requiredmail=document.getElementById("required-email")
    let requiredname=document.getElementById("required-name")
    let requiredpasswrd=document.getElementById("required-password");
    let requiredrepasswrd=document.getElementById("required-re-pass")
    
    let email=document.getElementById("email")
    let user_name=document.getElementById("user-name")
    let password=document.getElementById("password")
    let conf_password=document.getElementById("conf-password")
    
    // console.log(user_name,"sfs");
    
    
    validmail.style.display="none";
    validname.style.display="none";
    
    validpass.style.display="none";
    validrepass.style.display="none";
    
    
    
    requiredmail.style.display="none";
    requiredname.style.display="none";
    
    requiredpasswrd.style.display="none";
    requiredrepasswrd.style.display="none";
    // for email
    function validatemail(ram){
        let get_email=ram.value
        if (get_email) {
            requiredmail.style.display="none";
          
        }
        let indexof=get_email.indexOf("@");
        let lastindexof=get_email.lastIndexOf("@")
        if(indexof<=0||lastindexof!==indexof||indexof==get_email.length-1){
            
    validmail.style.display="block";
    validmail.style.color="red";
    validmail.style.borderColor="red"; 
    return false   
        }
        let first=get_email.substring(0,indexof);
        let last=get_email.substring(indexof+1);
    
        
        if(!last.includes(".")||last.startsWith(".")||last.endsWith(".")){
                    
    validmail.style.display="block";
    validmail.style.color="red";
    validmail.style.borderColor="red"; 
    return false   
        }
        validmail.style.display="none";
        return true;
    
    }
    
    
    function validatenames(shyam){
        let get_name=shyam.value;
        if (get_name) {
            requiredname.style.display="none";
          
        }
        for(i=0;i<get_name.length;i++){
            let char=get_name[i];
            if((char>="a"&&char<="z")||(char>="A"&&char<="Z")||(char==" ")){
                result= true;
            }else{
              result= false;
            }
        }
        // console.log(result.join(""));
        // console.log(result);
        if(result){
            validname.style.display="none";
            shyam.style.borderColor="black";
            validname.style.color="black"
            return true;
        }else{
          validname.style.display="block";
            shyam.style.borderColor="red";
           validname.style.color="red";
            return false;
    
        }
    }
    
    
    
    
    
    // Password Validation Function
    function validatepasswords(shiv) {
        let password = shiv.value;
       
        if (password) {
            requiredpasswrd.style.display="none";
          
        }
        if (password.length < 6 || password.length > 12) {
            validpass.style.display = "block";
            validpass.style.color = "red";
            // validpass.textContent = "Password must be between 6 and 12 characters.";
    
            return false;
        }
        // else if(password.length<=0){
        //     validpass.style.display = "none";
        //     return false;
    
        // }
         else {
            validpass.style.display = "none";
            return true;
        }
       
    }
    
    function validaterepasswords(shankar) {
        let confirmPassword = shankar.value;
        if (confirmPassword) {
            requiredrepasswrd.style.display="none";
          
        }
        let password = document.getElementById("password").value;
    
        if (confirmPassword !== password) {
            validrepass.style.display = "block";
            validrepass.style.color = "red";
            // validrepass.textContent = "Passwords do not match.";
            return false;
        } else {
            validrepass.style.display = "none";
            return true;
        }
    }
    
    
    
    // buttons
    
    
    function btn(){
        // console.log("btn function triggered!"); 
        
        let hasError = false;
       
        if(email.value===""){
            requiredmail.style.display = "block";
            requiredmail.style.color = "red";
            requiredmail.style.borderColor = "red";
            hasError = true;
        }
        if(user_name.value===""){
            requiredname.style.display = "block";
            requiredname.style.color = "red";
            hasError = true;
        }
        if(password.value===""){
            requiredpasswrd.style.display = "block";
            requiredpasswrd.style.color = "red";
            hasError = true;
        }
        if(conf_password.value===""){
            requiredrepasswrd.style.display = "block";
            requiredrepasswrd.style.color = "red";
            hasError = true;
        }
    
        if (hasError) {
            // alert("Something went wrong. Please check your inputs.");
            return;
        }
    
       
        let isMailValid = validatemail(email);
        let isNameValid = validatenames(user_name);
        let isPass = validatepasswords(password);
        let isrePass = validaterepasswords(conf_password);
    
    
        
    
        if(!isMailValid||!isNameValid||!isPass||!isrePass){
            alert("something went wrong");
            return
        }else{
    
    // unique name and password this is main uniqueness logic
    let existing_arr=JSON.parse(localStorage.getItem("register_user_details"))||[];
    let uniquedetails=existing_arr.find(user=>user.user_name==user_name.value&&user.password==password.value);
    console.log(uniquedetails,"jai shree radhe");
    if(uniquedetails){
        alert("this name user already exist in database");
        return;
    }else{
        localStorage.setItem("register_user_details", JSON.stringify(existing_arr));
    // alert("updated successfully")
    // window.location.href = "login.html";
    }
    
    
    
            alert("successfully")
            email.value = ""
            user_name.value= ""
            password.value = ""
            conf_password.value = ""
            window.location.href = "login.html";
        }
    }
    
    // for when user click change user details button then show auto filled this input fields
    
        let allusers=JSON.parse(localStorage.getItem("register_user_details"))||[]
    //   console.log(allusers,"prateek");
        
        let logged_in_user=localStorage.getItem("logged_in_username")
    // console.log(logged_in_user,"rajbhar");
    
    
    const user_details = allusers.find(user=>user.user_name==logged_in_user);
    // console.log(user_details,"fs");
    // console.log("user data => ",user_details);
    // if (user_details) {
    //     // console.log(user_details,"ram");
    //     let emailInput = document.getElementById("email");
    //     let nameInput = document.getElementById("user-name");
    //     let passwordInput = document.getElementById("password");
    //     let confirmPasswordInput = document.getElementById("conf-password");
    
    //     // Autofill input fields with user details
    //     emailInput.value = user_details.email || "";
    //     nameInput.value = user_details.user_name || "";
    //     passwordInput.value = user_details.password || "";
    //     confirmPasswordInput.value = user_details.conf_password || "";
    
    //     // Find index of the user in the allusers array
    //     // let userIndex = allusers.findIndex(user => user.user_name === user_details.user_name);
        
        
    //         // Update user details
     
    
           
       
    // }
    
    if (user_details) {
        // console.log(user_details,"shyam");
        let emailInput = document.getElementById("email");
        let nameInput = document.getElementById("user-name");
        let passwordInput = document.getElementById("password");
        let confirmPasswordInput = document.getElementById("conf-password");
    
        emailInput.value = user_details.email || "";
        nameInput.value = user_details.user_name || "";
        passwordInput.value = user_details.password || "";
        confirmPasswordInput.value = user_details.conf_password || "";
    }
    
    if(user_details){
        // console.log(user_details,"sdfsd");
        user_details.email = emailInput.value;
        user_details.user_name = nameInput.value;
        user_details.password = passwordInput.value;
        user_details.conf_password = confirmPasswordInput.value;
    
         // Save updated array back to localStorage
        localStorage.setItem("register_user_details", JSON.stringify(allusers));
    
    }
    
    
    // function btn(){
    //     let emailInput = document.getElementById("email");
    //     let nameInput = document.getElementById("user-name");
    //     let passwordInput = document.getElementById("password");
    //     let confirmPasswordInput = document.getElementById("conf-password");
    //     // alert("ram ram ji")
    //     if (user_details) {
    //         console.log(user_details,);
    //         user_details.email = emailInput.value;
    //         user_details.user_name = nameInput.value;
    //         user_details.password = passwordInput.value;
    //         user_details.conf_password = confirmPasswordInput.value;
    //     alert("successfully  updated")
    //     localStorage.setItem("register_user_details", JSON.stringify(allusers));
    //     window.location.href = "filter.html";
    // }
        
    // }
    
    function btn(event) {
        event.preventDefault(); // Prevents the default form submission
        // Your existing code...
        let emailInput = document.getElementById("email");
        let nameInput = document.getElementById("user-name");
        let passwordInput = document.getElementById("password");
        let confirmPasswordInput = document.getElementById("conf-password");
        // alert("ram ram ji")
        if (user_details) {
            if(nameInput.value!==user_details.user_name){
                alert("username is can not changed")
                window.location.href="filter.html"
            }else{
                if(passwordInput.value!==confirmPasswordInput.value){
                    alert("password is not match")
                }else{
                    console.log(user_details,);
                    user_details.email = emailInput.value;
                    // user_details.user_name = nameInput.value;
                    user_details.password = passwordInput.value;
                    user_details.conf_password = confirmPasswordInput.value;
                alert("successfully  updated")
                localStorage.setItem("register_user_details", JSON.stringify(allusers));
                window.location.href = "filter.html";
                }
           
        // window.location.href = "filter.html";
            }
    }
    }
    
    
    // function btn() {
    //     let emailInput = document.getElementById("email");
    //     let nameInput = document.getElementById("user-name");
    //     let passwordInput = document.getElementById("password");
    //     let confirmPasswordInput = document.getElementById("conf-password");
    
    //     if (user_details) {
    //         user_details.email = emailInput.value;
    //         user_details.user_name = nameInput.value;
    //         user_details.password = passwordInput.value;
    //         user_details.conf_password = confirmPasswordInput.value;
    
    //         // Find the index of the user in the allusers array
    //         const userIndex = allusers.findIndex(user => user.user_name === user_details.user_name);
    
    //         if (userIndex !== -1) {
    //             // Update the user in the allusers array
    //             allusers[userIndex] = user_details;
    //         } else {
    //             // If user is not found, add them to the array
    //             allusers.push(user_details);
    //         }
    
    //         // Save the updated allusers array to localStorage
    //         localStorage.setItem("register_user_details", JSON.stringify(allusers));
    
    //         alert("Successfully updated");
    //     }
    // }
    
    
}else{
    window.location.href="login.html"
}
