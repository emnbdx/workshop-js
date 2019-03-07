// SETUP
var readlineSync = require("readline-sync");
var Utils = require("./utils");

// VARIABLE
var welcomeList = ["Hello", "Bonjour", "Ca fart ?", "How are u doing ?"];
var firstName = "";
var lastName = "";
var sex = "";
var price = "";

var sexValues = ["F", "M", "O"];

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
var answer = readlineSync.question("May I have your name? ").toUpperCase();
var nameParts = answer.split(",");
firstName = nameParts[0];
lastName = nameParts[1];

// Check genre
var sexAnswer = -1;
while (sexAnswer < 0) {
  sexAnswer = readlineSync.keyInSelect(sexValues, "May I have your sex ? ");
}
sex = sexValues[sexAnswer];

// Ask for email
var email = readlineSync.questionEMail("Votre courriel please :");

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
var priceAnswer = readlineSync.questionFloat("Combien tu payes ?");
price = priceAnswer;

//Recap
console.log(
  `${firstName} ${lastName} va payer ${price} € pour un évènement ${eventType}`
);
console.log(`Un Email sera envoyé à : ${email}`);
