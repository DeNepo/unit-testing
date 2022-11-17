'use strict';

/* Stepping Over

  There are two buttons for stepping in the debugger:
    "Step": an arrow pointing to the right
    "Step over next function call": an arrow curving over a dot

  "Step" will execute every line of code in your program

  "Step over ..." will skip the code inside your function

  Try stepping through this program with each button, how are they different?

*/

const excite = (text) => {
	return text + '!';
};

const excitedCow = excite('cow');
console.log(excitedCow);

console.log(excite('goat'));

const huh = excite('?');
console.log(huh);
