import Pokemon from "./Pokemon";

export function Attack (Pokemon1 : Pokemon, Pokemon2 : Pokemon){
	if(Pokemon1.speed  < Pokemon2.speed){
		return Pokemon2.name;
	}
	else{
		 return Pokemon1.name;
	}
}