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

insertSpace('.monogram .title');
setBackgroundImage('.monogram');
