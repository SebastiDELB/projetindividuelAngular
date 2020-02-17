import Attack from "./Attack";

export default class Pokemon {
	name : string;
	speed : number;
	healpoint : number;
	attacks : Attack[];
	status : string;

	constructor(name : string , speed : number, healpoint : number){
		this.name = name,
		this.speed = speed,
		this.healpoint = healpoint;
		this.status = "Vivant";
		let griffe = new Attack("griffe", 30);
		let mimiqueue = new Attack("mimiqueue", 0);
		let viveAttaque = new Attack("viveAttaque", 30);
		let ultralaser = new Attack("ultralaser", 200);
		this.attacks = [griffe, mimiqueue,viveAttaque,ultralaser];
	}

	UseAttack(attackPosition : number, targetPokemon : Pokemon) {
		targetPokemon.healpoint -= this.attacks[attackPosition].damage;
		if(targetPokemon.healpoint < 1){
			targetPokemon.status = "K.O";
		}
		targetPokemon.healpoint;
	}
}