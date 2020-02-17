"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./Pokemon");
var APIPokemon_1 = require("./APIPokemon");
test("pikachu devrait attaquer en 1er", function () {
    var pikachu = new Pokemon_1.default("pikachu", 80, 150);
    var canarticho = new Pokemon_1.default("canarticho", 20, 200);
    APIPokemon_1.Attack(pikachu, canarticho);
    expect(APIPokemon_1.Attack(pikachu, canarticho)).toBe("pikachu");
});
test("canarticho devrait attaquer en 1er", function () {
    var pikachu = new Pokemon_1.default("pikachu", 80, 150);
    var canarticho = new Pokemon_1.default("canarticho", 100, 200);
    APIPokemon_1.Attack(pikachu, canarticho);
    expect(APIPokemon_1.Attack(pikachu, canarticho)).toBe("canarticho");
});
test("pikachu utilise griffe sur canarticho qui doit lui rester 170pdv", function () {
    var pikachu = new Pokemon_1.default("pikachu", 80, 150);
    var canarticho = new Pokemon_1.default("canarticho", 100, 200);
    expect(pikachu.UseAttack(0, canarticho)).toBe(170);
});
test("pikachu utilise ultralaser sur canarticho qui doit être KO", function () {
    var pikachu = new Pokemon_1.default("pikachu", 80, 150);
    var canarticho = new Pokemon_1.default("canarticho", 100, 200);
    pikachu.UseAttack(3, canarticho);
    expect(canarticho.status).toBe("K.O");
});
test("canarticho utilise mimiqueue sur pikachu qui doit lui rester 150pdv CAR CA NE FAIT RIEN", function () {
    var pikachu = new Pokemon_1.default("pikachu", 80, 150);
    var canarticho = new Pokemon_1.default("canarticho", 100, 200);
    canarticho.UseAttack(1, pikachu);
    expect(pikachu.healpoint).toBe(150);
});
//# sourceMappingURL=test.test.js.map