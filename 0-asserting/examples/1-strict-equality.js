'use strict';

console.log('-- begin --');

// ===, this operator will always evaluate to a boolean
//  true: if the values are the same
//  false: if the values are different

console.log('-- true comparisons --');

console.log('hello' === 'hello');

console.log('' === '');

console.log('404' === '404');

console.log('-- false comparisons --');

console.log('Hello' === 'hello');

console.log('4' === 'four');
console.log('4' === 4);

console.log(false === 'false');
console.log('true' === true);

console.log('good bye' === 'good bye.');

console.log('-- comparisons evaluate to a boolean value --');

console.log(typeof 'hello' === 'hello');

console.log(typeof 'hello' === 'Hello');

console.log('-- end --');
