import Cemetary from "../src/models/cemetary";
import Player from "../src/models/player";
import Deck from "../src/models/deck";

describe('Player', function(){
    let player;

    beforeEach(function() {
        player = new Player({
            type: "player",
        })
    })
    
    it('Doit mélanger le paquet principal (deck)', () => {
        const deck = new Deck({ cards: [1, 2, 3, 4] });
        
        player.deck = deck;

        const result = player.shuffle("deck");
        
        expect(result).toBe(true);

        expect(player.deck.cards).not.toEqual([1, 2, 3, 4]);
    });
})