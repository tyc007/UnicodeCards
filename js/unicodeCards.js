const cardBack = ['Playing Card Back', '\uD83C\uDCA0', '1F0A0']; //1F0A0
/*
function unicodeFromCodePoint (num) {
    return String.fromCodePoint(parseInt(num,16));
}*/

unicodeFromCodePoint => String.fromCodePoint(parseInt(num,16));
// Methods for displaying unicode in console
/*
console.log( String.fromCodePoint( 0x1F0A0 ) ); 
console.log('\u{1F0A0}');
console.log(String.fromCodePoint(parseInt(cardBack[2],16)));
console.log(unicodeFromCodePoint('1F639'));
console.log(cardBack);
*/

/*
Temporary function to randomize valid cards on reload, until deck function is created
*/


let cardHexes = [];
// List of undesired blanks and Joker emoji
const invalidHexes = ['1F0AF', '1F0B0', '1F0C0', '1F0D0', '1F0CF'];
const jokers = ['1F0BF', '1F0DF'];
const knights = ['1F0AC', '1F0BC', '1F0CC', '1F0DC'];

// Array of Unicode Cards
let hex = '1F0A1';
// 1F0DF last range of French deck, 1F0F5 includes range of Trump Cards
while(hex != '1F0DF'){
    if(!(invalidHexes.includes(hex) || jokers.includes(hex) || knights.includes(hex))) {
        cardHexes.push(hex);
    }
   
    hex = (parseInt(hex, 16) + 1).toString(16).toUpperCase();
}

for(let i = 1; i <= 5; i++){
    let cardHex = cardHexes[Math.floor(Math.random()*cardHexes.length)];
    let unicodeCard = String.fromCodePoint( parseInt(cardHex,16));
    //document.getElementById('hand-pos-'+i).innerHTML = String.fromCodePoint( parseInt(cardHex,16));
    //console.log(`'hand-pos-${i} - ${unicodeCard} - ${cardHex}`);
}

