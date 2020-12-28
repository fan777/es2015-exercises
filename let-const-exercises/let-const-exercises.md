# ES5 Global Constants

var PI = 3.14;  
PI = 42; // stop me from doing this!

# ES2015 Global Constants

const PI = 3.14;  
PI = 42 // ERROR

# Quiz

What is difference between var and let?

- var is old method of declaring variable.  If declared outside a function, is global scoped.  If declared within function, then function scoped.  It can be reassigned and redeclared at any point.
- let is new method of declaring variable.  It is block scoped (scoped within curly braces).  It cannot be redeclared.  It is also not hoisted.

What is difference between var and const?

- const is like let, block scoped, cannot be redeclared, cannot be reassigned, cannot be hoisted.

What is difference between let and const?

- Nearly identical however const cannot be reassigned, meaning value cannot change (primitive value cannot change, reference cannot change).

What is hoisting?

- var variables are created regardless of where they are declared however initialization occurs in original location.
function declarations are also hoisted before defined in codebase
