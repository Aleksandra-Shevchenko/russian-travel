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
  console.log(containers);
  containers.forEach(conteiner => vim(conteiner));
}

plays();





// 'use strict';

// function vim(container) {
//   document.addEventListener('DOMContentLoaded', function () {
//     if (!container) {
//       return;
//     }

//     var buttonPlay = container.querySelector('.video__play');
//     var videoOverlay = container.querySelector('.video__overlay');
//     var videoIframe = container.querySelector('iframe');
//     var player = new Vimeo.Player(videoIframe);


//     buttonPlay.addEventListener('click', function () {
//       player.play();
//     });

//     player.on('play', function () {
//       videoOverlay.classList.add('video_display');
//       buttonPlay.classList.add('video_display');
//     });

//     player.on('pause', function () {
//       videoOverlay.classList.remove('video_display');
//       buttonPlay.classList.remove('video_display');
//     });
//   });
// };


// function plays () {
//   let containers = document.querySelectorAll('.video__iframe')
//   containers.forEach(conteiner => vim(conteiner));
// }
// plays();



// function vim (container) {
//   document.addEventListener('DOMContentLoaded', function () {
//     if (!container) {
//       return;
//     }
//     let buttonPlay = container.querySelector('.space__video-play');
//     let videoOverlay = container.querySelector('.space__video-overlay');
//     let videoIframe = container.querySelector('iframe');
//     let player = new Vimeo.Player(videoIframe);

//     buttonPlay.addEventListener('click', function () {
//       player.play();
//       player.on('play', function () {
//         videoOverlay.classList.add('video__hide');
//       });
//       player.on('pause', function () {
//         videoOverlay.classList.remove('video__hide');
//       });
//     });

//   });
// };


// function plays () {
//   let containers = document.querySelectorAll('.space__video-item')
//   containers.forEach(conteiner => vim(conteiner));
// }
// plays();



