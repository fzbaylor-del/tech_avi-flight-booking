// REGISTER USER
function registerUser(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

let user = {
name:name,
email:email,
password:password
}

localStorage.setItem("techavi_user", JSON.stringify(user))

alert("Registration Successful")

window.location.href = "login.html"

}



// LOGIN USER
function loginUser(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

let user = JSON.parse(localStorage.getItem("techavi_user"))

if(user && email === user.email && password === user.password){

alert("Login Successful")

window.location.href = "dashboard.html"

}else{

alert("Invalid login details")

}

}



// BOOK FLIGHT
function bookFlight(){

let from = document.getElementById("from").value
let to = document.getElementById("to").value
let date = document.getElementById("date").value

if(from === "" || to === "" || date === ""){
alert("Please fill all fields")
return
}

let booking = {
from:from,
to:to,
date:date,
status:"Confirmed"
}

localStorage.setItem("techavi_booking", JSON.stringify(booking))

alert("Flight booked successfully!")

window.location.href = "bookings.html"

}



// LOAD BOOKING PAGE
function loadBooking(){

let booking = JSON.parse(localStorage.getItem("techavi_booking"))

if(booking){

document.getElementById("route").innerText =
booking.from + " → " + booking.to

document.getElementById("status").innerText =
booking.status

}else{

document.getElementById("route").innerText = "No Booking Yet"
document.getElementById("status").innerText = "-"

}

}



// LOAD PROFILE
function loadProfile(){

let user = JSON.parse(localStorage.getItem("techavi_user"))

if(user){

document.getElementById("name").innerText = user.name
document.getElementById("email").innerText = user.email

}

}


function quickBook(from,to,date){

let booking = {
from:from,
to:to,
date:date,
status:"Confirmed"
}

localStorage.setItem("techavi_booking", JSON.stringify(booking))

alert("Flight booked successfully!")

window.location.href = "bookings.html"

}