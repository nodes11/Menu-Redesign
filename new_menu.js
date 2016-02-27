//Keep track of on/off for each button
var on = 0;

document.addEventListener("DOMContentLoaded", function (event) {
  var overlay = document.getElementById("popup");

  $(".item_type").click(function (e) {
    e.stopPropagation();
    $(".popup").html($(this).siblings('.section').html());
    if (on == 0){
      overlay.style.display = "block";
      on = 1;
    }
    else {
      overlay.style.display = "none";
      on = 0;
    }
  });

  $("#popup").click(function (e) {
    on = 0;
    $("#popup").css("display", "none");
  });

});
//'<h2 id="close" class="close">X</h2>'
