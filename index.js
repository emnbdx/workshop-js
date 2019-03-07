// SETUP
var readlineSync = require('readline-sync');

// VARIABLE
var welcomeList = [
    'Hello',
    'Bonjour',
    'Ca fart ?',
    'How are u doing ?'
]

var firstName = ''
var lastName = ''
var sex = ''
var eventType = ''
var price = ''

var sexValues = [
    'F',
    'M',
    'O'
]

var eventValues = {
    'Caritatif (C)': 'C',
    'Humanitaire (H)': 'H',
    'Drole (D)': 'D',
    'Autre (A)' : 'A'
}

var randomize = (list) => {
    var length = list.length - 1
    return list[Math.floor(Math.random() * 10) % length]
}

// Say hello
console.log(randomize(welcomeList))

// Ask name
var answer = readlineSync.question('May I have your name? ');
var nameParts = answer.split(',')
firstName = nameParts[0]
lastName = nameParts[1]

//console.log(`${firstName} ${lastName}`)

var sexValid = false;
while(!sexValid){
    var sexAnswer = readlineSync.question('May I have your sex (F/M/O)? ');
    if(sexValues.indexOf(sexAnswer) >= 0) {
        sex = sexAnswer;
        sexValid = true
    }
}

console.log(sex)


var eventValid = false;
while(!eventValid){
    var eventAnswer = readlineSync.question(`Merci de choisir votre type d'évènement dans cette liste:\n${Object.keys(eventValues).join('\n')}\n`);
    if(Object.values(eventValues).indexOf(eventAnswer) >= 0) {
        eventType = eventAnswer;
        eventValid = true
    }
}

console.log(eventType)

var priceAnswer = readlineSync.question('Combien tu payes ?');
price = priceAnswer

//Recap
console.log(`${firstName} ${lastName} va payer ${price} pour une évènement ${eventType}`)