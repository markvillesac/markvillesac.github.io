events = [
 {name:"Semi-Formal 2023", date:"March 1, 2023", p0:"/assets/past-events/semi2022/semi0.JPG", p1:"/assets/past-events/semi2022/semi1.JPG", p2:"/assets/past-events/semi2022/semi2.JPG", p3:"/assets/past-events/semi2022/semi3.JPG"},
 {name:"Carnival 2023", date:"June 2, 2023", p0:"/assets/past-events/carnival2023/carnival0.JPG", p1:"/assets/past-events/carnival2023/carnival1.JPG", p2:"/assets/past-events/carnival2023/carnival2.JPG", p3:"/assets/past-events/carnival2023/carnival3.JPG"}
]

function getevent (r) {
 for (i = 0; i < events.length; ++i) {
  if (events [i].name == r) {
   document.getElementById("name").innerHTML = events[i].name;
   document.getElementById("date").innerHTML = events[i].date;
   document.getElementById("p0").src = events[i].p0;
   document.getElementById("p1").src = events[i].p1;
   document.getElementById("p2").src = events[i].p2;
   document.getElementById("p3").src = events[i].p3;
  }
 }
}

// dropdown logic 
function search() {
 document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
 var input, filter, ul, li, a, i;
 input = document.getElementById("search");
 filter = input.value.toUpperCase();
 div = document.getElementById("issues");
 a = div.getElementsByTagName("a");

 for (i = 0; i < a.length; i++) {
   txtValue = a[i].textContent || a[i].innerText;
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     a[i].style.display = "";
   } else {
     a[i].style.display = "none";
   }
 }
}
