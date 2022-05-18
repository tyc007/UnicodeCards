const cardBack = ['Playing Card Back', '\uD83C\uDCA0', '1F0A0']; //1F0A0

function unicodeFromCodePoint (num) {
    return String.fromCodePoint(parseInt(num,16));
}

// Methods for displaying unicode in console
/*
console.log( String.fromCodePoint( 0x1F0A0 ) ); 
console.log('\u{1F0A0}');
console.log(String.fromCodePoint(parseInt(cardBack[2],16)));
console.log(unicodeFromCodePoint('1F639'));
console.log(cardBack);
*/

let cardHexes = [];

// Array of Unicode Cards
let i = '1F0A0';
while(i != '1F0F5'){
	cardHexes.push(i);
  i = (parseInt(i, 16) + 1).toString(16).toUpperCase();
}

for(let i = 1; i <= 5; i++){
    let cardHex = cardHexes[Math.floor(Math.random()*cardHexes.length)];
    let unicodeCard = String.fromCodePoint( parseInt(cardHex,16));
    document.getElementById('hand-pos-'+i).innerHTML = String.fromCodePoint( parseInt(cardHex,16));
    console.log(`'hand-pos-${i} - ${unicodeCard} - ${cardHex}`);
}

