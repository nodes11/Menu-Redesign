  var on = [0,0,0,0,0,0,0,0,0,0,0];

document.addEventListener("DOMContentLoaded", function (event) {
  var overlay = document.getElementById("popup");

  $("#item_type1").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[0] == 0){
      overlay.style.display = "block";
      on[0] = 1;
    }
    else {
      overlay.style.display = "none";
      on[0] = 0;
    }
  });

  $("#item_type2").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[1] == 0){
      overlay.style.display = "block";
      on[1] = 1;
    }
    else {
      overlay.style.display = "none";
      on[1] = 0;
    }
  });

  $("#item_type3").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[2] == 0){
      overlay.style.display = "block";
      on[2] = 1;
    }
    else {
      overlay.style.display = "none";
      on[2] = 0;
    }
  });
  $("#item_type4").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[3] == 0){
      overlay.style.display = "block";
      on[3] = 1;
    }
    else {
      overlay.style.display = "none";
      on[3] = 0;
    }
  });
  $("#item_type5").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[4] == 0){
      overlay.style.display = "block";
      on[4] = 1;
    }
    else {
      overlay.style.display = "none";
      on[4] = 0;
    }
  });
  $("#item_type6").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[5] == 0){
      overlay.style.display = "block";
      on[5] = 1;
    }
    else {
      overlay.style.display = "none";
      on[5] = 0;
    }
  });
  $("#item_type7").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[6] == 0){
      overlay.style.display = "block";
      on[6] = 1;
    }
    else {
      overlay.style.display = "none";
      on[6] = 0;
    }
  });
  $("#item_type8").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[7] == 0){
      overlay.style.display = "block";
      on[7] = 1;
    }
    else {
      overlay.style.display = "none";
      on[7] = 0;
    }
  });
  $("#item_type9").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[8] == 0){
      overlay.style.display = "block";
      on[8] = 1;
    }
    else {
      overlay.style.display = "none";
      on[8] = 0;
    }
  });
  $("#item_type10").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[9] == 0){
      overlay.style.display = "block";
      on[9] = 1;
    }
    else {
      overlay.style.display = "none";
      on[9] = 0;
    }
  });
  $("#item_type11").click(function (e) {
    e.stopPropagation();
    $("#popup").text(jQuery(this).siblings('#menu_item').text());
    if (on[10] == 0){
      overlay.style.display = "block";
      on[10] = 1;
    }
    else {
      overlay.style.display = "none";
      on[10] = 0;
    }
  });
});
