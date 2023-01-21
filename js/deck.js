const SUITS = ['♠','♥','♦','♣'];
const RANKS = [ "A","2","3","4","5","6","7","8","9","10","J","Q","K"];

export default class Deck{
    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        return this.cards.pop()
    }

    shuffle() {
        //this.cards.sort((a,b) => Math.random(0 - .5))
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldrank = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldrank
        }
    }
}

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

function newDeck() {
    return SUITS.flatMap(suit => {
        return RANKS.map(rank => {
            return new Card(suit, rank)
        })
    })

}