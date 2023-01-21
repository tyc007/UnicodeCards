import Deck from "./deck.js";
import data from "../json/StandardDeck.json" assert { type: "json" };

const playerHand = document.querySelector(".player-hand")

document.addEventListener('click', () => {
    
})

startGame()
function startGame() {
    const deck = new Deck();
    deck.shuffle()
    
    console.log(deck.cards);
    console.log(deck.cards.pop());
    //document.getElementById('player-hand').innerHTML = String.fromCodePoint( parseInt(cardHex,16));
    //TODO: 
    //Deal Cards
    //Add Options for Hit Stay
    //Scoring 

    console.log(data);
}


