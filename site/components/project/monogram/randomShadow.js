var randomShadow = function(containerID) {
  var chars = document.querySelectorAll(containerID);
  var random = Math.floor((Math.random() * chars.length));
  var char = chars[random];

  char.classList.contains('shadow') ? char.classList.remove('shadow') : char.classList.add('shadow');
}


repeat = setInterval(
  function(){
    randomShadow('.monogram .character');
  },
  10000
);
