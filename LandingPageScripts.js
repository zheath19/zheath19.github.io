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

var javaButton = document.getElementById('java-project');
javaButton.onmouseover = function() {
  body.style.backgroundColor = '#845e3a';
}

javaButton.onmouseout = function() {
    body.style.backgroundColor = 'black';
}

var finalButton = document.getElementById('final-project');
finalButton.onmouseover = function() {
  body.style.backgroundColor = '#dbea13';
}

finalButton.onmouseout = function() {
    body.style.backgroundColor = 'black';
}