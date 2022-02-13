document.getElementById('login-submit').addEventListener('click', function () {
   const userEmail = document.getElementById('user-email').value;
   const userPwd = document.getElementById('user-pwd').value;
   if (userEmail == "mihir@gmail.com" && userPwd == "mihir") {
      window.location.href = "banking.html";
   } else {
      alert("Invalid Credentials");
   }
});