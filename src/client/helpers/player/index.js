import m from "mithril";
import "./player.css";

export default class Player {
  chips;
  #hand = [];

  constructor(
    chips = {
      blue: 2,
      green: 5,
      red: 10,
      white: 25
    }
  ) {
    this.chips = chips;
  }

  retrieveCard(card) {
    this.hand.push(card);
  }

  fold() {
    this.hand = [];
  }

  view() {
    let content = [];
    return m("div", content);
  }
}
