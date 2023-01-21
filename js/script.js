import Deck from "./deck.js";
import CardCodePoints from "../json/StandardDeck.json" assert { type: "json" };

const playerHand = document.getElementById("player-hand")

function unicodeFromCodePoint(num){
    return String.fromCodePoint(parseInt(num,16));
}

function getCardDetails(card) {
    return CardCodePoints.filter(CardCodePoints => CardCodePoints.rank == card.rank && CardCodePoints.suit == card.suit)[0];
}

function getCardByCodePoint(codepoint) {
    return CardCodePoints.filter(CardCodePoints => CardCodePoints.codepoint == codepoint);
}

document.addEventListener('click', () => {
    
})

startGame()
function startGame() {
    const deck = new Deck();
    deck.shuffle()
    
    console.log(deck.cards);

    for (let i = 0; i < 2; i+=1) {
        let card = deck.cards.pop()
        console.log(card);
        let cardDetails = getCardDetails(card)
        let cardUnicode = unicodeFromCodePoint(cardDetails.codepoint)
        playerHand.insertAdjacentHTML('afterend', cardUnicode);
    }
    

    //document.getElementById('player-hand').innerHTML = 
    //TODO: 
    //Deal Cards
    //Add Options for Hit Stay
    //Scoring 


}


