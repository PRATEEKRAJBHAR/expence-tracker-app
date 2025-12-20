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
let uniquedetails=existing_arr.find(user=>user.user_name==user_name.value);//(user=>user.user_name==user_name.value&&user.password==password.value);
// console.log(uniquedetails,"jai shree radhe");
if(uniquedetails){
    alert("this name user already exist in database");
    return;
}else{
    localStorage.setItem("register_user_details", JSON.stringify(existing_arr));
// alert("updated successfully")
// window.location.href = "login.html";
}

// store password in local storage;
let obj={
    "user_name":user_name.value,
    "password":password.value,
    "conf_password":conf_password.value,
    "email":email.value
    }
    //  console.log(Object.values(obj).pop(),"yuiiyy");
// console.log(obj,"hhjgg");
     
    //let existing_arr = [];
     
    // let existing_arr=JSON.parse(localStorage.getItem("register_user_details"))||[];

     existing_arr.push(obj);
    //  console.log(existing_arr,"ram ram");
    
localStorage.setItem("register_user_details",JSON.stringify(existing_arr));

// let alldetails=localStorage.setItem("register_user_details",JSON.stringify(existing_arr));
// console.log(alldetails,"shree ram");
// if(alldetails){
//     console.log(alldetails,"ram");
// }


        alert("successfully")
        email.value = ""
        user_name.value= ""
        password.value = ""
        conf_password.value = ""
        window.location.href = "login.html";
    }
}

