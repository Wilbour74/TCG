export default class Hand {
    constructor (config) {
        if (config && config.cards && Array.isArray(config.cards)){
            this.cards = config.cards;
        }
        else {
            this.cards = [];
        }
        this.limit = config && config.limit !== undefined ? config.limit : 7;
    }

    addCard(card){
        if(this.cards.length < this.limit){
            this.cards.push(card);
            return true;
        }
        else{
            return false;
        }
    }

    removeCard(position) {
        if (position >= 0 && position < this.cards.length) {
            const removedCard = this.cards.splice(position, 1);
            return removedCard;
        } else {
            return false;
        }
    }

    getAllCards(){
        return this.cards;
    }

    getCardsCount(){
        return this.cards.length;
    }    
}