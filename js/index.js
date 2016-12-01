(function () {
  var clipboard = new Clipboard('.clipboard-trigger');
  var colors = window.document.querySelectorAll('.color');
  var clickedEl = window.document.getElementById('clicked-message');

  clipboard.on('success', function(e) {
      e.clearSelection();
  });

  function clicked () {
    clickedEl.classList.add('on');
    setTimeout(function () {
      clickedEl.classList.remove('on');
    }, 700);
  }

  /* add a little effect on click to show user something happened */
  for (var i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('mousedown', function (e) {
      e.target.classList.add('mousedown');
    }, false);

    colors[i].addEventListener('mouseup', function (e) {
      e.target.classList.remove('mousedown');
      clicked();
    }, false);
  }
}());
