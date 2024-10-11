
export default class Deck {
    constructor (config) {
        if (config && config.cards && Array.isArray(config.cards)) {
            this.cards = config.cards;
        } else {
            throw new Error("Le paramètre 'config' doit avoir une propriété 'cards' qui est un tableau de cartes.");
        }
    }

    shuffle () {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        return true;
    }

    insertAt (card, position) {
            if (position === undefined || position >= this.cards.length) {
                this.cards.push(card);
            } else if (position < 0) {
                this.cards.unshift(card);
            } else {
                this.cards.splice(position, 0, card);
            }
    }

    draw () {
        if(this.cards.length !== 0){
            return this.cards.shift();
        }
        else{
            return false;
        }
    }

    getCardsCount () {
        return this.cards.length;
    }
}