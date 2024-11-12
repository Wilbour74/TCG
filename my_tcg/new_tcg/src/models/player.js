import ModelFactory from './factory';
import Pawn from './pawn';
import Deck from './deck';
import Board from './board';
import Hand from './hand';
import Cemetary from './cemetary';

export default class Player extends Pawn {

    constructor(config) {
        super();
        this.deck = new Deck({ cards: this.config.cards });
        this.board = new Board();
        this.hand = new Hand();
        this.cemetary = new Cemetary();
    }

    shuffle(type = "deck") {
        if (type === "deck") {
            this.deck.shuffle();
            return true;
        } else if (type === "cemetary") {
            this.cemetary.shuffle();
            return true;
        } else {
            return false;
        }
    }

    draw () {
        return this.deck.draw();
    }



}