
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("box-show") == -1) {
    x.className += " box-show";
    x.previousElementSibling.className += " box-theme-d1";
  } else { 
    x.className = x.className.replace("box-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" box-theme-d1", "");
  }
}

function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("box-show") == -1) {
    x.className += " box-show";
  } else { 
    x.className = x.className.replace(" box-show", "");
  }
}