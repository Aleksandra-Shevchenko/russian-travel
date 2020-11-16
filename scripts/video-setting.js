function vim(container) {
  document.addEventListener('DOMContentLoaded', function () {
    if (!container) {
      return;
    }

    let buttonPlay = container.querySelector('.video__play');
    let videoOverlay = container.querySelector('.video__overlay');
    let videoIframe = container.querySelector('iframe');
    let player = new Vimeo.Player(videoIframe);

    buttonPlay.addEventListener('click', function () {
      player.play();
    });

    player.on('play', function () {
      videoOverlay.classList.add('video_display');
      buttonPlay.classList.add('video_display');
    });

    player.on('pause', function () {
      videoOverlay.classList.remove('video_display');
      buttonPlay.classList.remove('video_display');
    });

  });
};

function plays() {
  let containers = document.querySelectorAll('.video__iframe');
  containers.forEach(conteiner => vim(conteiner));
}

plays();





