let form = document.querySelector("#sigin_page")
let LSData  = JSON.parse(localStorage.getItem("data")) || []
let userEmail =  document.getElementById("email")
let userpassword = document.getElementById("password")
let button = document.querySelector(".loginbtn")



form.addEventListener("submit", function() {
    event.preventDefault()
 let login = false
   for(let i=0;i<LSData.length;i++) {
    let lastindex = LSData.length-1
     if(userEmail.value == LSData[lastindex].email && userpassword.value == LSData[lastindex].password ) {
        alert("Login Successful")
        login = true
        break;
     } else {
        alert("incrroct emailId or password")
        break;
     }
   }

   if(login===true){
      
   }
})
