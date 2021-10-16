var personalButton = document.getElementById('personal-project');
var body = document.body;

personalButton.onmouseover = function() {
  body.style.backgroundColor = '#1f217d';
}

personalButton.onmouseout = function() {
    body.style.backgroundColor = 'black';
}

var zenButton = document.getElementById('zen-garden');

zenButton.onmouseover = function() {
  body.style.backgroundColor = '#348947';
}

zenButton.onmouseout = function() {
    body.style.backgroundColor = 'black';
}
