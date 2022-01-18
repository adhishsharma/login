// check if user has loged in or no 

if(!localStorage.getItem("active_user")){
    location.href="login.html"
}