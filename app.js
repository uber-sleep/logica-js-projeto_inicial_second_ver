let secretNumberArray = [];
let arrayLimitNumber = 3;
let elementHTML = (tag, text) => {
    let element = document.querySelector(tag);
    element.innerHTML = text;
    // responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2});
};

let secretNumber = randomNumber();
let index = 1;

loader();

// ONCLICK
function checkGuess() {
    let guess = document.querySelector('input').value;

    if(guess == secretNumber) {
        elementHTML('h1', 'Acertou!');
        let pluralGuesses = index > 1 ? 'tentativas' : 'tentativa';
        let guessMessage = `Isso aí! Você acertou o número secreto ${secretNumber} com ${index} ${pluralGuesses}.`;
        elementHTML('h1', guessMessage);
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else {
        guess < secretNumber ? elementHTML('p', 'O número secreto é maior.') : elementHTML('p', 'O número secreto é menor.');
        index++;
        inputClear();
    };
};

// ONCLICK
function reloader() {
    secretNumber = randomNumber();
    inputClear();
    index = 1;
    loader();
    document.querySelector('#reiniciar').setAttribute('disabled', 'false');
};

// FUNCTIONS
function loader() {
    elementHTML('h1','Jogo do número secreto');
    elementHTML('p.texto__paragrafo',  'Escolha um número entre 1 e 10');
};

function randomNumber() {
    let chosenRandomNumber = parseInt(Math.random() * arrayLimitNumber + 1);
    let arrayNumberLength = secretNumberArray.length;

    if (arrayNumberLength == arrayLimitNumber) {
        secretNumberArray = [];
    };

    // return secretNumberArray.includes(chosenRandomNumber) ?  randomNumber() : secretNumberArray.push(chosenRandomNumber), chosenRandomNumber;
    if (secretNumberArray.includes(chosenRandomNumber)) {
        return randomNumber() 
    } else {
        secretNumberArray.push(chosenRandomNumber);
        return chosenRandomNumber; 
    }
};

function inputClear(){
    let inputGuess = document.querySelector('input'); 
    inputGuess.value = '';
}
