function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $("#program").click(function(){
    $("#program").fadeOut().fadeIn();
  })

  $(".btn").click(function(){
    var selectButton = $(this).attr("id");
    buttonNo(selectButton);
  })

  function buttonNo(buttonType){
    $("#" + buttonType).fadeOut().fadeIn();
  }

  
