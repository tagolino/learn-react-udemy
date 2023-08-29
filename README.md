# Learning React from Udemy

## Resource reference

TODO

## Table of Contents

- [Section 1](#section-1)
- TODO

# Section 1

9. Creating React projects: Browser-based vs Local development
   - Local setup
     - Create React projects locally
     - Requires installation of tools and creation of files in your local
     - Use of code editor locally
   - Browser-based setup
     - Create remote React projects view [CodeSandbox](https://codesandbox.io/)
     - No software installed
     - No files created
     - Use a pre-configured code editor
10. Creating React Projects Locally
    - Need to download [Node.js](https://nodejs.org/en)
      - NPM commands
        - `npm install`
        - `npm start`
    - VS Code
      - Formatter: Prettier
11. Using CodeSandbox for Reacy Development (no local setup required!)
    - To create new project in CodeSandbox
      - Just type react.new in your browser
12. Module resources

# Section 2 - JavaScript refresher

13. Module Introduction
14. Starting Project
15. Adding JavaScript to a page and how React projects differ
    - Between `script` tags: `<script></script>`
    - "defer" attributes
      - execute JS tags after HTML tags are loaded
      - can also use `type="module"`
      - take note that in React, script tags should not be used because of "build process" in React.
16. React projects use a build process
    - this means that code being written is transformed
      - like compiling?
      - react-scripts library
17. "import" and "export"
    - `export`
    - `default`
    - `let`
18. Revisiting variables and values
    - `let`, `const` and `var`
19. Revisiting operators
    - `===`, `+`
20. Revisiting functions and parameters
    - defining: `function greet() {console.log("Hello!")};`
    - calling: `greet();`

##### Coding exercise 1: exercise: working with functions

21. Arrow functions
    - `() => {};`
    - If `=>` is ommited `function` should not be used.
22. More on the arrow function syntax
    - if arrow functions takes only 1 parameter you may omit parenthesis
    - instead of `(userName) => { ... }` this could be written as `userName => { ... }`
    - but if no parameters or more than 1, parenthesis should be present.
    - if arrow function don't have other logic than return `{}` can be omitted.
    - instead of `number => { return number * 3};` this could be `number => return number * 3;`
    - if returning a JS object to be valid it could be written like this `number => ({ age: number });` which `{ age: number }` is the JS object that will be returned.
23. Revisiting objects and classes

    - sample of object: `const user = { name: 'Max', age: 34 };`
    - to access: `user.name`
    - functions can also be in the objects
    - example: `const user = { name: 'Max', age: 34, greet() { console.log("Hi!") } };`
    - to access: `user.greet();`
    - Class or "blueprint"
    - ```
      class User {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }

        greet() {
          console.log("Hi!");
        }
      }

      const user1 = new User("Manuel", 35);
      console.log(user1);  // User {name: "Manuel", age: 35, constructor: object}
      user1.greet();  // Hi!
      ```

24. Arrays and array methods like map()
    - `[ ... ]`
    - example: `const hobbies = ["Sports", "Cooking", "Reading"]`
    - to access: `hobbies[0]` which `0` is the index
    - there are different methods that can be use in `array`
      - check: `.findIndex()` and `.map()`

##### Coding exercise 2: exercise: array methods

- Exercise: Array Methods
  - Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.
  - In the newly returned array, every object must have a val key and the input array's number as a value.
  - For example, for the provided input `[1, 2, 3]` the `transformToObjects([1, 2, 3])` function should return `[{val: 1}, {val: 2}, {val: 3}]`.
- ```
  function transformToObjects(numberArray) {
      // Todo: Add your logic
      // should return an array of objects
      return numberArray.map(number => ({ val: number }));
  }
  ```

25. Destructuring

- `const [firstName, lastName] = ["Max", "X"];`
- `const { name, age } = { name: "Max", age: 35 };`

26. Destructuting in function parameter lists
27. The spread operator

- `const mergedHobbies = [...hobbies, ...newHobbies];`

28. Revisiting control structures

- `for (const hobby of hobbies) {console.log(hobby)};`

29. Manipulating the DOM - not the React

- DOM is something like this:
- `const list = document.querySelector("ul"); list.remove();`

30. Using functions as values

- ```
  function handleTimeout() {
    console.log("Time out!");
  }

  const handleTimeout2 = () => {
    console.log("Time out ... again!");
  };

  setTimeout(handleTimeout, 2000);
  setTimeout(handleTimeout2, 3000);
  setTimeout(() => {
    console.log("More timing out ...");
  }, 4000);

  function greeter(greetFn) {
    greetFn();
  };

  greeter(() => console.log("Hi!"));
  ```

31. Defining functions inside of functions

- ```
  function init() {
    function greet() {
      console.log("Hi!);
    }

    greet();  // OK
  }

  greet();  // Not OK. Cannot be called outside the scope of main function
  init();  // OK
  ```

32. Reference vs primitive values

- array and objects is a reference values
- string, int etc is primitive values

33. Next-Gen JavaScript - summary
34. JS array functions

# Section 3 - React basics and working with components

36. Module Introduction
37. What are components/ And why is React all about them?

- Reusability

38. React code is written in a "declarative way"!

- Declarative approach (desired target)
- without using DOM

39. Creating anew React project.
40. The starting project
41. Analyzing a standard React project
42. Introducing JSX
43. How React works

##### Coding exercise 3: exercise: working with JSX code

44. Building a first custom components

##### Coding exercise 4: exercise: building a first component

45. Writing more complex JSX code
46. Adding basic CSS styling

- CSS files should be created in the same location where JS should use it.

47. Outputting dynamic data and working with expression in JSX
48. Passing data via "props"

- `props`

##### Coding exercise 5: exercise: passing data via "props"

49. Alternative ways of passing and receiving / handling "props"

- can also use destructuring `function ExpenseItem({ title, amount, date }) { ... };`

50. Adding "normal" Javascript logic to components
51. Splitting components into multiple components

##### Assingment 1: Time to practice: React and Component basics

52. The concept of "Composition" ("children props")

- discussed avoiding code duplication.
- take note of "composition"

##### Coding exercise 6: exercise: Component composition

53. A first summary

- React code syntax and JSX
- Working with components
  - Splitting code using components
  - in the end, what will be displayed in the UI is the same
- Working with data

54. A closer look at JSX

- Today, no need to `import React from "react";` in each file.

55. Organizing component files
56. An alternative function syntax

- instead of `function functionName () {...};` we can do `const functionName = () => { ... };`
- this is just a JavaScript thing not a React specific

##### Quiz 1: Learning check: React basics, components, props and JSX

# Section 4 - Time to practice: component basics

58. Module introduction
59. The starting project and your tasks
60. Exercise hints
61. Outputting key concepts data
62. Identifying possible components
63. Creating and using a custom component

- Should've seperate components for header

64. Outsourcing concept items into a reusable component

# Section 5 - React state and working with events

67. Listening to events and working with event handlers

##### Exercise 7: Exercise: Listening to events

68.

# Section 6 - Rendering lists and condition content

86. Redering List of data
87. Using Stateful Lists
88. Understanding "keys"
89. Outputting conditional content
90. Adding Conditional Return Statements
91. Adding a Chart
92. Adding Dynamic Style
