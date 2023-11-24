let btn1 = document.getElementById("btn1");
let firstname = document.getElementById("name");
let lastname = document.getElementById("last");
let interest = document.getElementById("subject");
let email = document.getElementById("mail");

btn1.addEventListener("click", function () {
  alert(firstname.value);
  alert(lastname.value);
  alert(email.value);
});
