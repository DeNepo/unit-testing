'use strict';

// === declare function ===

const doubleCharacters = (str = '') => {
	let doubled = '';
	for (const nextChar of str) {
		doubled = doubled + nextChar + nextChar;
	}
	return doubled;
};

// === call function ===

let text = null;
while (text === null) {
	text = prompt('enter some text, each character will be doubled:');
}

const tteexxtt = doubleCharacters(text);

alert(tteexxtt);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
