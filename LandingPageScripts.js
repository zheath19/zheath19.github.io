var personalButton = document.getElementById('personal-project');
var body = document.body;

personalButton.onmouseover = function() {
  body.style.backgroundColor = '#1f217d';
}

personalButton.onmouseout = function() {
    body.style.backgroundColor = 'black';
}
