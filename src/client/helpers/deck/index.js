import m from "mithril";
import "./deck.css";

export default class Deck {
  #cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  #values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, [1, 11]];
  #side = ["Diamonds", "Spades", "Clubs", "Hearts"];
  #abbr = ["D", "S", "C", "H"];
  #numbCards = this.#cards.length * this.#abbr.length;
  #mapping = new Map();
  #inline = new Map();

  #deck = [];
  #numberOfDecks;

  constructor(numberOfDecks = 6) {
    this.#numberOfDecks = numberOfDecks;
    let str;
    for (let i = 0; i < this.#abbr.length; i++) {
      for (let x = 0; x < this.#cards.length; x++) {
        str = this.#cards[x] + this.#abbr[i];
        this.#mapping.set(str, {
          card: x,
          side: i
        });
        this.#inline.set(i * this.#cards.length + x, str);
      }
    }
    this.shuffle();
  }

  shuffle() {
    this.#deck = [];
    let total = this.#numberOfDecks * this.#numbCards;
    let position;
    for (let i = 0; i < total; i++) {
      position = Math.round(Math.random() * this.#deck.length);
      this.#deck.splice(position, 0, this.#inline.get(i % this.#numbCards));
    }
  }

  getNextCard() {
    return this.#deck.shift();
  }

  __getValue(value, set) {
    for (let i = 0; i < set.length; i++)
      for (let x = 0; x < value.length; x++)
        if (set[i][0] === "A")
          return (value[x] += this.#values[this.#mapping.get(set[i]).card]);
        else
          return [
            this.__getValue(
              value[x] + this.#values[this.#mapping.get(set[i]).card][0],
              set.slice(i)
            ),
            this.__getValue(
              value[x] + this.#values[this.#mapping.get(set[i]).card][1],
              set.slice(i)
            )
          ];
  }

  getValue(set) {
    return this.__getValue([0], set);
  }

  getCardImagePath(key) {
    return "./images/cards/" + key + ".png";
  }
}
