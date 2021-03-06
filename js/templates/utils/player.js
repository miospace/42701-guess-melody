import {animate} from './animate';

const updateState = (element, player) => {
  element.querySelector(`.player-status`).style.width =
      `${parseInt(player.currentTime * 100 / player.duration, 10)}%`;
};

const stopOthersPlayers = () => {
  const othersPlayers = document.querySelectorAll(`audio`);
  if (othersPlayers) {
    [...othersPlayers].forEach((item) => {
      item.pause();
    });
  }
};

const syncState = (player, element) => {
  element.classList.toggle(`player--is-playing`, !player.paused);
};

const switchState = (state, player, element) => {
  if (player.paused) {
    stopOthersPlayers();
    player.play();
    state.stopAnimation = animate.animate(
        animate.getAnimation(player.currentTime, 1000, player.duration),
        (animation) => {
          return updateState(element, player);
        });
  } else {
    player.pause();
    state.stopAnimation();
    state.stopAnimation = null;
  }

  syncState(player, element);
};


const destroyPlayer = (element, state) => {
  const player = element.querySelector(`audio`);
  const button = element.querySelector(`button`);

  if (state.stopAnimation) {
    state.stopAnimation();
  }

  player.src = null;
  button.onclick = null;
  element.innerHTML = ``;
  state = null;

  return true;
};


export default (element, file, ctx, autoplay = false, controllable = true) => {
  const state = {};

  const content = ctx.querySelector(`#templates`)
    .content
    .querySelector(`.player`)
    .cloneNode(true);
  const player = content.querySelector(`audio`);
  const button = content.querySelector(`button`);

  player.onloadeddata = () => {
    if (controllable) {
      button.onclick = () => {
        return switchState(state, player, content);
      };
    }

    if (autoplay) {
      switchState(state, player, content);
    }
  };

  player.src = file;
  element.appendChild(content);
  element.classList.toggle(`player--no-controls`, !controllable);

  return () => {
    return destroyPlayer(element, state);
  };
};
