function edit_ptag(){
  document.getElementById("demo").innerHTML="Edited paragraph text";
}
function bdate(){
  var bdate_vble = new Date();
  document.getElementById("bdate").innerHTML = bdate_vble;
 }

function gFYdate(){
 var gFYdate_vble = new Date();
 document.getElementById("gFYdate").innerHTML = gFYdate_vble.getFullYear();
}

function gDdate(){
  var gDdate_vble = new Date();
  document.getElementById("gDdate").innerHTML = gDdate_vble.getDay();
}
function gdate(){
   var gdate_vble = new Date();
   document.getElementById("gdate").innerHTML = gdate_vble.getDate();
}
function gMonth(){
  var gMonth_vble = new Date();
  document.getElementById("gMonth").innerHTML = gMonth_vble.getMonth();
}
function gHours(){
    var gHours_vble = new Date();
    document.getElementById("gHours").innerHTML = gHours_vble.getHours();
}
function reset(){
  location.reload();
}
