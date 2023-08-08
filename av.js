function checkPswd() {
 var password = document.getElementById("pswd").value;
 
 if (password == '') {
  window.location.href = 'av-files.html';
 }
 else{
  alert("Passwords do not match.");
 }
}
