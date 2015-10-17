var splitName = function(containerID) {
  var container = document.querySelector(containerID);
  var textContainer = container.querySelector('.monogram__name');
  var text = textContainer.innerHTML;

  var charsPerRow = matrixSize(text.length);
  var chars = text.split("");

  for (var i = 0; i < text.length; i++) {
    if ((i % charsPerRow) == 0) {
      createRow(i, Math.min(i + charsPerRow, text.length), chars, container, charsPerRow);
    }
  }
};


// Create a row in the matrix
function createRow(i, max, chars, container, charsPerRow) {
  var row = document.createElement('div');
  row.className = 'monogram__row';
  row.classList.add('monogram__row--cols' + charsPerRow);

  for (var j = i; j < max; j++) {
    var char = createChar(chars[j]);
    row.appendChild(char);
  }

  container.appendChild(row);
}


// Create a character cell in a row
function createChar(character) {
  var char = document.createElement('div');
  char.className = 'character';

  if (character == " ") {
    char.classList.add('character__space');
    char.innerHTML = 'x';
  } else {
    char.innerHTML = character;
  }

  return char;
}



// Calculate matrix size for a text
// - returns the X dimension of the matrix
function matrixSize(length) {
  switch (true) {
    case (length < 4):
      return 2;
      break;
    case (length < 9):
      return 3;
      break;
    case (length < 16):
      return 4;
      break;
    default:
      return 5;
  }
}


splitName('.monogram');
