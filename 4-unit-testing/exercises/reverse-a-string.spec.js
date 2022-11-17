'use strict';

/**
 * this function reverses a string
 * @param {string} [text=''] - the string to reverse
 * @returns {string} the reversed text
 */
const reverseAString = (text = '') => {
	if (typeof text !== 'string') {
		return 'text is not a string';
	}

	let reversed = '';
	for (let i = text.length - 1; i >= 0; i--) {
		reversed += text[i];
	}
	return reversed;
};

describe('it should reverseAString strings', () => {
	describe('when no argument is passed', () => {
		it('default parameter is an empty string', () => {
			expect(reverseAString()).toStrictEqual('');
		});
	});
	describe('when argument is a string', () => {
		it('the empty string should return an empty string', () => {
			expect(reverseAString('')).toStrictEqual(_);
		});
		it('"toads" should return "sdaot"', () => {
			expect(reverseAString(_)).toStrictEqual('sdaot');
		});
		// write at least 5 more tests
	});
	describe('when argument is not a string', () => {
		it('true should return "text is not a string"', () => {
			expect(reverseAString(true)).toStrictEqual(_);
		});
		// write at least 3 more tests
	});
});
