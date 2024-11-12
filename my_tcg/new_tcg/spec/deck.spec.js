import Deck from "../src/models/deck";

describe('Deck', function() {
    let deck;

    beforeEach(function() {
        deck = new Deck({ cards: [1, 2, 3, 4, 5] });
    });

    it('Doit mélanger le deck', () => {
        const initialOrder = [...deck.cards];
        deck.shuffle();
        console.log("Deck après le melange: ", deck.cards);
        expect(deck.cards).not.toEqual(initialOrder);
    });

    it("Ajout de la carte 6 à l'index 3", () => {
        const initialOrder = [...deck.cards];
        const card = 6;
        const position = 3;
        deck.insertAt(card,position);
        console.log(`Deck après l'insertion de la carte ${card} à l'index ${position} : ` , deck.cards);
        expect(deck.cards).not.toEqual(initialOrder);
    });

    it("Ajout de la carte 0 à l'index 0", () => {
        const initialOrder = [...deck.cards];
        const card = 0;
        const position = 0;
        deck.insertAt(card,position);
        console.log(`Deck après l'insertion de la carte ${card} à l'index ${position} : ` , deck.cards);
        expect(deck.cards).not.toEqual(initialOrder);
    });

    it("Ajout de la carte 16 sans index", () => {
        const initialOrder = [...deck.cards];
        const card = 16;
        deck.insertAt(card);
        console.log(`Deck après l'insertion de la carte ${card} a la fin du tableau: ` , deck.cards);
        expect(deck.cards).not.toEqual(initialOrder);
    });

    it("Retourner la première carte du paquet", () => {
        const firstCard = deck.draw();
        console.log(`Voici la première carte du paquet: ${firstCard}`);
        expect(firstCard).toBeDefined();
    });

    it("Retourner le nombre de cartes du paquet", () => {
        const count = deck.getCardsCount();
        console.log(`Le nombre de carte est ${count}`);
        expect(deck.getCardsCount()).toBe(count);
    });
})

