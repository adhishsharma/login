let name= document.getElementById("name");
let email= document.getElementById("email");
let password= document.getElementById("password");

let form= document.getElementById("signup_form");
 
form.addEventListener("submit", function(event){
     event.preventDefault() //so that the page wont refresh
    if(!name.value || !email.value  || !password.value ){
        return alert("Fill all fields");
    }
    
    // NEW USER
let new_user={
    name:name.value,
    email:email.value,
    password:password.value,
    role:"admin"

}

// check for exisiting user in the local storage
let users;
if(!localStorage.getItem("users")){
     users=[]
}
else{
    users=JSON.parse(localStorage.getItem("users"))
}

users.push(new_user)
let users_str=JSON.stringify(users); //  to convert into string for local storage 
localStorage.setItem("users" , users_str);

document.getElementById("reset_signup_btn").click()                                                                        

} );
