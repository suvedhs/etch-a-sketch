$(document).ready(
  function() {
/*    var $div = document.createElement("div");
    $div.style.width = "50px";
    $div.style.height = "50px";
    div.style.display = "inline-block";
    $div.style.border = "1px solid blue";
*/
    for(i=1;i<=256; i++) {
      $div = "<div>" + i + "</div>";
      $("#container").append($div);

    }
    $("#container > div").css("width","30px");
    $("#container > div").css("height","30px");
    $("#container > div").css("display","inline-block");
  }
);

function appendDiv(id) {
  $("div#container").append(id);
}
