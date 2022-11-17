'use strict';

/* expect(received).toStrictEqual(expected)

  expect(_).toStrictEqual(_) is a very common syntax for assertions in JS
  if the assertion is true, nothing happens
  if the assertion is false, an error is thrown

*/

// nothing happens
expect(3).toStrictEqual(3);

try {
	// an error is thrown
	expect(3).toStrictEqual(4);
} catch (err) {
	console.error(err);
}

// the main test suite
describe('about expect', () => {
	// a nested test suite focusing on how to test primitive values
	describe('comparing primitives', () => {
		// comparing primitives with toEqual is the same as using Object.is
		// the name toEqual is confusing because it makes you think of ===
		//  but it's not the same!  this will take some getting used to
		it('5, 5', () => {
			expect(5).toStrictEqual(5);
		});
		it('5, "5"', () => {
			expect(5).toStrictEqual('5');
		});
		it('true, true', () => {
			expect(true).toStrictEqual(true);
		});
		it('false, true', () => {
			expect(false).toStrictEqual(true);
		});
		it('NaN, NaN', () => {
			expect(NaN).toStrictEqual(NaN);
		});
		it('-0, +0', () => {
			expect(-0).toStrictEqual(+0);
		});
	});

	// another nested test suite just for fun
	describe('JavaScript', () => {
		it('is sometimes confusing', () => {
			expect(9 + '9').toStrictEqual('99');
		});
	});
});
