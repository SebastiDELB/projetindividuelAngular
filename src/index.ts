import Pokemon from "./Pokemon"
import {Attack} from "./APIPokemon"

//pour cette démo, comme je préfère les petits scénarios, voici le mien. Au plaisir

console.log("Bienvenue dans POKEMON version Purple");
console.log("\n");
console.log("\n");
console.log("-------------------------------------");
console.log("Vous êtes un petit bambi et son Pikachu dans un champ ...");
console.log("Après une bonne siestas, vous décidez d'aller rejoindre votre maison.");
console.log("Après 100m de marche pas du tout soutenue");
console.log("Vous tombez nez à poireau contre un Canarticho !");
console.log("et devinez quoi ? Il vous attaque ! Défendez vous voyons !");
console.log("Vous tombez nez à poireau contre un Canarticho !");
console.log("******musique de combat de POKEMON******");
console.log("   ******                    ******");
console.log("       ******            ******");
console.log("             ***********");
let pikachu = new Pokemon("pikachu", 80, 150);
let canarticho = new Pokemon("canarticho", 20, 200);

if(Attack(pikachu,canarticho) == "pikachu"){
    console.log("Bonne nouvelle ! votre Pikachu n'a pas trop mangé de raclette donc a l'initiative !")
} else {
    console.log("les légumes verts sont bons pour la santé, Canarticho commence !");
}
//Bon là c'est tjrs pika dans notre scénario

let premierTour = pikachu.UseAttack(0,canarticho);
//canarticho :170 pikachu:150
console.log("Votre Pikachu utilise ses griffes, "+canarticho.name+" n'a plus que "+canarticho.healpoint+" pdv");
console.log("Le canarticho est vénère de ouf ! il réplique par ses griffes");
let deuxiemeTour = canarticho.UseAttack(0,pikachu);
//canarticho:170 pikachu:120
console.log("Votre Pikachu a mal, "+pikachu.name+" et n'a plus que "+pikachu.healpoint+" pdv");
console.log("Votre Pikachu montre sa queue et utilise mimiqueue !");
let troisiemeTour = pikachu.UseAttack(1,canarticho);
//canarticho:170 pikachu:120
console.log("Canarticho est encore plus énervé et remet un coup de griffe ! "+pikachu.name+" n'a plus que "+pikachu.healpoint+" pdv");
let quatiemeTour = canarticho.UseAttack(1,pikachu);
//canarticho:170 pikachu:90
console.log("Pikachu mange dans sa chute un bout d'herbe à l'allure douteuse, se plie en 2, puis vomi par sa bouche un puissant rayon de lumière !");
let cinquiemeTour = pikachu.UseAttack(3,canarticho);
//canarticho:K.O pikachu:120

console.log("Carnaticho est "+canarticho.status );
console.log("Vous retournez donc faire la sièste au même endroit, au milieu du niq des Canartichos...");







//////////////////////////

function GetRandomInt() {
    return Math.floor(Math.random() * (4 - 0)) + 0;
}

let Pause = setInterval(() => { 
    Tour
}, 2000);
function Tour(tour : number){
    console.log("C'est le tour n°"+tour);
}
function Fight() {
    let pikachu = new Pokemon("pikachu", 80, 150);
    let canarticho = new Pokemon("canarticho", 20, 200);
    let tour = 1;
    while(pikachu.status == "K.O" || canarticho.status == "K.O"){
        Tour(tour);
        if(Attack(pikachu,canarticho) == "pikachu"){
            pikachu.UseAttack(GetRandomInt(),canarticho);
            console.log("canarticho hp : " +canarticho.healpoint);
            canarticho.speed -= 100;
        } else {
            canarticho.UseAttack(GetRandomInt(), pikachu);
            console.log("pikachu hp : " +pikachu.healpoint);
            canarticho.speed += 100;
        }
    }
    if(pikachu.status == "K.O"){
        console.log("PIKACHU EST K.O CANARTICHO GAGNE !!")
    }
    else{
        console.log("CANARTICHO EST K.O PIKACHU GAGNE !!")
    }
}