'use strict';

// === declare function ===

const reverse = (text = '') => {
	let backwards = '';
	for (const nextChar of text) {
		backwards = nextChar + backwards;
	}
	return backwards;
};

// === call function ===

let toReverse = null;
while (toReverse === null) {
	toReverse = prompt('enter something to reverse:');
}

const reversed = reverse(toReverse);

const transformation = toReverse + ' -> ' + reversed;

alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
