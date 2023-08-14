function checkPswd() {
 var password = document.getElementById("pswd").value;
 
 if (password == '') {
  window.location.href = 'av-files.html';
 }
 else{
  alert("Passwords do not match.");
 }
}
<<<<<<< HEAD
=======

let items = [{cat:"DI", n:"DPDB Dual Input", fpath:"/assets/AV/DI Box/ART _ DPDB Dual/ART DPDB Dual DI Manual.pdf"},
             {cat:"DI", n:"Behringer GI100", fpath:"/assets/AV/DI Box/Behringer _ GI100/Behringer GI-100 Single DI Manual.pdf"}

]

di = '';
lighting = '';
microphones = '';
misc = '';
mixers = '';
speakers = '';
stands = '';
video = '';

for (i = 0; i < items.length; i++) {
 if (items[i].cat == 'DI') {
  di += '<li><a target="_blank" class="text-dark" href="' + items[i].fpath + '">' + items[i].n + '</a></li>';
 }
}

window.onload = function(){
 document.getElementById ("di").innerHTML = di;
}
>>>>>>> parent of cf043fa (Revert "Update av.js")
