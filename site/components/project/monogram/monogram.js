var monogram = function(containerID) {
  var container = document.querySelector(containerID);
  var textContainer = container.querySelector('.monogram__text .title');
  var text = textContainer.innerHTML;

  var size = monogramCharacterSize(text.length);
  textContainer.classList.add(size);
};


// Compute a responsive size for each monogram character
// - returns a `scale` classname
function monogramCharacterSize(length) {
  switch (true) {
    case (length <= 5):
      return 'text-style--character-xl';
      break;
    case (length <= 10):
      return 'text-style--character-l';
      break;
    case (length <= 15):
      return 'text-style--character-m';
      break;
    default:
      return 'text-style--character-s';
  }
}


monogram('.monogram');
setBackgroundImage('.monogram');
