'use strict';
​
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.video__iframe');
    if (!container) {
      return;
    }
​
    var buttonPlay = container.querySelector('.video__play');
    var videoOverlay = container.querySelector('.video__overlay');
    var videoIframe = container.querySelector('.video__media');
    var player = new Vimeo.Player(videoIframe);
​
    buttonPlay.addEventListener('click', function () {
      player.play();
    });
​
    player.on('play', function () {
      videoOverlay.classList.add('hide');
    });
​
    player.on('pause', function () {
      videoOverlay.classList.remove('hide');
    });
  });
})();
