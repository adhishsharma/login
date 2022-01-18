
// if user is logged in as admin 

if(!localStorage.getItem("active_user")){
    location.href="login.html"
}

let user=JSON.parse(localStorage.getItem("active_user"));

if(user.role != "admin"){
    location.href="home.html"
}

let userbody= document.getElementById("local-users-body")
let users= JSON.parse(localStorage.getItem("users") )

if(!users || !users.length ){
    alert("no users found")
} 
else{
    let rows=" ";
    users.forEach(function(user){
        // console.log(user.name)
    rows += `
    <tr>
    <td> ${user.name} </td>
    <td> ${user.email} </td>
    <td> ${user.password} </td>
    <td onclick=" delUser('${user.email}' )">  delete </td>
    </tr>
    `
    })
    userbody.innerHTML=rows;
}

function delUser(email){
    event.target.parentElement.remove()
    alert(email)
    const filteruser= users.filter(function(user){
        if(user.email == email){
            return false;
        }
        else{
            return true;
        }

    })
    console.log(  filteruser);
    localStorage.setItem("users",JSON.stringify(filteruser))
}