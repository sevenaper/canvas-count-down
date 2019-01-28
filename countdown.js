var WINDOW_WIDTU = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;

window.onload = function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  canvas.height = WINDOW_HEIGHT;
  canvas.width = WINDOW_WIDTU;

  render(context);
};

function render(cxt) {
  var hours = 12;
  var minutes = 34;
  var seconds = 56;
  renderDigit(0, 0, parseInt(hours / 10), cxt);
}

function renderDigit(x, y, num, cxt) {
  cxt.fillStyle = "rgb(0,102,153)";

  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        cxt.beginPath();
        cxt.arc(
          x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          RADIUS,
          0,
          2 * Math.PI
        );
        cxt.closePath();
        cxt.fill();
      }
    }
  }
}
