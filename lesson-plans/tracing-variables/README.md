# Tracing Variables: Computer Empathy

Until you learn how to _trace_ a program, code can feel like a mystery. After
you've learned how to trace, code can still be tricky to understand but at least
there is no more mystery.

A program is just a series of instructions. If you follow the instructions
_exactly_ like the computer would, you are actually running the program by hand!
(just a lot slower.) There is no difference in theory between you following the
code's instructions and a computer following the same instructions.

So when you practice tracing think of it as building your _computer empathy_:
understanding what it's like to be the computer as it runs your program. If the
first rule in design is "know your user", then one of the first rule in coding
should be "know your computer". After all, the computer is one of your code's
users!

## Learning Objectives

- 🐣 **Tracing Variables**: You can follow a program's instructions like the
  computer does, filling out a _trace table_ and checking your work with the
  [trace] button.

---

## Predict, not Explain

So what does it mean to "know JavaScript"? How do you know when you've
understood some code? When you can **predict** _exactly_ what will happen at
each step of execution!

Explaining a program in plain english is helpful but it's easy to be a little
bit wrong and not know it. When you focus on _predicting_ what happens at each
step and you check your predictions with a trace or JS Tutor, then you really
know if you understood.

This approach is also helpful because not only will you know if you're right,
but if you're wrong the computer will tell you the right answer! Then you know
exactly which line you didn't understand, and you know what to study next.

---

## Trace Tables

Trace tables have been around as long as computer programming (probably). The
purpose of a trace table is to help you run the code in your head, keeping track
of all the variables in your program by hand. This is also called a _dry run_ or
a _desk check_.

The [table] button makes a trace table you can use to be the computer and to go
step by step through the program, recording each time a variable is declared,
read, or assigned. When you use the steps table you can check your work by
pressing `trace` button and comparing your table to the console output.

Don't worry if this is challenging, you'll have lots of opportunity to practice
tracing in this module.

---

## More Ways to Trace

There are many techniques for tracing a program, each one has some pros and
cons. What matters most at this point is that you try them all find the one that
helps you most:

- **The `?variables` lens**: Helpful to find your way around the code before
  moving on to the dynamic tracing techniques. This lens will help you find all
  the variables and how they are used in the code.
- **JS Tutor**: This website visualizes how program memory works. You can step
  forwards and backwards through the program one statement at a time, seeing how
  each instruction interacts with memory. Studying in this site has two separate
  steps, just like with a real JS program:
  1. Write code in the editor
  2. Run the code and step tep through it in the visualization page
- **The "trace" button**: When you click this button it will run your code and
  log every step of execution to the console. Compared to JS Tutor the "trace"
  button will step through your program in more detail (logging every operator),
  but will not have a nice visualization of memory.
- **Trace Tables ("tables" button)**: This is a way to manually trace a program,
  writing down each time a variable is used so you can understand the program's
  dynamic behavior. You can check your trace tables by comparing them to the
  console output from the "trace" button.
- **Learn With Trace**: Like JS Tutor, but with different visualizations.
- **JS Tutor Live**: This is like JS Tutor, but with only one page. You edit the
  code and step through it on the same page. As you change the code the
  visualization will update in real time. This is helpful for quicker studying
  but is not how a real JS program works.
- **The `?highlight` lens**: This allows you to draw on the code, tracing the
  program's execution with different colors. This technique works very well for
  group study. (programs in this folder will open with `?highlight` by default)
- **🐔 The Debugger**: Built into your browser is a great tool for stepping
  through your programs and understanding every detail of execution. If this is
  too much information at first then you can leave it for now, you'll cover this
  in depth with the Debugging module.

So that's a lot of info, but how can you know when you've understood a program
and are ready to study the next? It's quite simple actually: can you correctly
fill out a trace table without looking at the console output?

Trace tables are such a great tool for study and self-assessment that there's a
whole section about them ...

---

## More Practice

Play [compute-it](http://compute-it.toxicode.fr/) through level 15
