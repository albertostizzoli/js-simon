
let container = document.getElementById('container');
let innerTimer = document.getElementById('timer');
let resultBox = document.getElementById('result');

// Array
let randomArray = [];
let targetArray = [];

//Funzioni

//Funzione per generare un numero casuale
function randomNumber(min, max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

//Funzione per generare un array di 5 numeri casuali
function randomArrayGenerator (container, randomArray){
    while(randomArray.length < 5){
        randomArray.push(randomNumber(1,100));
    }
    return container.innerHTML = `I numeri generati sono: ${randomArray}`;
}

//Funzione di richiesta nunero
function numberRequest(){
    while(targetArray.length < 5){
        let selection = parseInt(prompt("Inserisci un numero"));
        targetArray.push(selection);
    }
}





