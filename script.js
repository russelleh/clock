function rotate() {
  var timestamp  = Date.now() / 1000;
  var daystamp   = timestamp % 86400;
  var proportion = daystamp / 86400;
  var angle      = proportion * 360;
  $("#back").css({ transform: "rotate(" + angle + "deg)"});
};

$(document).ready(function() {
  rotate();
  setInterval(function() {
    rotate();
  }, 1000)
});
