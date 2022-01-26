import {createElement} from '../render.js';

const createNumberOfFilms = (films) => (
  `<section class="footer__statistics">
  <p>${new Intl.NumberFormat('ru').format(films.length)} movies inside</p>
</section>`
);

export default class NumberOfFilms {
  #element = null;
  #films = null;

  constructor(films) {
    this.#films = films;
  }


  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template(){
    return createNumberOfFilms(this.#films);
  }

  removeElement() {
    this.#element = null;
  }
}
