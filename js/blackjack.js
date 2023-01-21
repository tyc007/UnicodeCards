import Deck from "./deck.js";
import CardCodePoints from "../json/StandardDeck.json" assert { type: "json" };

//TODO: 
//Deal Cards
//Add Options for Hit Stay
//Scoring 

const playerHand    = document.getElementById("player-hand");
const dealButton    = document.getElementById("deal");
const hitButton     = document.getElementById("hit")

let deck;
let dealerScore = 0;
let playerScore = 0;

window.onload = function() {
    buildDeck();
    startGame();
}

function startGame() {
    console.log(deck.cards);
    for (let i = 0; i < 2; i+=1) {
        hit();
    }

    hitButton.addEventListener("click", hit);

}

function buildDeck() {
    deck = new Deck();
    deck.shuffle();   
}

function hit(){
    let card = deck.cards.pop();
    let cardSpan = document.createElement("span")
    let score = getCardScore(card)
    playerScore += getCardScore(card)
    console.log("PlayerScore", playerScore)
    playerHand.append(wrapCardInSpanWithCSS(card));
}

function getCardScore(card) {
    let rank = card.rank;

    if (isNaN(rank)) {
        if (rank == "A") {
            if (playerScore >= 11) {
                return 1;
            }
            else{
                return 11;
            }
        }
        return 10;
    }
    return parseInt(rank);
}

function wrapCardInSpanWithCSS(card){
    let cardSpan = document.createElement("span");
    cardSpan.setAttribute('class', getCardDetails(card).suit);
    cardSpan.innerHTML  = getCardUnicode(card);
    return cardSpan;
}

function unicodeFromCodePoint(num){
    return String.fromCodePoint(parseInt(num,16));
}

function getCardDetails(card) {
    return CardCodePoints.filter(CardCodePoints => CardCodePoints.rank == card.rank && CardCodePoints.suit == card.suit)[0];
}

function getCardUnicode(card) {
    let cardDetails = getCardDetails(card);
    let cardUnicode = unicodeFromCodePoint(cardDetails.codepoint);
    return cardUnicode;
}





