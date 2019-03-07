// SETUP
var readlineSync = require("readline-sync");
var Utils = require("./utils");

// VARIABLE
var welcomeList = ["Hello", "Bonjour", "Ca fart ?", "How are u doing ?"];
var firstName = "";
var lastName = "";
var sex = "";
var email = "";
var price = "";

var sexValues = [
    "Femme",
    "Homme",
    "Autre"
];

var eventValues = [
  "Caritatif",
  "Humanitaire",
  "Drole",
  "Autre",
  "But Purement Lucratif"
];

// Say hello
console.log(Utils.randomize(welcomeList));

// Ask name
var answer = readlineSync.question("Merci d'entrer votre nom et prénom séparé par une virgule(,) : ").toUpperCase();
var nameParts = answer.split(",");
firstName = nameParts[0];
lastName = nameParts[1];

// Check genre
var sexAnswer = -1;
while (sexAnswer < 0) {
  sexAnswer = readlineSync.keyInSelect(sexValues, "De quel sexe êtes-vous ?");
}
sex = sexValues[sexAnswer];

// Ask for email
email = readlineSync.questionEMail("Votre adresse email : ");

// Ask for evenType until a good answer is done
var eventAnswer = -1;
while (eventAnswer < 0) {
  eventAnswer = readlineSync.keyInSelect(
    eventValues,
    "Merci de choisir votre type d'évènement dans cette liste."
  );
}
eventType = eventValues[eventAnswer];

// Ask for $$$
price = readlineSync.questionFloat("Tarif : ");

//Recap
console.log(
  `${firstName} ${lastName} de sexe ${sex} va payer ${price} € pour un évènement ${eventType}`
);
console.log(`Un Email sera envoyé à : ${email}`);
