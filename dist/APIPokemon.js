"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Attack(Pokemon1, Pokemon2) {
    if (Pokemon1.speed < Pokemon2.speed) {
        return Pokemon2.name;
    }
    else {
        return Pokemon1.name;
    }
}
exports.Attack = Attack;
//# sourceMappingURL=APIPokemon.js.map