import Hand from "../src/models/hand";

describe('Hand', function() {
    let hand;

    beforeEach(function() {
        hand = new Hand({ cards: [1, 2, 3, 4, 5, 6]})
    })
    it('Doit ajouter une carte à la main', () => {
        const cards = [...hand.cards];
        hand.addCard(8);
        console.log(`Main après l'ajout :`, hand.cards);
        expect(hand.cards).not.toEqual(cards);
        
    });

    it('Doit retirer la carte de la main', () => {
        const cards = [...hand.cards];
        const remove = hand.removeCard(4);
        console.log(`Main après la suppression de la carte à l'index ${remove} `, hand.cards);
        console.log(`Carte enlevé :`, remove);
        expect(hand.cards).not.toEqual(cards);
    });

    it('Doit afficher les cartes de la main', () => {
        const cards = hand.getAllCards();
        console.log(`Voici la main :`, cards);
        expect(hand.getAllCards()).toBe(cards);
    });

    it('Doit afficher le nombre de carte de la main', () => {
        const count = hand.getCardsCount();
        console.log(`Voici le nombre de carte dans la main :`, count);
        expect(hand.getCardsCount()).toEqual(count);
    });
    
})