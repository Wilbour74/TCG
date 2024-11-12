import Pawn from "../src/models/pawn";
import EventManager from "../src/eventManager";

describe('Pawn', function(){

  it('Obtenir la vie des pions', () => {
        const player1 = new Pawn(100, 60, 70);
        const player2 = new Pawn(150, 80, 100);
        const life1 = player1.getLife();
        const life2 = player2.getLife();
        const strength1 = player1.getStrength(); 
        const strength2 = player2.getStrength();
        const def1 = player1.getDef();
        const def2 = player2.getDef();
        console.log(`Pion 1 - Vie : ${life1}, Force : ${strength1}, Défense : ${def1}`);
        console.log(`Pion 2 - Vie : ${life2}, Force : ${strength2}, Défense : ${def2}`);
        expect(player1).toBeDefined();
        expect(player2).toBeDefined();
        
    })

    it("player1 doit attaquer player 2", () => {
        const player1 = new Pawn(10, 1, 1);
        const player2 = new Pawn(10, 1, 1);
        player1.attack(player2);
        console.log('Voici la vie du joueur 2:', player2.getLife());
        expect(player2.getLife()).toBe(9);
        
    });

    it("Le player2 doit attaquer player1", () => {
        const player1 = new Pawn(10, 1, 1);
        const player2 = new Pawn(10, 7, 1);
        player2.attack(player1);
        console.log('Voici la vie du joueur 1:', player1.getLife());
        expect(player1.getLife()).toBe(3);

    })

    it("Le player1 reçoit une attaque du player2 et riposte", () => {
        const player1 = new Pawn(10, 1, 3);
        const player2 = new Pawn(10, 1, 1);
        player1.receiveAttack(player2, true);
        //joueur 1 va recevoir l'attaque du joueur 2 mais il va se défendre
        console.log('Le joueur 2 a attaqué le joueur 1 et lui a enlévé "1" point de vie, vie restante:', player1.getLife());
        console.log('Aie! Le joueur 1 a riposté et a infligé "3" degats au joueur 2. Vie restante:', player2.getLife());
        expect(player2.getLife()).toBe(7);
        expect(player1.getLife()).toBe(9);
    })

    it("Le player2 reçoit une attaque du player1 mais ne riposte pas", () => {
        const player1 = new Pawn(10, 1, 3);
        const player2 = new Pawn(10, 1, 1);
        player2.receiveAttack(player1, false);
        //joueur 2 va recevoir l'attaque du joueur 1 mais il ne va pas se defendre
        console.log('Le joueur 1 a attaqué le joueur 2 et lui a enlévé "1" point de vie, vie restante:', player2.getLife());
        expect(player2.getLife()).toBe(9);
        expect(player1.getLife()).toBe(10);
    })

    

    

    
})