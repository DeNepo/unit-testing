'use strict';

// `expect().toStrictEqual()` does a deep comparison by default!

describe('comparing arrays in unit tests', () => {
	describe('deep comparisons', () => {
		it('two arrays with the same values', () => {
			const arr1 = ['a', 'b', 'c'];
			const arr2 = ['a', 'b', 'c'];
			expect(arr1).toStrictEqual(arr2);
		});
		it('two arrays with different values', () => {
			const arr1 = ['a', 'b', 'c'];
			const arr2 = ['a', 'b', 'f'];
			expect(arr1).toStrictEqual(arr2);
		});
		it('one array', () => {
			const arr1 = ['a', 'b', 'c'];
			const arr2 = arr1;
			expect(arr1).toStrictEqual(arr2);
		});
	});
	describe('shallow (reference) comparisons', () => {
		it('two arrays with the same values', () => {
			const arr1 = ['a', 'b', 'c'];
			const arr2 = ['a', 'b', 'c'];
			const areSameArray = arr1 === arr2;
			expect(areSameArray).toStrictEqual(false);
		});
		it('two arrays with different values', () => {
			const arr1 = ['a', 'b', 'c'];
			const arr2 = ['a', 'b', 'c'];
			expect(arr1 === arr2).toStrictEqual(false);
		});
		it('one array', () => {
			const arr1 = ['a', 'b', 'c'];
			const arr2 = ['a', 'b', 'c'];
			expect(arr1 === arr2).toStrictEqual(false);
		});
	});
});
