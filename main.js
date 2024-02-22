function myFunction(){
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.classList.add("responsive")
  }
  else{
    x.className = "topnav"
  }
}
