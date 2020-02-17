"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attack_1 = require("./Attack");
var Pokemon = (function () {
    function Pokemon(name, speed, healpoint) {
        this.name = name,
            this.speed = speed,
            this.healpoint = healpoint;
        this.status = "Vivant";
        var griffe = new Attack_1.default("griffe", 30);
        var mimiqueue = new Attack_1.default("mimiqueue", 0);
        var viveAttaque = new Attack_1.default("viveAttaque", 30);
        var ultralaser = new Attack_1.default("ultralaser", 200);
        this.attacks = [griffe, mimiqueue, viveAttaque, ultralaser];
    }
    Pokemon.prototype.UseAttack = function (attackPosition, targetPokemon) {
        targetPokemon.healpoint -= this.attacks[attackPosition].damage;
        if (targetPokemon.healpoint < 1) {
            return targetPokemon.status = "K.O";
        }
        return targetPokemon.healpoint;
    };
    return Pokemon;
}());
exports.default = Pokemon;
//# sourceMappingURL=Pokemon.js.map