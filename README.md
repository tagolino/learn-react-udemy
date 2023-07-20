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
1.   Destructuring
2.   Destructuting in function parameter lists
3.   The spread operator
4.   Revisiting control structures
5.   Manipulating the DOM - not the React
6.   Using functions as values
7.   Defining functions inside of functions
8.   Reference vs primitive values
9.   Next-Gen JavaScript - summary
10.  JS array functions
