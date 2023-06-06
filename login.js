function customAlert(message) {
  const overlay = document.getElementById("overlay");
  const alertBox = document.getElementById("alert-box");
  const alertMessage = document.getElementById("alert-message");

  alertMessage.textContent = message;

  overlay.style.display = "block";
  alertBox.style.display = "block";
}

function closeAlert() {
  const overlay = document.getElementById("overlay");
  const alertBox = document.getElementById("alert-box");

  overlay.style.display = "none";
  alertBox.style.display = "none";
}
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Your authentication logic goes here
  if (username === "Sultan" && password === "brickup") {
    alert("Login Successful");
    window.location.href = "home.html"
  } else {
    alert("Invalid Username or Password");
  }
}

