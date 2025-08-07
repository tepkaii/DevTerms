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
  },
  {
    term: "npm",
    definition: "Node Package Manager - tool for managing JavaScript packages",
    category: "JavaScript",
  },
  {
    term: "axios",
    definition: "A promise-based HTTP client for making API requests",
    category: "JavaScript",
  },
  {
    term: "event loop",
    definition:
      "The mechanism that handles asynchronous operations in JavaScript",
    category: "JavaScript",
  },
  {
    term: "memoization",
    definition:
      "Caching the result of expensive function calls for performance",
    category: "JavaScript",
  },
  {
    term: "debounce",
    definition:
      "Delays execution until after a delay since the last time it was invoked",
    category: "JavaScript",
  },
  {
    term: "throttle",
    definition: "Limits how often a function can run over time",
    category: "JavaScript",
  },
  // New JavaScript Terms
  {
    term: "arrow function",
    definition:
      "A shorter syntax for writing functions in JavaScript using => operator",
    category: "JavaScript",
  },
  {
    term: "destructuring",
    definition:
      "A JavaScript expression that unpacks values from arrays or properties from objects",
    category: "JavaScript",
  },
  {
    term: "spread operator",
    definition:
      "Allows an iterable to expand in places where 0+ arguments are expected using ... syntax",
    category: "JavaScript",
  },
  {
    term: "rest parameters",
    definition:
      "Allows representing an indefinite number of arguments as an array using ... syntax",
    category: "JavaScript",
  },
  {
    term: "template literals",
    definition:
      "String literals allowing embedded expressions using backtick syntax",
    category: "JavaScript",
  },
  {
    term: "prototype",
    definition:
      "JavaScript objects inherit features from one another through the prototype chain",
    category: "JavaScript",
  },
  {
    term: "this binding",
    definition:
      "How the 'this' keyword is bound to different contexts in JavaScript functions",
    category: "JavaScript",
  },
  {
    term: "module",
    definition:
      "A way to organize code into separate files using import/export statements",
    category: "JavaScript",
  },
  {
    term: "babel",
    definition:
      "A JavaScript compiler that transforms modern JS code into backward-compatible versions",
    category: "JavaScript",
  },
  {
    term: "webpack",
    definition:
      "A module bundler that bundles JavaScript files and other assets for deployment",
    category: "JavaScript",
  },
  {
    term: "callback",
    definition:
      "A function passed as an argument to another function to be executed later",
    category: "JavaScript",
  },
  {
    term: "higher order function",
    definition:
      "A function that takes other functions as arguments or returns a function",
    category: "JavaScript",
  },
  {
    term: "iife",
    definition:
      "Immediately Invoked Function Expression - a function that runs as soon as it's defined",
    category: "JavaScript",
  },
  {
    term: "map",
    definition:
      "Array method that creates a new array with results of calling a function on every element",
    category: "JavaScript",
  },
  {
    term: "filter",
    definition:
      "Array method that creates a new array with elements that pass a test function",
    category: "JavaScript",
  },
  {
    term: "reduce",
    definition:
      "Array method that executes a reducer function on each element, resulting in single output value",
    category: "JavaScript",
  },
  {
    term: "foreach",
    definition:
      "Array method that executes a provided function once for each array element",
    category: "JavaScript",
  },
  {
    term: "getter",
    definition:
      "A method that gets the value of a property using the 'get' keyword",
    category: "JavaScript",
  },
  {
    term: "setter",
    definition:
      "A method that sets the value of a property using the 'set' keyword",
    category: "JavaScript",
  },
  {
    term: "proxy",
    definition:
      "Allows you to intercept and customize operations on objects like property lookup and assignment",
    category: "JavaScript",
  },
  {
    term: "reflect",
    definition:
      "Provides methods for interceptable JavaScript operations like property access and function calls",
    category: "JavaScript",
  },
  {
    term: "generator",
    definition:
      "A function that can be paused and resumed, yielding multiple values over time",
    category: "JavaScript",
  },
  {
    term: "iterator",
    definition:
      "An object that implements the iterator protocol with a next() method",
    category: "JavaScript",
  },
  {
    term: "symbol",
    definition:
      "A primitive data type used to create unique identifiers for object properties",
    category: "JavaScript",
  },
];
