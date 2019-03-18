import m from "mithril";
import "./game.css";

import Player from "src/client/helpers/player";
import Dealer from "src/client/helpers/dealer";

export default class Game {
  // For understanding we have these set of states
  // STANDBY, PLAYERTURN, DEALERTURN, PLAYERBET, PLAYERHIT, WIN,
  // BANKRUPT, LOSE, SPLIT
  #state;
  #player;
  #dealer;

  constructor() {
    this.#state = "STANDBY";
  }

  newGame(players) {
    this.#player = new Player();
    this.#dealer = new Dealer();
    this.#state = "PLAYERBET";
  }

  startGame() {
    this.newGame();
  }

  get getState() {
    return this.#state;
  }

  view() {
    let content = [];
    if (this.#state === "STANDBY") {
      content.push(
        m("img.logo", {
          src: "./images/blackjack.png"
        }),
        m(
          "button.start",
          {
            onclick: e => {
              e.preventDefault();
              this.startGame();
            }
          },
          "START"
        )
      );
    } else {
      content.push(this.#player.view(), this.#dealer.view());
    }

    return m("div", content);
  }
}
