import EventManager from "../eventManager";

export default class Pawn extends EventManager {
    constructor(life, strength, def){
        super();
        this.life = life;
        this.strength = strength;
        this.def = def;
    }

    getLife(){
        return this.life;
    }

    getStrength(){
        return this.strength;
    }

    getDef(){
        return this.def;
    }

    attack(target) {
        if(target instanceof Pawn){
            target.receiveAttack(this);
        }
    }


    receiveAttack(opponent, strikeBack = false) {
        if (!strikeBack) {
            this.life -= opponent.strength;
        } else {
            this.life -= opponent.strength;
            opponent.life -= this.def;
            
        }
    }

}