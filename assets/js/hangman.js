/* class Hangman{
    constructor(el){
        this.gameboard = document.querySelector("[data-gameboard]");
        this.buttonArea = document.querySelector("[data-gameboard]");

    }

} */

const gameboard = document.querySelector("[data-gameboard]");
const buttonArea = gameboard.querySelector("[data-buttons]");
const sentenceArea = gameboard.querySelector("[data-sentence]");

const alphabetPool = {};
let answerString = "De-Coding (and coding) are both fun!";
let mysteryString = "";

function setButtons(){
    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
        let char = String.fromCharCode(i);
        alphabetPool[char] = "unguessed";
        buttonArea.innerHTML += `<button>${char}</button>`;
    }
}

function setBoard(){
    for (let i = 0; i < answerString.length; i++) {
        if(/[!-\/:-@\[-`{-~\s]/.test(answerString[i])){
            mysteryString += answerString[i];
        }else{
            mysteryString += "_";
        } 
    }
    sentenceArea.textContent = mysteryString;

}


setButtons();
setBoard();
console.log(alphabetPool);