// cheking if user is logged in or not 
if(localStorage.getItem("active_user")){
    location.href="home.html";

}

let email= document.getElementById("email");
let password= document.getElementById("password");

let form=document.getElementById("login_form");

form.addEventListener("submit", function(event)  {
        event.preventDefault() //so that the page wont refresh


    if(!email.value || !password.value){
        return alert("FILL ALL FIELDS")
    }

    if(!localStorage.getItem("users")){
        return alert("NO USER FOUND")
    }

    let users=JSON.parse(localStorage.getItem("users"))

    for(let i=0;i<users.length;i++){
        if(users[i].email === email.value && users[i].password === password.value ){
            localStorage.setItem("active_user", JSON.stringify(users[i]))
            if(users[i].role === "admin"){
                location.href="admin.html"
            }
            else{
                location.href="home.html" ;

            }
            break;

        } else{
            alert("Credentials do no match")
        }
    }
} )