import m from "mithril";
import "./dealer.css";

import Deck from "src/client/helpers/deck";
import Player from "src/client/helpers/player";

export default class Dealer extends Player {
  #deck;
  #default = {
    blue: 9999,
    green: 99999,
    red: 999999,
    white: 9999999
  };

  constructor() {
    super();
    this.#deck = new Deck();
    this.chips = this.#default;
  }

  playerHits() {}

  playerSplits() {}
}
