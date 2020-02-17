"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./Pokemon");
var APIPokemon_1 = require("./APIPokemon");
console.log("Bienvenue dans POKEMON version Purple");
setInterval(function () { }, 1000);
console.log("\n");
console.log("\n");
console.log("-------------------------------------");
console.log("Vous êtes un petit bambi et son Pikachu dans un champ ...");
console.log("Après une bonne siestas, vous décidez d'aller rejoindre votre maison.");
console.log("Après 100m de marche pas du tout soutenue");
setInterval(function () { }, 1000);
console.log("Vous tombez nez à poireau contre un Canarticho !");
console.log("et devinez quoi ? Il vous attaque ! Défendez vous voyons !");
console.log("Vous tombez nez à poireau contre un Canarticho !");
setInterval(function () { }, 1000);
console.log("******musique de combat de POKEMON******");
var pikachu = new Pokemon_1.default("pikachu", 80, 150);
var canarticho = new Pokemon_1.default("canarticho", 20, 200);
if (APIPokemon_1.Attack(pikachu, canarticho) == "pikachu") {
    console.log("Bonne nouvelle ! votre Pikachu n'a pas trop mangé de raclette donc a l'initiative !");
}
else {
    console.log("les légumes verts sont bons pour la santé, Canarticho commence !");
}
var premierTour = pikachu.UseAttack(0, canarticho);
console.log("Votre Pikachu utilise ses griffes, " + canarticho.name + " n'a plus que " + canarticho.healpoint + " pdv");
console.log("Le canarticho est vénère de ouf ! il réplique par ses griffes");
var deuxiemeTour = canarticho.UseAttack(0, pikachu);
console.log("Votre Pikachu a mal, " + pikachu.name + " et n'a plus que " + pikachu.healpoint + " pdv");
console.log("Votre Pikachu montre sa queue et utilise mimiqueue !");
var troisiemeTour = pikachu.UseAttack(1, canarticho);
console.log("Canarticho est encore plus énervé et remet un coup de griffe ! " + pikachu.name + " n'a plus que " + pikachu.healpoint + " pdv");
var quatiemeTour = canarticho.UseAttack(1, pikachu);
console.log("Pikachu mange dans sa chute un bout d'herbe à l'allure douteuse, se plie en 2, puis vomi par sa bouche un puissant rayon de lumière !");
var cinquiemeTour = pikachu.UseAttack(3, canarticho);
console.log("Carnaticho est " + canarticho.status);
console.log("Vous retournez donc faire la sièste au même endroit, au milieu du niq des Canartichos...");
//# sourceMappingURL=index.js.map