var currentDim = 16;
$(document).ready(
  function() {
    for(i=1;i<=256; i++) {
      $div = "<div>" + /*i + */"</div>";
//    $div = '<div id="' + i + '">' + i + '</div>';
      $("#container").append($div);

    }
    $("#container > div").css("width","50px");
    $("#container > div").css("height","50px");
    $("#container > div").css("display","inline-block");

    addColor();
  }
);

function addColor() {
  $("#container > div").mouseenter(function() {
    if($(this).css("background-color")== "rgba(0, 0, 0, 0)"){
      $(this).css("background-color",getRandomColor());
    }
/*    else {
      var newColor = incrementColor($(this).css("background-color"));
      $(this).css("background-color",newColor);
    }*/
  });
}

function appendDiv(id) {
  $("div#container").append(id);
}

function clearBoard() {
  $("#container > div").css("background-color","white");
}

function getDim() {
  var txt;
  var dimStr = prompt("How many squares per side would you like the new grid?","16");
  if(dimStr != null && parseInt(dimStr) != currentDim && !isNaN(parseInt(dimStr)) ) {
    currentDim = parseInt(dimStr);
    removeBoard();
    changeDim(currentDim);
  }
  else {
    clearBoard();
  }
}

function removeBoard() {
  $("#container > div").remove();
}

function changeDim(numBoxes) {
  var dim = 800.0/numBoxes;
  var total = numBoxes*numBoxes;
  $div = "<div>" + /*i + */"</div>";
  for(i=0; i < total; i++){
    $("#container").append($div);
  }
  $("#container > div").css("width",dim + "px");
  $("#container > div").css("height", dim + "px");
  $("#container > div").css("display","inline-block");

  addColor();
}

function getRandomColor() {
  var red = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var color = "rgb(" + red + ", " + blue + ", " + green + ")";
  return color;
}

function incrementColor() {

}
