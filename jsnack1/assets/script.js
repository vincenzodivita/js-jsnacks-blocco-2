/* Consegna dell'esercizio
1) Crea un array vuoto.
2) Chiedi per 6 volte all’utente di inserire un numero,
3) se è dispari inseriscilo nell’array. */

//Add an empty array
const oddNumberArray = [];

console.log(`Numbers in the array before user input: ${oddNumberArray}`);

//Ask a number to user six times 
const askTimes = 6;
let userNumberArray = [];

for (i = 0; i < askTimes; i++) {
const userInput = userNumberArray.push(prompt('Dammi un numero'));

// Add odd numbers in to the first array
if (userNumberArray[i] % 2 !== 0) {
    oddNumberArray.push(userNumberArray[i]);
}
}
console.log(`User numbers input: ${userNumberArray}`);
console.log(`Numbers in the array after user input: ${oddNumberArray}`);

