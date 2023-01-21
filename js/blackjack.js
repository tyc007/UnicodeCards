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

window.onload = function() {
    buildDeck();
    startGame();
}

function startGame() {
    console.log(deck.cards);
    for (let i = 0; i < 2; i+=1) {
        let card = deck.cards.pop();
        playerHand.append(wrapCardInSpan(card));
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
    playerHand.append(wrapCardInSpan(card));
    playerHand.append(cardSpan);
}

function wrapCardInSpan(card){
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




