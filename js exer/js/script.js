var mob_icon=document.getElementById("mob_icon");
var close=document.getElementById("close_top_bar");


mob_icon.addEventListener("click",function(){
    document.querySelector(".topbar").style.display="block";
});

close.addEventListener("click",function(){
    document.querySelector(".topbar").style.display="none";
});


function logout(){
    localStorage.removeItem("active_user");
    location.href="login.html" ;
}