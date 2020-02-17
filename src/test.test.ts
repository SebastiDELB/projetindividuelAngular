import Pokemon from "./Pokemon"
import {Attack} from "./APIPokemon"

test("pikachu devrait attaquer en 1er", () =>{
	let pikachu = new Pokemon("pikachu", 80, 150);
	let canarticho = new Pokemon("canarticho", 20, 200);
	Attack(pikachu,canarticho);
	expect(Attack(pikachu,canarticho)).toBe("pikachu");
});

test("canarticho devrait attaquer en 1er", () =>{
	let pikachu = new Pokemon("pikachu", 80, 150);
	let canarticho = new Pokemon("canarticho", 100,200);
	Attack(pikachu,canarticho);
	expect(Attack(pikachu,canarticho)).toBe("canarticho");
});
test("pikachu utilise griffe sur canarticho qui doit lui rester 170pdv", () =>{
	let pikachu = new Pokemon("pikachu", 80, 150);
	let canarticho = new Pokemon("canarticho", 100, 200);
	pikachu.UseAttack(0,canarticho);
	expect(canarticho.healpoint).toBe(170);
});
test("pikachu utilise ultralaser sur canarticho qui doit être KO", () =>{
	let pikachu = new Pokemon("pikachu", 80, 150);
	let canarticho = new Pokemon("canarticho", 100, 200);
	pikachu.UseAttack(3,canarticho);
	expect(canarticho.status).toBe("K.O");
});
test("canarticho utilise mimiqueue sur pikachu qui doit lui rester 150pdv CAR CA NE FAIT RIEN", () =>{
	let pikachu = new Pokemon("pikachu", 80, 150);
	let canarticho = new Pokemon("canarticho", 100, 200);
	canarticho.UseAttack(1,pikachu);
	expect(pikachu.healpoint).toBe(150);
});