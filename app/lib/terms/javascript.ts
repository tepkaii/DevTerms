import { Term } from "../types";

// JavaScript Terms
export const javascriptTerms: Term[] = [
  {
    term: "closure",
    definition:
      "A function that has access to variables in its outer scope even after the outer function returns",
    category: "JavaScript",
    resources: [
      {
        id: "closure-1",
        title: "JavaScript Closures Explained - My Tutorial",
        url: "https://youtu.be/3a0I8ICR1Vg",
        type: "youtube",
        duration: "12:34",
      },
      {
        id: "closure-2",
        title: "JavaScript Closures - Fun Fun Function",
        url: "https://youtu.be/CQqwU2Ixu-U",
        type: "youtube",
        duration: "16:23",
      },
    ],
  },
  {
    term: "hoisting",
    definition:
      "JavaScript behavior where variable and function declarations are moved to the top of their scope",
    category: "JavaScript",
    resources: [
      {
        id: "hoisting-1",
        title: "Understanding Hoisting - My Deep Dive",
        url: "https://youtu.be/Fnlnw8uY6jo",
        type: "youtube",
      },
      {
        id: "hoisting-2",
        title: "JavaScript Hoisting Explained",
        url: "https://youtu.be/EvfRXyKa_GI",
        type: "youtube",
      },
    ],
  },
  {
    term: "async",
    definition:
      "Programming pattern that allows code to run without blocking execution",
    category: "JavaScript",
    resources: [
      {
        id: "async-1",
        title: "Async/Await Explained - My Tutorial",
        url: "https://youtu.be/V_Kr9OSfDeU",
        type: "youtube",
        description: "Master asynchronous JavaScript programming",
      },
      {
        id: "async-2",
        title: "JavaScript Promises and Async/Await",
        url: "https://youtu.be/PoRJizFvM7s",
        type: "youtube",
      },
    ],
  },
  {
    term: "promise",
    definition:
      "An object representing the eventual completion or failure of an async operation",
    category: "JavaScript",
    resources: [
      {
        id: "promise-1",
        title: "JavaScript Promises Tutorial",
        url: "https://youtu.be/DHvZLI7Db8E",
        type: "youtube",
        description: "Understanding promises from basics to advanced",
      },
      {
        id: "promise-2",
        title: "Promise.all, Promise.race, Promise.allSettled",
        url: "https://youtu.be/4p9eZtyLj8Y",
        type: "youtube",
      },
    ],
  },
  {
    term: "typescript",
    definition: "A superset of JavaScript that adds static typing",
    category: "JavaScript",
    resources: [
      {
        id: "ts-1",
        title: "TypeScript Crash Course - My Tutorial",
        url: "https://youtu.be/BwuLxPH8IDs",
        type: "youtube",
        description: "Learn TypeScript from beginner to advanced",
      },
    ],
  },
  {
    term: "json",
    definition:
      "JavaScript Object Notation - a lightweight format for storing and transporting data",
    category: "JavaScript",
    resources: [
      {
        id: "json-1",
        title: "JSON Tutorial",
        url: "https://youtu.be/iiADhChRriM",
        type: "youtube",
        description: "Working with JSON data in JavaScript",
      },
    ],
  },
  {
    term: "npm",
    definition: "Node Package Manager - tool for managing JavaScript packages",
    category: "JavaScript",
    resources: [
      {
        id: "npm-1",
        title: "NPM Tutorial for Beginners",
        url: "https://youtu.be/jHDhaSSKmB0",
        type: "youtube",
        description: "Package management with NPM",
      },
      {
        id: "npm-2",
        title: "NPM Scripts and Package.json",
        url: "https://youtu.be/hKzFe2getAI",
        type: "youtube",
      },
    ],
  },
  {
    term: "axios",
    definition: "A promise-based HTTP client for making API requests",
    category: "JavaScript",
    resources: [
      {
        id: "axios-1",
        title: "Axios HTTP Client Tutorial",
        url: "https://youtu.be/6LyagkoRWYA",
        type: "youtube",
        description: "Making HTTP requests with Axios",
      },
    ],
  },
  {
    term: "event loop",
    definition:
      "The mechanism that handles asynchronous operations in JavaScript",
    category: "JavaScript",
    resources: [
      {
        id: "event-loop-1",
        title: "JavaScript Event Loop Explained",
        url: "https://youtu.be/8aGhZQkoFbQ",
        type: "youtube",
        description: "Understanding the JavaScript event loop",
      },
      {
        id: "event-loop-2",
        title: "What the heck is the event loop anyway?",
        url: "https://youtu.be/cCOL7MC4Pl0",
        type: "youtube",
      },
    ],
  },
  {
    term: "memoization",
    definition:
      "Caching the result of expensive function calls for performance",
    category: "JavaScript",
    resources: [
      {
        id: "memoization-1",
        title: "Memoization in JavaScript",
        url: "https://youtu.be/WbwP4w6TpCk",
        type: "youtube",
        description: "Optimizing functions with memoization",
      },
    ],
  },
  {
    term: "debounce",
    definition:
      "Delays execution until after a delay since the last time it was invoked",
    category: "JavaScript",
    resources: [
      {
        id: "debounce-1",
        title: "Debounce and Throttle Tutorial",
        url: "https://youtu.be/cjIswDCKgu0",
        type: "youtube",
        description: "Implementing debounce for performance optimization",
      },
    ],
  },
  {
    term: "throttle",
    definition: "Limits how often a function can run over time",
    category: "JavaScript",
    resources: [
      {
        id: "throttle-1",
        title: "JavaScript Throttling Explained",
        url: "https://youtu.be/81NGEXAaa3Y",
        type: "youtube",
        description: "Rate limiting function execution with throttling",
      },
    ],
  },
  {
    term: "arrow function",
    definition:
      "A shorter syntax for writing functions in JavaScript using => operator",
    category: "JavaScript",
    resources: [
      {
        id: "arrow-function-1",
        title: "Arrow Functions Tutorial",
        url: "https://youtu.be/h33Srr5J9nY",
        type: "youtube",
        description: "Modern function syntax with arrow functions",
      },
    ],
  },
  {
    term: "destructuring",
    definition:
      "A JavaScript expression that unpacks values from arrays or properties from objects",
    category: "JavaScript",
    resources: [
      {
        id: "destructuring-1",
        title: "JavaScript Destructuring Tutorial",
        url: "https://youtu.be/NIq3qLaHCIs",
        type: "youtube",
        description: "Array and object destructuring in JavaScript",
      },
    ],
  },
  {
    term: "spread operator",
    definition:
      "Allows an iterable to expand in places where 0+ arguments are expected using ... syntax",
    category: "JavaScript",
    resources: [
      {
        id: "spread-1",
        title: "JavaScript Spread Operator Tutorial",
        url: "https://youtu.be/1INe_jCWq1Q",
        type: "youtube",
        description: "Using the spread operator effectively",
      },
    ],
  },
  {
    term: "rest parameters",
    definition:
      "Allows representing an indefinite number of arguments as an array using ... syntax",
    category: "JavaScript",
    resources: [
      {
        id: "rest-1",
        title: "Rest Parameters in JavaScript",
        url: "https://youtu.be/b5BZ-lW-bLA",
        type: "youtube",
        description: "Handling variable number of function arguments",
      },
    ],
  },
  {
    term: "template literals",
    definition:
      "String literals allowing embedded expressions using backtick syntax",
    category: "JavaScript",
    resources: [
      {
        id: "template-literals-1",
        title: "Template Literals Tutorial",
        url: "https://youtu.be/NgF9-pdTOrQ",
        type: "youtube",
        description: "Modern string formatting with template literals",
      },
    ],
  },
  {
    term: "prototype",
    definition:
      "JavaScript objects inherit features from one another through the prototype chain",
    category: "JavaScript",
    resources: [
      {
        id: "prototype-1",
        title: "JavaScript Prototypes Explained",
        url: "https://youtu.be/XskMWBXNbp0",
        type: "youtube",
        description: "Understanding prototypal inheritance",
      },
    ],
  },
  {
    term: "this binding",
    definition:
      "How the 'this' keyword is bound to different contexts in JavaScript functions",
    category: "JavaScript",
    resources: [
      {
        id: "this-1",
        title: "JavaScript 'this' Keyword Explained",
        url: "https://youtu.be/gvicrj31JOM",
        type: "youtube",
        description: "Mastering 'this' binding in different contexts",
      },
    ],
  },
  {
    term: "module",
    definition:
      "A way to organize code into separate files using import/export statements",
    category: "JavaScript",
    resources: [
      {
        id: "module-1",
        title: "JavaScript Modules Tutorial",
        url: "https://youtu.be/cRHQNNcYf6s",
        type: "youtube",
        description: "ES6 modules and code organization",
      },
    ],
  },
  {
    term: "babel",
    definition:
      "A JavaScript compiler that transforms modern JS code into backward-compatible versions",
    category: "JavaScript",
    resources: [
      {
        id: "babel-1",
        title: "Babel JavaScript Transpiler Tutorial",
        url: "https://youtu.be/yLrp3ll_sBo",
        type: "youtube",
        description: "Transpiling modern JavaScript with Babel",
      },
    ],
  },
  {
    term: "webpack",
    definition:
      "A module bundler that bundles JavaScript files and other assets for deployment",
    category: "JavaScript",
    resources: [
      {
        id: "webpack-js-1",
        title: "Webpack Tutorial for JavaScript",
        url: "https://youtu.be/MpGLUVbqoYQ",
        type: "youtube",
        description: "Module bundling with Webpack",
      },
    ],
  },
  {
    term: "callback",
    definition:
      "A function passed as an argument to another function to be executed later",
    category: "JavaScript",
    resources: [
      {
        id: "callback-1",
        title: "JavaScript Callbacks Tutorial",
        url: "https://youtu.be/cNjIUSDnb9k",
        type: "youtube",
        description: "Understanding callback functions",
      },
    ],
  },
  {
    term: "higher order function",
    definition:
      "A function that takes other functions as arguments or returns a function",
    category: "JavaScript",
    resources: [
      {
        id: "hof-1",
        title: "Higher Order Functions in JavaScript",
        url: "https://youtu.be/BMUiFMZr7vk",
        type: "youtube",
        description: "Functional programming with higher-order functions",
      },
    ],
  },
  {
    term: "iife",
    definition:
      "Immediately Invoked Function Expression - a function that runs as soon as it's defined",
    category: "JavaScript",
    resources: [
      {
        id: "iife-1",
        title: "IIFE in JavaScript Tutorial",
        url: "https://youtu.be/3cbiZV4H22c",
        type: "youtube",
        description: "Immediately invoked function expressions",
      },
    ],
  },
  {
    term: "map",
    definition:
      "Array method that creates a new array with results of calling a function on every element",
    category: "JavaScript",
    resources: [
      {
        id: "map-1",
        title: "JavaScript Array Map Method",
        url: "https://youtu.be/G3BS3sh3D8Q",
        type: "youtube",
        description: "Transforming arrays with map method",
      },
    ],
  },
  {
    term: "filter",
    definition:
      "Array method that creates a new array with elements that pass a test function",
    category: "JavaScript",
    resources: [
      {
        id: "filter-1",
        title: "JavaScript Array Filter Method",
        url: "https://youtu.be/4_iT6EGkQfk",
        type: "youtube",
        description: "Filtering arrays with the filter method",
      },
    ],
  },
  {
    term: "reduce",
    definition:
      "Array method that executes a reducer function on each element, resulting in single output value",
    category: "JavaScript",
    resources: [
      {
        id: "reduce-1",
        title: "JavaScript Array Reduce Method",
        url: "https://youtu.be/g1C40tDP0Bk",
        type: "youtube",
        description: "Reducing arrays to single values",
      },
    ],
  },
  {
    term: "foreach",
    definition:
      "Array method that executes a provided function once for each array element",
    category: "JavaScript",
    resources: [
      {
        id: "foreach-1",
        title: "JavaScript forEach Method",
        url: "https://youtu.be/159EAISAxwg",
        type: "youtube",
        description: "Iterating arrays with forEach",
      },
    ],
  },
  {
    term: "getter",
    definition:
      "A method that gets the value of a property using the 'get' keyword",
    category: "JavaScript",
    resources: [
      {
        id: "getter-1",
        title: "JavaScript Getters and Setters",
        url: "https://youtu.be/_2C_eqN-SX4",
        type: "youtube",
        description: "Property accessors with getters and setters",
      },
    ],
  },
  {
    term: "setter",
    definition:
      "A method that sets the value of a property using the 'set' keyword",
    category: "JavaScript",
    resources: [
      {
        id: "setter-1",
        title: "JavaScript Setters Tutorial",
        url: "https://youtu.be/bl98dm7vJt0",
        type: "youtube",
        description: "Property mutation with setter methods",
      },
    ],
  },
  {
    term: "proxy",
    definition:
      "Allows you to intercept and customize operations on objects like property lookup and assignment",
    category: "JavaScript",
    resources: [
      {
        id: "proxy-1",
        title: "JavaScript Proxy Tutorial",
        url: "https://youtu.be/sClk6aB_CPk",
        type: "youtube",
        description: "Intercepting object operations with Proxy",
      },
    ],
  },
  {
    term: "reflect",
    definition:
      "Provides methods for interceptable JavaScript operations like property access and function calls",
    category: "JavaScript",
    resources: [
      {
        id: "reflect-1",
        title: "JavaScript Reflect API Tutorial",
        url: "https://youtu.be/opf7xX-whso",
        type: "youtube",
        description: "Meta-programming with the Reflect API",
      },
    ],
  },
  {
    term: "generator",
    definition:
      "A function that can be paused and resumed, yielding multiple values over time",
    category: "JavaScript",
    resources: [
      {
        id: "generator-1",
        title: "JavaScript Generators Tutorial",
        url: "https://youtu.be/ategZqxHkz4",
        type: "youtube",
        description: "Creating iterators with generator functions",
      },
    ],
  },
  {
    term: "iterator",
    definition:
      "An object that implements the iterator protocol with a next() method",
    category: "JavaScript",
    resources: [
      {
        id: "iterator-1",
        title: "JavaScript Iterators Tutorial",
        url: "https://youtu.be/W4brAobC2Hc",
        type: "youtube",
        description: "Creating custom iterators in JavaScript",
      },
    ],
  },
  {
    term: "symbol",
    definition:
      "A primitive data type used to create unique identifiers for object properties",
    category: "JavaScript",
    resources: [
      {
        id: "symbol-1",
        title: "JavaScript Symbols Tutorial",
        url: "https://youtu.be/4J5hnOCj69w",
        type: "youtube",
        description: "Understanding symbols and their use cases",
      },
    ],
  },
  // Additional New JavaScript Terms
  {
    term: "var let const",
    definition:
      "Different ways to declare variables in JavaScript with varying scope and mutability",
    category: "JavaScript",
    resources: [
      {
        id: "var-let-const-1",
        title: "var, let, and const - What's the Difference?",
        url: "https://youtu.be/9WIJQDvt4Us",
        type: "youtube",
        description: "Understanding variable declarations in JavaScript",
      },
    ],
  },
  {
    term: "scope",
    definition:
      "The accessibility of variables, functions, and objects in code during runtime",
    category: "JavaScript",
    resources: [
      {
        id: "scope-1",
        title: "JavaScript Scope Tutorial",
        url: "https://youtu.be/SBwoFkRjZvE",
        type: "youtube",
        description: "Understanding global, function, and block scope",
      },
    ],
  },
  {
    term: "bind call apply",
    definition:
      "Methods to explicitly set the 'this' context when calling functions",
    category: "JavaScript",
    resources: [
      {
        id: "bind-call-apply-1",
        title: "bind, call, and apply in JavaScript",
        url: "https://youtu.be/c0mLRpw-9rI",
        type: "youtube",
        description: "Controlling function context with bind, call, and apply",
      },
    ],
  },
  {
    term: "currying",
    definition:
      "Technique of converting a function with multiple arguments into nested functions",
    category: "JavaScript",
    resources: [
      {
        id: "currying-1",
        title: "JavaScript Currying Tutorial",
        url: "https://youtu.be/iZLP4qOwY8I",
        type: "youtube",
        description: "Function currying and partial application",
      },
    ],
  },
  {
    term: "recursion",
    definition:
      "A programming technique where a function calls itself to solve smaller subproblems",
    category: "JavaScript",
    resources: [
      {
        id: "recursion-1",
        title: "JavaScript Recursion Tutorial",
        url: "https://youtu.be/6oDQaB2one8",
        type: "youtube",
        description: "Understanding recursive functions",
      },
    ],
  },
  {
    term: "classes",
    definition:
      "ES6 syntactic sugar for creating constructor functions and prototypes",
    category: "JavaScript",
    resources: [
      {
        id: "classes-1",
        title: "JavaScript Classes Tutorial",
        url: "https://youtu.be/2ZphE5HcQPQ",
        type: "youtube",
        description: "Object-oriented programming with JavaScript classes",
      },
    ],
  },
  {
    term: "inheritance",
    definition:
      "Mechanism where objects can inherit properties and methods from other objects",
    category: "JavaScript",
    resources: [
      {
        id: "inheritance-1",
        title: "JavaScript Inheritance Tutorial",
        url: "https://youtu.be/MfxBfRD0FVU",
        type: "youtube",
        description: "Class inheritance and extends keyword",
      },
    ],
  },
  {
    term: "polymorphism",
    definition:
      "Ability of objects of different types to be treated as instances of the same type",
    category: "JavaScript",
    resources: [
      {
        id: "polymorphism-1",
        title: "JavaScript Polymorphism Explained",
        url: "https://youtu.be/8a5BkwuZRK0",
        type: "youtube",
        description: "Polymorphism concepts in JavaScript",
      },
    ],
  },
  {
    term: "encapsulation",
    definition:
      "Bundling data and methods together and restricting access to internal details",
    category: "JavaScript",
    resources: [
      {
        id: "encapsulation-1",
        title: "JavaScript Encapsulation Tutorial",
        url: "https://youtu.be/rHiSsgFRgEY",
        type: "youtube",
        description: "Data encapsulation and privacy in JavaScript",
      },
    ],
  },
  {
    term: "strict mode",
    definition:
      "A way to opt into a restricted variant of JavaScript with stricter error handling",
    category: "JavaScript",
    resources: [
      {
        id: "strict-mode-1",
        title: "JavaScript Strict Mode Tutorial",
        url: "https://youtu.be/uqUYNqZx0qY",
        type: "youtube",
        description: "Benefits and usage of strict mode",
      },
    ],
  },
  {
    term: "try catch",
    definition:
      "Error handling mechanism to catch and handle runtime errors gracefully",
    category: "JavaScript",
    resources: [
      {
        id: "try-catch-1",
        title: "JavaScript Error Handling Tutorial",
        url: "https://youtu.be/cFTFtuEQ-10",
        type: "youtube",
        description: "Handling errors with try-catch blocks",
      },
    ],
  },
  {
    term: "regular expressions",
    definition: "Patterns used to match character combinations in strings",
    category: "JavaScript",
    resources: [
      {
        id: "regex-1",
        title: "JavaScript Regular Expressions Tutorial",
        url: "https://youtu.be/rhzKDrUiJVk",
        type: "youtube",
        description: "Pattern matching with regular expressions",
      },
    ],
  },
  {
    term: "fetch api",
    definition:
      "Modern web API for making HTTP requests, replacing XMLHttpRequest",
    category: "JavaScript",
    resources: [
      {
        id: "fetch-1",
        title: "JavaScript Fetch API Tutorial",
        url: "https://youtu.be/cuEtnrL9-H0",
        type: "youtube",
        description: "Making HTTP requests with Fetch API",
      },
    ],
  },
  {
    term: "local storage",
    definition:
      "Web storage API that allows storing data locally within the user's browser",
    category: "JavaScript",
    resources: [
      {
        id: "localstorage-1",
        title: "JavaScript localStorage Tutorial",
        url: "https://youtu.be/GihQAC1I39Q",
        type: "youtube",
        description: "Browser storage with localStorage API",
      },
    ],
  },
  {
    term: "session storage",
    definition:
      "Web storage API that stores data for the duration of the page session",
    category: "JavaScript",
    resources: [
      {
        id: "sessionstorage-1",
        title: "sessionStorage vs localStorage",
        url: "https://youtu.be/klLMeL7I4O0",
        type: "youtube",
        description: "Browser storage options comparison",
      },
    ],
  },
  {
    term: "cookies",
    definition:
      "Small pieces of data stored by the browser and sent with HTTP requests",
    category: "JavaScript",
    resources: [
      {
        id: "cookies-1",
        title: "JavaScript Cookies Tutorial",
        url: "https://youtu.be/sovAIX4doOE",
        type: "youtube",
        description: "Working with browser cookies",
      },
    ],
  },
  {
    term: "web api",
    definition:
      "Browser-provided APIs for accessing device features and browser functionality",
    category: "JavaScript",
    resources: [
      {
        id: "web-api-1",
        title: "JavaScript Web APIs Tutorial",
        url: "https://youtu.be/2JYT5f2isg4",
        type: "youtube",
        description: "Using browser Web APIs effectively",
      },
    ],
  },
  {
    term: "dom manipulation",
    definition:
      "Dynamically changing the structure, style, or content of web pages",
    category: "JavaScript",
    resources: [
      {
        id: "dom-manipulation-1",
        title: "JavaScript DOM Manipulation Tutorial",
        url: "https://youtu.be/y17RuWkWdn8",
        type: "youtube",
        description: "Dynamically modifying web pages with JavaScript",
      },
    ],
  },
  {
    term: "event delegation",
    definition:
      "Technique of handling events at a parent level instead of individual child elements",
    category: "JavaScript",
    resources: [
      {
        id: "event-delegation-1",
        title: "JavaScript Event Delegation Tutorial",
        url: "https://youtu.be/pKzf80F3O0U",
        type: "youtube",
        description: "Efficient event handling with delegation",
      },
    ],
  },
  {
    term: "functional programming",
    definition:
      "Programming paradigm that treats computation as evaluation of mathematical functions",
    category: "JavaScript",
    resources: [
      {
        id: "functional-1",
        title: "Functional Programming in JavaScript",
        url: "https://youtu.be/BMUiFMZr7vk",
        type: "youtube",
        description: "FP concepts: pure functions, immutability, composition",
      },
    ],
  },
  {
    term: "immutability",
    definition:
      "The concept that objects should not be modified after creation",
    category: "JavaScript",
    resources: [
      {
        id: "immutability-1",
        title: "JavaScript Immutability Tutorial",
        url: "https://youtu.be/hHhUXefAjQg",
        type: "youtube",
        description: "Working with immutable data structures",
      },
    ],
  },
  {
    term: "pure functions",
    definition:
      "Functions that return the same output for the same input and have no side effects",
    category: "JavaScript",
    resources: [
      {
        id: "pure-functions-1",
        title: "Pure Functions in JavaScript",
        url: "https://youtu.be/AHbRVJzpB54",
        type: "youtube",
        description: "Writing predictable functions without side effects",
      },
    ],
  },
  {
    term: "composition",
    definition:
      "Combining simple functions to create more complex functionality",
    category: "JavaScript",
    resources: [
      {
        id: "composition-1",
        title: "Function Composition in JavaScript",
        url: "https://youtu.be/aMo-ziX95eU",
        type: "youtube",
        description: "Building complex logic through function composition",
      },
    ],
  },
  {
    term: "design patterns",
    definition:
      "Reusable solutions to commonly occurring problems in software design",
    category: "JavaScript",
    resources: [
      {
        id: "design-patterns-1",
        title: "JavaScript Design Patterns",
        url: "https://youtu.be/tv-_1er1mWI",
        type: "youtube",
        description: "Common design patterns in JavaScript development",
      },
    ],
  },
  {
    term: "observer pattern",
    definition:
      "Design pattern where objects maintain a list of dependents and notify them of changes",
    category: "JavaScript",
    resources: [
      {
        id: "observer-1",
        title: "Observer Pattern in JavaScript",
        url: "https://youtu.be/_BpmfnqjgzQ",
        type: "youtube",
        description:
          "Implementing the observer pattern for reactive programming",
      },
    ],
  },
  {
    term: "module pattern",
    definition:
      "Design pattern that provides encapsulation and organization for JavaScript code",
    category: "JavaScript",
    resources: [
      {
        id: "module-pattern-1",
        title: "JavaScript Module Pattern Tutorial",
        url: "https://youtu.be/HkFlM73G-hk",
        type: "youtube",
        description: "Organizing code with the module pattern",
      },
    ],
  },
];