# Unit Testing

This repository is an introduction to unit testing and covers some of the JS
basics necessary for solving code challenges:

- Variables and program state
- Functions and the Callstack
- Reference vs. Value and Side Effects

These exercises assumes you already have a basic understanding of loops,
conditionals, arrays and operators in JS. Below are the only topics it will
cover in depth:

- Assertion testing with `console.assert`
- Variables
  - declaring, initializing, reading & assigning
  - `let` vs. `const`
- Functions (`() =>` or `function`)
  - declaring
  - calling
  - defining parameters
  - passing arguments
  - returning from the function
  - using return values
  - scope & the callstack
- Documenting functions with JSDoc
- Unit Testing syntax:
  - `describe('a suite of tests', () => { ... })`
  - `it('a unit test', () => { ... })`
  - `expect(actualValue).toStrictEqual(expectedValue)`
- Importing and Exporting with ES Modules
  - `import { name } from './path/to/file.js'`
  - `export const name = () => ...` or `export function name() { ... }`
- Reference vs. Value (arrays & objects)
- Side-Effects

---

## Study Tips

Reading and exploring existing code is often the fastest way to learn
programming. Sure, it's important to write a lot of code, get stuck, fix your
problems, and build cool things. But how can you expect to write great code if
you've never seen any before?

Learning to run, explain, and modify existing code is a crucial skill to learn
early in your programming life. Besides being an effective learning strategy,
this is also what you'll spend most of your time doing as a programmer.

- Don't rush, understand.
- Study the examples! Understanding and experimenting with working code is
- It's better to study slowly and learn from your mistakes than to code quickly
  and not understand what you wrote.
- Write lots of comments in the examples and exercises. The code in this
  repository is yours to study, modify and re-use in projects.
- Practice
  [Pair Programming](https://home.hackyourfuture.be/students/study-tips/pair-programming):
  two people, one computer.

### Read, Modify, Create

Think of these three steps in your learning each time you encounter a new skill
or language feature in programming. Even experienced developers go through these
steps when learning new technologies!

1. **Read**: Learn to step through, predict, and understand code that other
   people wrote.
2. **Modify**: Learn to change the behavior of other people's code with small
   modifications.
3. **Create**: Learn to write your own code from an empty page.

Don't worry about making to _Create_ as fast as possible. The more time you
spend learning to _Read_ and _Modify_, the better you will master _Create_.

### Hashtags

There's so many examples and exercises in this repository, it's easy to forget
of what you still need to finish or what you want to review again. Luckily
VSCode is really good at searching through folders of code.

You can write hashtags in your comments while you're studying, then search for
those hashtags later so you don't miss anything. Here's some ideas:

- `// #todo, still a few blanks left` - search for `#todo` in Study Lenses or
  VScode to find all the exercises you still need to study
- `// #review, coercion is confusing this again next week` - search for
  `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

### Read the code out loud

Learning to read your code aloud and to pronounce the strange syntax in
JavaScript is _super important_! Practice alone, practice with a friend, record
yourself and play it back. When you watch video tutorials pay close attention
and practice repeating how the teacher pronounces their code.

- Is new vocabulary you don't understand?
- What JS syntax do you recognize?
- What syntax is new to you?
- How should you pronounce the code?

This might not seem interesting at first, but reading each line of code out loud
will help you pay attention to details you might miss otherwise.

- [Why this is so important](https://www.youtube.com/watch?v=g1ib43q3uXQ&feature=youtu.be&t=1209)
- [ASCII Pronunciation Rules for Programmers](https://blog.codinghorror.com/ascii-pronunciation-rules-for-programmers/)
- [JavaScript Glossary](https://www.codecademy.com/articles/glossary-javascript)
- [Coding Without Comments](https://blog.codinghorror.com/coding-without-comments/)

### Predict what will happen

> _before running the code_

- Will there be an error? What kind of error? On which line?
- What values will be in memory at the beginning of the script? At the middle?
  At the end?
- Which line of code will execute first? second? third? ... last?
- Which test cases will pass, and which will fail? Why?

### Run the code and explain

> _without stepping through_

- Was there an error? What kind of error? Why?
- Which test cases passed, and which failed? Why?
- What values were logged to the console? Why those values?
- What can you learn about program memory from the output?
- What can you learn about the order of execution from the program output?

### Visualize program memory

> Browser Debugger, JS Tutor

Step through line by line and take turns explaining every other step:

1. Which line executed before the current one? What did that line do?
2. What does the current line of code change in program memory?
3. Which line of code will execute next? What will that line do?
