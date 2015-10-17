var hijackClick = function(containerID) {
  var links = document.querySelectorAll(containerID);
  var clickTriggered = false;

  for (var i = 0; i < links.length; i++ ) {
    links[i].addEventListener("click", function(e) {
      fadeOut(e, this);
    });
  }

  function fadeOut(e, current) {
    if (!clickTriggered) {
      e.preventDefault();

      // Fade out icons
      for (var i = 0; i < links.length; i++ ) {
        if (links[i] != current) {
          links[i].parentNode.classList.add('fadeout');
        }
      }

      // Fade out monogram + add Bye!
      var monogram = document.querySelector('.monogram');
      monogram.classList.add('fadeout');
      monogram.innerHTML = 'Bye!';
      monogram.classList.remove('fadeout');

      // Re-trigger the click
      clickTriggered = true;
      current.click();
    }
  }
}

hijackClick('.icons a');
