import m from "mithril";
import "./blackjack.css";
import Game from "src/client/helpers/game";

export default class Main {
  #game;

  constructor() {
    this.#game = new Game();
    this.#game.newGame();
  }

  view() {
    return this.#game.view();
  }
}
