// Insert random space into a string
var insertSpace = function(containerID) {
  var container = document.querySelector(containerID);
  var text = container.innerHTML;
  // How many spaces to insert
  var spaces = Math.round(text.length / 3);

  for (var i = 0; i <= spaces; i++) {
    var random = Math.floor((Math.random() * (text.length - 1)));
    text = text.slice(0, random) + " " + text.slice(random);
  }

  container.innerHTML = text;
}


// Increase font size on short names
var setFontSize = function(containerID) {
  var container = document.querySelector(containerID);
  var text = container.innerHTML;

  if (text.length < 10) {
    container.classList.add('title--size-enlarged');
  }
}

setFontSize('.monogram .title');
insertSpace('.monogram .title');
setBackgroundImage('.monogram');
