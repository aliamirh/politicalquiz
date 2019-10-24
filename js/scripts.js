$(document).ready(function(){
  $("#views").submit(function(event){
    // var republican = document.getElementById("republican");
    // var democrat = document.getElementById("democrat");
    var colorNum = parseInt($("input:radio[name=color]:checked").val());
    var animalNum = parseInt($("input:radio[name=animal]:checked").val());
    var viewsNum = parseInt($("input:radio[name=views]:checked").val());
    var total = colorNum+animalNum+viewsNum;
    console.log(total);
  if (total <= 5) {
    alert("u're a republican!")
  }else{
    alert("you are a democrat")
  }
  event.preventDefault();
  });
  });
