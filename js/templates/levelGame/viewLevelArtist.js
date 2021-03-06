/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';
import playerTemplate from '../utils/playerTemplate';
import initializePlayer from '../utils/player';

export default class LevelArtist extends AbstractView {
  constructor(screenData, state) {
    super();
    this.screenData = screenData;
    this.state = Object.assign({}, state);
  }

  get template() {
    return `<section class="main main--level main--level-artist">
              <div class="main-wrap">
                <div class="main-timer"></div>
                <h2 class="title title--life">Жизни: ${this.state.lives}</h2>
                <h2 class="title main-title">${this.screenData.question}</h2>
                <div class="player-wrapper"></div>
                <form class="main-list">
                  ${this.screenData.answers.map(this._answer).join(``)}
                </form>
              </div>
              ${playerTemplate()}
            </section>`;
  }

  _answer(item, id) {
    return `<div class="main-answer-wrapper">
              <input class="main-answer-r" type="radio" id="answer-${id + 1}" name="answer" value="${id + 1}" />
              <label class="main-answer" for="answer-${id + 1}">
                <img class="main-answer-preview" src="${item.image.url}" width="${item.image.width}" height="${item.image.height}">
                ${item.title}
              </label>
            </div>`;
  }

  bind() {
    const btnList = [...this.element.querySelectorAll(`.main-answer-r`)];

    btnList.forEach((item, id) => {
      item.addEventListener(`click`, (event) => {
        event.preventDefault();
        this.btnEvent(id);
      });
    });

    const playerElement = this.element.querySelector(`.player-wrapper`);

    initializePlayer(playerElement, this.screenData.src, this.element, true, false);
  }

  btnEvent() {}
}
