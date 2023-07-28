function checkPswd() {
 var password = document.getElementById("pswd").value;
 
 if (password == 'diluccio') {
  window.location.href = 'av-files.html';
 }
 else if (password == "") {
  alert ("Please enter a value.");
 }
 else{
  alert("Passwords do not match.");
 }
}
