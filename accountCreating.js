let form = document.getElementById("sign_up_form")
let email = document.getElementById("emailinput")
let password = document.getElementById("passwordinput")
let button = document.getElementById("sign_up_button")



let LSData = JSON.parse(localStorage.getItem("data")) || []

form.addEventListener("submit", function() {
   event.preventDefault
 obj = {
    email : email.value,
    password : password.value
}


LSData.push(obj)
localStorage.setItem("data",JSON.stringify(LSData))
})