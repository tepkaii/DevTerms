// terms.ts

import type { Term } from "./types";



// JavaScript Terms
const javascriptTerms: Term[] = [
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

// React Terms
const reactTerms: Term[] = [
  {
    term: "virtual dom",
    definition:
      "A programming concept where a virtual representation of the UI is kept in memory",
    category: "React",
    resources: [
      {
        id: "vdom-1",
        title: "Virtual DOM Explained - My React Series",
        url: "https://youtu.be/BYbgopx44vo",
        type: "youtube",
      },
      {
        id: "vdom-2",
        title: "React Virtual DOM Tutorial",
        url: "https://youtu.be/jwRAdGLUarw",
        type: "youtube",
      },
    ],
  },
  {
    term: "state",
    definition:
      "The handling of data that changes over time in a user interface",
    category: "React",
    resources: [
      {
        id: "state-1",
        title: "React State Management - My Complete Guide",
        url: "https://youtu.be/35lXWvCuM8o",
        type: "youtube",
      },
      {
        id: "state-2",
        title: "useState Hook Explained",
        url: "https://youtu.be/O6P86uwfdR0",
        type: "youtube",
      },
    ],
  },
  {
    term: "component",
    definition:
      "A reusable piece of UI that encapsulates its own logic and styling",
    category: "React",
    resources: [
      {
        id: "component-1",
        title: "React Components Masterclass - My Series",
        url: "https://youtu.be/Tn6-PIqc4OM",
        type: "youtube",
        description: "Everything about React components",
      },
    ],
  },
  {
    term: "jsx",
    definition:
      "A syntax extension that allows writing HTML-like code in JavaScript",
    category: "React",
    resources: [
      {
        id: "jsx-1",
        title: "JSX Deep Dive - My React Basics",
        url: "https://youtu.be/7fPXI_MnBOY",
        type: "youtube",
        description: "Understanding JSX syntax and best practices",
      },
    ],
  },
  {
    term: "tsx",
    definition: "JSX with TypeScript support for type-safe React components",
    category: "React",
  },
  {
    term: "hooks",
    definition:
      "Functions that let you use state and lifecycle features in functional React components",
    category: "React",
    resources: [
      {
        id: "hooks-1",
        title: "React Hooks Complete Guide - My Series",
        url: "https://youtu.be/TNhaISOUy6Q",
        type: "youtube",
        description: "Complete guide to all React hooks",
      },
    ],
  },
  {
    term: "props",
    definition: "Inputs passed to React components to customize their behavior",
    category: "React",
  },
  {
    term: "react query",
    definition: "A data-fetching library for React that manages server state",
    category: "React",
  },
  {
    term: "context",
    definition:
      "React feature to pass data through the component tree without prop drilling",
    category: "React",
  },
  {
    term: "lifecycle",
    definition:
      "The different stages in a component's existence in frameworks like React",
    category: "React",
  },
  {
    term: "hydration",
    definition:
      "The process of attaching event listeners to static HTML rendered on the server",
    category: "React",
  },
  {
    term: "ref",
    definition: "A way to access DOM nodes or React elements directly",
    category: "React",
  },
  // New React Terms
  {
    term: "useeffect",
    definition:
      "React hook that lets you perform side effects in functional components",
    category: "React",
  },
  {
    term: "usestate",
    definition:
      "React hook that lets you add state to functional components",
    category: "React",
  },
  {
    term: "usereducer",
    definition:
      "React hook for managing complex state logic through a reducer function",
    category: "React",
  },
  {
    term: "usecallback",
    definition:
      "React hook that returns a memoized callback function to optimize performance",
    category: "React",
  },
  {
    term: "usememo",
    definition:
      "React hook that memoizes expensive calculations to optimize performance",
    category: "React",
  },
  {
    term: "usecontext",
    definition:
      "React hook that lets you subscribe to React context without nesting",
    category: "React",
  },
  {
    term: "useref",
    definition:
      "React hook that returns a mutable ref object with a .current property",
    category: "React",
  },
  {
    term: "custom hook",
    definition:
      "A JavaScript function that starts with 'use' and calls other hooks",
    category: "React",
  },
  {
    term: "react router",
    definition:
      "A library for handling navigation and routing in React applications",
    category: "React",
  },
  {
    term: "higher order component",
    definition:
      "A function that takes a component and returns a new component with enhanced functionality",
    category: "React",
  },
  {
    term: "render prop",
    definition:
      "A technique for sharing code between components using a prop whose value is a function",
    category: "React",
  },
  {
    term: "controlled component",
    definition:
      "A component whose form data is handled by React state",
    category: "React",
  },
  {
    term: "uncontrolled component",
    definition:
      "A component that maintains its own internal state instead of using React state",
    category: "React",
  },
  {
    term: "key prop",
    definition:
      "A special attribute that helps React identify which items have changed in lists",
    category: "React",
  },
  {
    term: "fragment",
    definition:
      "A way to group multiple elements without adding extra nodes to the DOM",
    category: "React",
  },
  {
    term: "portals",
    definition:
      "A way to render children into a DOM node outside of the parent component's hierarchy",
    category: "React",
  },
  {
    term: "error boundary",
    definition:
      "React components that catch JavaScript errors in their child component tree",
    category: "React",
  },
  {
    term: "suspense",
    definition:
      "A React component that lets you display fallback content while waiting for async operations",
    category: "React",
  },
  {
    term: "lazy loading",
    definition:
      "A technique to defer loading of components until they are actually needed",
    category: "React",
  },
  {
    term: "reconciliation",
    definition:
      "The process React uses to update the DOM efficiently by comparing virtual DOM trees",
    category: "React",
  },
];

// Frontend Terms
const frontendTerms: Term[] = [
  {
    term: "responsive",
    definition:
      "An approach to web design that makes pages render well on various devices",
    category: "Frontend",
    resources: [
      {
        id: "responsive-1",
        title: "Responsive Design Masterclass - My Tutorial",
        url: "https://youtu.be/srvUrASNdxk",
        type: "youtube",
        description: "Everything you need to know about responsive design",
      },
      {
        id: "responsive-2",
        title: "CSS Grid and Flexbox for Responsive Design",
        url: "https://youtu.be/jV8B24rSN5o",
        type: "youtube",
      },
    ],
  },
  {
    term: "webpack",
    definition: "A static module bundler for modern JavaScript applications",
    category: "Frontend",
    resources: [
      {
        id: "webpack-1",
        title: "Webpack From Scratch - My Tutorial Series",
        url: "https://youtu.be/MpGLUVbqoYQ",
        type: "youtube",
        description: "Learn Webpack from the ground up",
      },
    ],
  },
  {
    term: "framework",
    definition:
      "A platform for developing software applications with pre-written code",
    category: "Frontend",
  },
  {
    term: "dom",
    definition:
      "Document Object Model - represents HTML or XML documents as a tree structure",
    category: "Frontend",
  },
  {
    term: "flex box",
    definition: "A CSS layout mode that arranges items in rows or columns",
    category: "Frontend",
  },
  {
    term: "grid",
    definition:
      "A CSS layout system designed for 2D layout of items in rows and columns",
    category: "Frontend",
  },
  {
    term: "webpack plugin",
    definition: "Custom functionality added to Webpack's build process",
    category: "Frontend",
  },
  {
    term: "minification",
    definition:
      "Process of removing unnecessary characters from code without changing functionality",
    category: "Frontend",
  },
  {
    term: "csr",
    definition:
      "Client-Side Rendering - rendering a page entirely in the browser",
    category: "Frontend",
  },
  {
    term: "ssr",
    definition:
      "Server-Side Rendering - rendering a page on the server before sending it to the browser",
    category: "Frontend",
  },
  {
    term: "tree shaking",
    definition: "Eliminating dead code during the build process",
    category: "Frontend",
  },
  {
    term: "zindex",
    definition:
      "CSS property that controls the vertical stacking order of elements",
    category: "Frontend",
  },
  {
    term: "a11y",
    definition:
      "Short for accessibility - designing apps usable by people with disabilities",
    category: "Frontend",
  },
  {
    term: "tailwind",
    definition: "Utility-first CSS framework for rapid UI development",
    category: "Frontend",
  },
  {
    term: "vite",
    definition:
      "A fast development build tool that bundles code using native ES modules",
    category: "Frontend",
  },
  // New Frontend Terms
  {
    term: "sass",
    definition:
      "Syntactically Awesome Style Sheets - a CSS preprocessor with variables and functions",
    category: "Frontend",
  },
  {
    term: "less",
    definition:
      "A CSS preprocessor that extends CSS with dynamic behavior like variables and mixins",
    category: "Frontend",
  },
  {
    term: "postcss",
    definition:
      "A tool for transforming CSS with JavaScript plugins",
    category: "Frontend",
  },
  {
    term: "media queries",
    definition:
      "CSS technique to apply different styles for different media types and screen sizes",
    category: "Frontend",
  },
  {
    term: "breakpoint",
    definition:
      "Specific screen widths where responsive design layout changes occur",
    category: "Frontend",
  },
  {
    term: "mobile first",
    definition:
      "Design approach starting with mobile devices and progressively enhancing for larger screens",
    category: "Frontend",
  },
  {
    term: "progressive enhancement",
    definition:
      "Building web content that works on all browsers, then adding advanced features",
    category: "Frontend",
  },
  {
    term: "graceful degradation",
    definition:
      "Building for modern browsers first, ensuring basic functionality on older browsers",
    category: "Frontend",
  },
  {
    term: "polyfill",
    definition:
      "Code that provides modern functionality on older browsers that lack support",
    category: "Frontend",
  },
  {
    term: "transpilation",
    definition:
      "Converting code from one version or language to another, like ES6 to ES5",
    category: "Frontend",
  },
  {
    term: "bundler",
    definition:
      "A tool that combines multiple files and dependencies into one or more output files",
    category: "Frontend",
  },
  {
    term: "hot reload",
    definition:
      "Development feature that automatically updates the browser when code changes",
    category: "Frontend",
  },
  {
    term: "pwa",
    definition:
      "Progressive Web App - web applications that work offline and feel like native apps",
    category: "Frontend",
  },
  {
    term: "service worker",
    definition:
      "JavaScript that runs in the background to enable offline functionality and push notifications",
    category: "Frontend",
  },
  {
    term: "web workers",
    definition:
      "JavaScript that runs on background threads separate from the main UI thread",
    category: "Frontend",
  },
  {
    term: "lazy loading",
    definition:
      "Loading content only when needed to improve initial page load performance",
    category: "Frontend",
  },
  {
    term: "code splitting",
    definition:
      "Splitting code into smaller chunks that can be loaded on demand",
    category: "Frontend",
  },
  {
    term: "critical css",
    definition:
      "The minimal CSS required to render above-the-fold content",
    category: "Frontend",
  },
  {
    term: "css modules",
    definition:
      "A way to scope CSS locally to avoid global namespace collisions",
    category: "Frontend",
  },
  {
    term: "styled components",
    definition:
      "A library for writing CSS in JavaScript using template literals",
    category: "Frontend",
  },
];

// Backend Terms
const backendTerms: Term[] = [
  {
    term: "rest api",
    definition:
      "Representational State Transfer - an architectural style for designing networked applications",
    category: "Backend",
    resources: [
      {
        id: "rest-1",
        title: "Building REST APIs - My Complete Guide",
        url: "https://youtu.be/0oXYLzuucwE",
        type: "youtube",
        description: "Complete tutorial on building REST APIs from scratch",
      },
      {
        id: "rest-2",
        title: "What is REST API?",
        url: "https://youtu.be/lsMQRaeKNDk",
        type: "youtube",
      },
    ],
  },
  {
    term: "middleware",
    definition:
      "Software that acts as a bridge between an operating system and applications",
    category: "Backend",
    resources: [
      {
        id: "middleware-1",
        title: "Express Middleware Deep Dive - My Tutorial",
        url: "https://youtu.be/lY6icfhap2o",
        type: "youtube",
        description: "Understanding middleware in Express.js",
      },
    ],
  },
  {
    term: "api",
    definition:
      "Application Programming Interface - a set of rules for building software",
    category: "Backend",
  },
  {
    term: "database",
    definition: "An organized collection of structured information or data",
    category: "Backend",
  },
  {
    term: "http",
    definition:
      "HyperText Transfer Protocol - foundation of data communication on the web",
    category: "Backend",
  },
  {
    term: "jwt",
    definition:
      "JSON Web Token - a compact way to securely transmit information between parties",
    category: "Backend",
  },
  {
    term: "nodejs",
    definition:
      "JavaScript runtime built on Chrome's V8 engine for building backend apps",
    category: "Backend",
  },
  {
    term: "api endpoint",
    definition:
      "A specific URL where an API can be accessed by a client application",
    category: "Backend",
  },
  {
    term: "sql",
    definition:
      "Structured Query Language - used to interact with relational databases",
    category: "Backend",
  },
  {
    term: "nosql",
    definition:
      "Databases that store data in formats other than relational tables",
    category: "Backend",
  },
  {
    term: "schema",
    definition:
      "Defines the structure of a database including tables and fields",
    category: "Backend",
  },
  {
    term: "cors",
    definition:
      "Cross-Origin Resource Sharing - a security feature to control resource access across domains",
    category: "Backend",
  },
  {
    term: "ci",
    definition:
      "Continuous Integration - practice of automatically testing and merging code",
    category: "Backend",
  },
  {
    term: "cd",
    definition:
      "Continuous Deployment - automatically deploying every change that passes tests",
    category: "Backend",
  },
  {
    term: "websocket",
    definition:
      "Protocol for two-way communication between client and server over a single connection",
    category: "Backend",
  },
  {
    term: "load balancer",
    definition: "Distributes incoming network traffic across multiple servers",
    category: "Backend",
  },
  // New Backend Terms
  {
    term: "graphql",
    definition:
      "A query language for APIs that allows clients to request exactly the data they need",
    category: "Backend",
  },
  {
    term: "orm",
    definition:
      "Object-Relational Mapping - technique for converting data between incompatible systems",
    category: "Backend",
  },
  {
    term: "mongodb",
    definition:
      "A document-oriented NoSQL database program using JSON-like documents",
    category: "Backend",
  },
  {
    term: "redis",
    definition:
      "An in-memory data structure store used as database, cache, and message broker",
    category: "Backend",
  },
  {
    term: "docker",
    definition:
      "Platform for developing, shipping, and running applications in containers",
    category: "Backend",
  },
  {
    term: "kubernetes",
    definition:
      "Container orchestration platform for automating deployment and scaling",
    category: "Backend",
  },
  {
    term: "microservices",
    definition:
      "Architectural approach where applications are built as a suite of small services",
    category: "Backend",
  },
  {
    term: "monolith",
    definition:
      "Software architecture where all components are interconnected and interdependent",
    category: "Backend",
  },
  {
    term: "serverless",
    definition:
      "Cloud computing model where the provider manages server infrastructure automatically",
    category: "Backend",
  },
  {
    term: "lambda",
    definition:
      "AWS service for running code without provisioning or managing servers",
    category: "Backend",
  },
  {
    term: "api gateway",
    definition:
      "Management tool for APIs that acts as a reverse proxy to accept API calls",
    category: "Backend",
  },
  {
    term: "rate limiting",
    definition:
      "Technique to control the rate of traffic sent or received by a network",
    category: "Backend",
  },
  {
    term: "caching",
    definition:
      "Storing frequently accessed data in temporary storage for faster retrieval",
    category: "Backend",
  },
  {
    term: "cdn",
    definition:
      "Content Delivery Network - geographically distributed servers for faster content delivery",
    category: "Backend",
  },
  {
    term: "ssl",
    definition:
      "Secure Sockets Layer - protocol for establishing encrypted links between servers and clients",
    category: "Backend",
  },
  {
    term: "https",
    definition:
      "HTTP Secure - HTTP protocol with encryption using SSL/TLS",
    category: "Backend",
  },
  {
    term: "oauth",
    definition:
      "Open standard for access delegation commonly used for token-based authentication",
    category: "Backend",
  },
  {
    term: "crud",
    definition:
      "Create, Read, Update, Delete - basic operations for persistent storage",
    category: "Backend",
  },
  {
    term: "indexing",
    definition:
      "Database optimization technique that improves query performance",
    category: "Backend",
  },
  {
    term: "sharding",
    definition:
      "Database partitioning technique that splits data across multiple servers",
    category: "Backend",
  },
];
// Interview Terms
const interviewTerms: Term[] = [
  {
    term: "bigO",
    definition:
      "Mathematical notation describing the limiting behavior of a function as input size approaches infinity",
    category: "Interview",
    resources: [
      {
        id: "bigo-1",
        title: "Big O Notation Interview Prep - My Series",
        url: "https://youtu.be/v4cd1O4zkGw",
        type: "youtube",

        description: "Essential Big O concepts for coding interviews",
      },
      {
        id: "bigo-2",
        title: "Big O Notation - CS Dojo",
        url: "https://youtu.be/D6xkbGLQesk",
        type: "youtube",

        description: "Clear explanation of time and space complexity",
      },
    ],
  },
  {
    term: "algorithm",
    definition:
      "A step-by-step procedure for solving a problem or performing calculations",
    category: "Interview",
    resources: [
      {
        id: "algo-1",
        title: "Algorithm Interview Prep - My Bootcamp",
        url: "https://youtu.be/8hly31xKli0",
        type: "youtube",

        description: "Complete algorithm preparation for interviews",
      },
      {
        id: "algo-2",
        title: "Top 50 Interview Algorithms",
        url: "https://youtu.be/KEEKn7Me-ms",
        type: "youtube",

        description: "Most common algorithms asked in interviews",
      },
    ],
  },
  {
    term: "recursion",
    definition:
      "A programming technique where a function calls itself to solve smaller instances of the same problem",
    category: "Interview",
    resources: [
      {
        id: "recursion-1",
        title: "Recursion Made Simple - My Tutorial",
        url: "https://youtu.be/KEEKn7Me-ms",
        type: "youtube",

        description: "Master recursion with practical examples",
      },
      {
        id: "recursion-2",
        title: "Recursion Interview Questions",
        url: "https://youtu.be/ngCos392W4w",
        type: "youtube",

        description: "Common recursion problems in coding interviews",
      },
    ],
  },
  {
    term: "data structure",
    definition:
      "A way of organizing and storing data to enable efficient access and modification",
    category: "Interview",
    resources: [
      {
        id: "ds-1",
        title: "Data Structures Crash Course - My Series",
        url: "https://youtu.be/RBSGKlAvoiM",
        type: "youtube",

        description: "Complete guide to essential data structures",
      },
      {
        id: "ds-2",
        title: "Data Structures for Coding Interviews",
        url: "https://youtu.be/uhYq27iSk9s",
        type: "youtube",

        description: "Most important data structures for technical interviews",
      },
    ],
  },
  {
    term: "binary tree",
    definition:
      "A hierarchical data structure where each node has at most two children",
    category: "Interview",
    resources: [
      {
        id: "tree-1",
        title: "Binary Tree Interview Problems - My Deep Dive",
        url: "https://youtu.be/fAAZixBzIAI",
        type: "youtube",

        description: "Essential tree algorithms for coding interviews",
      },
      {
        id: "tree-2",
        title: "Tree Traversal Algorithms",
        url: "https://youtu.be/9RHO6jU--GU",
        type: "youtube",

        description: "In-order, pre-order, and post-order traversals",
      },
    ],
  },
  {
    term: "linked list",
    definition:
      "A linear data structure where elements are stored in nodes, each pointing to the next",
    category: "Interview",
    resources: [
      {
        id: "ll-1",
        title: "Linked List Interview Prep - My Tutorial",
        url: "https://youtu.be/njTh_OwMljA",
        type: "youtube",

        description: "Master linked list problems for interviews",
      },
    ],
  },
  {
    term: "hash table",
    definition:
      "A data structure that implements an associative array using a hash function to compute bucket indices",
    category: "Interview",
    resources: [
      {
        id: "hash-1",
        title: "Hash Tables Explained - My Guide",
        url: "https://youtu.be/shs0KM3wKv8",
        type: "youtube",

        description: "Understanding hash tables and collision handling",
      },
    ],
  },
  {
    term: "stack",
    definition:
      "A linear data structure that follows Last In First Out (LIFO) principle",
    category: "Interview",
    resources: [
      {
        id: "stack-1",
        title: "Stack and Queue Interview Problems",
        url: "https://youtu.be/wjI1WNcIntg",
        type: "youtube",

        description: "Common stack problems in coding interviews",
      },
    ],
  },
  {
    term: "queue",
    definition:
      "A linear data structure that follows First In First Out (FIFO) principle",
    category: "Interview",
  },
  {
    term: "graph",
    definition:
      "A non-linear data structure consisting of vertices connected by edges",
    category: "Interview",
    resources: [
      {
        id: "graph-1",
        title: "Graph Algorithms for Interviews - My Series",
        url: "https://youtu.be/tWVWeAqZ0WU",
        type: "youtube",

        description: "BFS, DFS, and shortest path algorithms",
      },
    ],
  },
  {
    term: "dynamic programming",
    definition:
      "An optimization technique that solves complex problems by breaking them into simpler subproblems",
    category: "Interview",
    resources: [
      {
        id: "dp-1",
        title: "Dynamic Programming Mastery - My Complete Course",
        url: "https://youtu.be/oBt53YbR9Kk",
        type: "youtube",

        description: "From beginner to advanced DP problems",
      },
      {
        id: "dp-2",
        title: "DP Interview Questions",
        url: "https://youtu.be/aPQY__2H3tE",
        type: "youtube",

        description: "Most common DP problems in technical interviews",
      },
    ],
  },
  {
    term: "binary search",
    definition:
      "An efficient algorithm for finding an item in a sorted array by repeatedly dividing the search interval in half",
    category: "Interview",
    resources: [
      {
        id: "bs-1",
        title: "Binary Search Interview Patterns - My Guide",
        url: "https://youtu.be/GU7DpgHINWQ",
        type: "youtube",

        description: "Master all binary search variations",
      },
    ],
  },
  {
    term: "two pointers",
    definition:
      "A technique using two pointers moving through data structure to solve problems efficiently",
    category: "Interview",
    resources: [
      {
        id: "tp-1",
        title: "Two Pointers Technique - My Tutorial",
        url: "https://youtu.be/jFZmBQ569So",
        type: "youtube",

        description: "Essential two-pointer problems for interviews",
      },
    ],
  },
  {
    term: "sliding window",
    definition:
      "A technique for solving array/string problems by maintaining a window of elements",
    category: "Interview",
    resources: [
      {
        id: "sw-1",
        title: "Sliding Window Pattern - My Deep Dive",
        url: "https://youtu.be/MK-NZ4hN7rs",
        type: "youtube",

        description: "Master the sliding window technique",
      },
    ],
  },
  {
    term: "greedy algorithm",
    definition:
      "An approach that makes locally optimal choices at each step, hoping to find a global optimum",
    category: "Interview",
  },
  {
    term: "backtracking",
    definition:
      "An algorithmic approach that incrementally builds solutions and abandons those that fail to satisfy constraints",
    category: "Interview",
    resources: [
      {
        id: "bt-1",
        title: "Backtracking Algorithm Patterns",
        url: "https://youtu.be/Zq4upTEaQyM",
        type: "youtube",

        description: "Common backtracking problems and solutions",
      },
    ],
  },
  {
    term: "hashing",
    definition:
      "Process of converting data into a fixed-size string of characters using a hash function",
    category: "Interview",
  },
  {
    term: "sorting algorithm",
    definition:
      "An algorithm that puts elements in a certain order (numerical, lexicographical, etc.)",
    category: "Interview",
    resources: [
      {
        id: "sort-1",
        title: "Sorting Algorithms Explained - My Guide",
        url: "https://youtu.be/kPRA0W1kECg",
        type: "youtube",

        description: "Quick sort, merge sort, and heap sort explained",
      },
    ],
  },
  {
    term: "time complexity",
    definition:
      "A measure of the amount of time an algorithm takes to complete as a function of input size",
    category: "Interview",
  },
  {
    term: "space complexity",
    definition:
      "A measure of the amount of memory space an algorithm uses as a function of input size",
    category: "Interview",
  },
  {
    term: "singleton",
    definition:
      "A design pattern that ensures a class has only one instance and provides global access to it",
    category: "Interview",
    resources: [
      {
        id: "singleton-1",
        title: "Design Patterns for Interviews",
        url: "https://youtu.be/v9ejT8FO-7I",
        type: "youtube",

        description: "Essential design patterns in coding interviews",
      },
    ],
  },
  {
    term: "heap",
    definition:
      "A specialized tree-based data structure that satisfies the heap property",
    category: "Interview",
  },
  {
    term: "trie",
    definition:
      "A tree-like data structure used to store strings, where each node represents a single character",
    category: "Interview",
  },
  {
    term: "bit manipulation",
    definition:
      "Algorithmic manipulation of bits or binary digits, often used for optimization",
    category: "Interview",
    resources: [
      {
        id: "bit-1",
        title: "Bit Manipulation Tricks - My Tutorial",
        url: "https://youtu.be/NLKQEOgBAnw",
        type: "youtube",

        description: "Essential bit manipulation for coding interviews",
      },
    ],
  },
  {
    term: "memoization",
    definition:
      "An optimization technique storing results of expensive function calls and returning cached results",
    category: "Interview",
  },
  {
    term: "runtime",
    definition:
      "The environment in which code is executed, or the time taken for code execution",
    category: "Interview",
  },
  {
    term: "git",
    definition:
      "A distributed version control system for tracking changes in source code during software development",
    category: "Interview",
    resources: [
      {
        id: "git-1",
        title: "Git Interview Questions - My Prep Guide",
        url: "https://youtu.be/SWYqp7iY_Tc",
        type: "youtube",

        description: "Essential Git concepts for technical interviews",
      },
    ],
  },
  {
    term: "system design",
    definition:
      "The process of defining architecture, components, and interfaces for large-scale systems",
    category: "Interview",
    resources: [
      {
        id: "sd-1",
        title: "System Design Interview Prep - My Course",
        url: "https://youtu.be/UzLMhqg3_Wc",
        type: "youtube",

        description: "Complete system design interview preparation",
      },
    ],
  },
];

// General Terms
const generalTerms: Term[] = [
  {
    term: "initialize",
    definition: "The process of setting up or preparing something before use",
    category: "General",
  },
  {
    term: "deploy",
    definition:
      "The process of publishing and making an application or website available for users on the internet or a server",
    category: "General",
  },
  {
    term: "repository",
    definition:
      "A storage location for software packages or code, often hosted on platforms like GitHub",
    category: "General",
  },
  {
    term: "branch",
    definition:
      "A parallel version of code that diverges from the main line of development",
    category: "General",
  },
  {
    term: "merge",
    definition:
      "The process of combining changes from different branches into one branch",
    category: "General",
  },
  {
    term: "commit",
    definition:
      "A snapshot of changes made to files in a repository at a specific point in time",
    category: "General",
  },
  {
    term: "pull request",
    definition:
      "A method of submitting contributions to a project by requesting changes be pulled into the main branch",
    category: "General",
  },
  {
    term: "clone",
    definition: "Creating a local copy of a remote repository on your computer",
    category: "General",
  },
  {
    term: "fork",
    definition:
      "Creating a personal copy of someone else's project to modify independently",
    category: "General",
  },
  {
    term: "version control",
    definition:
      "A system that records changes to files over time so you can recall specific versions later",
    category: "General",
  },
  {
    term: "dependency",
    definition:
      "External libraries or packages that your project relies on to function properly",
    category: "General",
  },
  {
    term: "package manager",
    definition:
      "A tool that automates the process of installing, updating, and managing software packages",
    category: "General",
  },
  {
    term: "environment",
    definition:
      "The setting in which software runs, including hardware, operating system, and runtime",
    category: "General",
  },
  {
    term: "production",
    definition:
      "The live environment where the application is available to end users",
    category: "General",
  },
  {
    term: "development",
    definition:
      "The environment where developers write and test code before deployment",
    category: "General",
  },
  {
    term: "staging",
    definition:
      "A testing environment that closely mirrors production for final testing before deployment",
    category: "General",
  },
  {
    term: "debugging",
    definition: "The process of finding and fixing errors or bugs in code",
    category: "General",
  },
  {
    term: "refactoring",
    definition:
      "Restructuring existing code without changing its external behavior to improve readability or performance",
    category: "General",
  },
  {
    term: "scalability",
    definition:
      "The ability of a system to handle increased load by adding resources",
    category: "General",
  },
  {
    term: "optimization",
    definition:
      "The process of making code or systems run more efficiently or faster",
    category: "General",
  },
  {
    term: "authentication",
    definition: "The process of verifying the identity of a user or system",
    category: "General",
  },
  {
    term: "authorization",
    definition:
      "The process of determining what actions an authenticated user is allowed to perform",
    category: "General",
  },
  {
    term: "cache",
    definition:
      "A temporary storage location for frequently accessed data to improve performance",
    category: "General",
  },
  {
    term: "session",
    definition:
      "A temporary and interactive information exchange between a user and a computer system",
    category: "General",
  },
  {
    term: "cookie",
    definition:
      "Small pieces of data stored by web browsers to remember information about users",
    category: "General",
  },
  {
    term: "encryption",
    definition:
      "The process of converting data into a coded format to prevent unauthorized access",
    category: "General",
  },
  {
    term: "hash",
    definition:
      "A fixed-size string generated from input data, commonly used for security and data integrity",
    category: "General",
  },
  {
    term: "token",
    definition:
      "A digital object that represents the right to perform some operation or access resources",
    category: "General",
  },
  {
    term: "endpoint",
    definition:
      "A specific URL or connection point where an API can be accessed",
    category: "General",
  },
  {
    term: "localhost",
    definition:
      "A hostname that refers to the current computer used to access it, typically for local development",
    category: "General",
  },
  {
    term: "port",
    definition:
      "A communication endpoint that identifies a specific process or network service",
    category: "General",
  },
];
const aiTerms: Term[] = [
  {
    term: "machine learning",
    definition:
      "A subset of AI where systems learn from data and improve their performance without being explicitly programmed",
    category: "AI",
  },
  {
    term: "neural network",
    definition:
      "A machine learning model inspired by the structure of the human brain, made up of layers of nodes called neurons",
    category: "AI",
  },
  {
    term: "training",
    definition:
      "The process of feeding data into a machine learning model to help it learn patterns and make predictions",
    category: "AI",
  },
  {
    term: "inference",
    definition:
      "The stage where a trained AI model is used to make predictions or generate outputs from new input data",
    category: "AI",
  },
  {
    term: "dataset",
    definition:
      "A structured collection of data used to train or evaluate a machine learning model",
    category: "AI",
  },
  {
    term: "over fitting",
    definition:
      "When a model learns the training data too well, including noise, and performs poorly on new data",
    category: "AI",
  },
  {
    term: "under fitting",
    definition:
      "When a model fails to learn enough from the training data and performs poorly on both training and new data",
    category: "AI",
  },
  {
    term: "prompt",
    definition:
      "An input or instruction given to an AI model, especially in natural language processing, to generate a response",
    category: "AI",
  },
  {
    term: "tokenization",
    definition:
      "The process of breaking text into smaller parts (tokens) that a model can understand and process",
    category: "AI",
  },
  {
    term: "fine tuning",
    definition:
      "Customizing a pre-trained AI model with new data to make it perform better on a specific task",
    category: "AI",
  },
  {
    term: "model",
    definition:
      "A mathematical structure or algorithm that performs predictions, classifications, or generative tasks based on input data",
    category: "AI",
  },
  {
    term: "LLM",
    definition:
      "Short for Large Language Model, a type of AI model trained on massive text datasets to understand and generate human language",
    category: "AI",
  },
  {
    term: "embedding",
    definition:
      "A numerical representation of data (like text) that preserves its meaning for use in machine learning models",
    category: "AI",
  },
  {
    term: "zero shot learning",
    definition:
      "When a model correctly performs a task it wasn’t specifically trained on, using generalization from related tasks",
    category: "AI",
  },
  {
    term: "hallucination",
    definition:
      "When an AI model generates false or misleading information that appears plausible",
    category: "AI",
  },
];
// Main export - combine all terms
export const devTerms: Term[] = [
  ...javascriptTerms,
  ...reactTerms,
  ...frontendTerms,
  ...backendTerms,
  ...interviewTerms,
  ...generalTerms,
  ...aiTerms,
];

// Export individual term collections
export {
  javascriptTerms,
  reactTerms,
  frontendTerms,
  backendTerms,
  interviewTerms,
  generalTerms,
  aiTerms,
};

// Categories
export const categories = [
  "All",
  "JavaScript",
  "React",
  "Frontend",
  "Backend",
  "Interview",
  "General",
  "AI",
];

// Common words
export const commonWords = [
  "the",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "with",
  "by",
  "from",
  "up",
  "about",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "between",
  "among",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "may",
  "might",
  "must",
  "can",
  "this",
  "that",
  "these",
  "those",
  "some",
  "any",
  "all",
  "many",
  "few",
  "more",
  "most",
  "other",
  "another",
  "such",
  "what",
  "which",
  "who",
  "when",
  "where",
  "why",
  "how",
  "here",
  "there",
  "now",
  "then",
  "today",
  "tomorrow",
  "yesterday",
  "always",
  "never",
  "sometimes",
  "often",
  "usually",
  "maybe",
  "perhaps",
  "probably",
  "definitely",
  "certainly",
  "really",
  "very",
  "quite",
  "rather",
  "pretty",
  "too",
  "also",
  "just",
  "only",
  "even",
  "still",
];

// Verbs for better sentence structure
export const verbs = [
  "implement",
  "optimize",
  "debug",
  "configure",
  "manage",
  "create",
  "build",
  "develop",
  "design",
  "handle",
  "process",
  "execute",
  "render",
  "compile",
  "deploy",
  "test",
  "validate",
  "parse",
  "fetch",
  "update",
  "modify",
  "enhance",
  "integrate",
  "connect",
  "resolve",
  "define",
  "structure",
  "organize",
  "maintain",
  "scale",
];

// Adjectives for descriptive sentences
export const adjectives = [
  "efficient",
  "scalable",
  "robust",
  "flexible",
  "modern",
  "advanced",
  "simple",
  "complex",
  "dynamic",
  "static",
  "responsive",
  "interactive",
  "secure",
  "fast",
  "reliable",
  "maintainable",
  "reusable",
  "modular",
  "lightweight",
  "powerful",
  "intuitive",
  "clean",
  "elegant",
  "sophisticated",
  "innovative",
  "seamless",
  "comprehensive",
  "versatile",
  "optimized",
  "streamlined",
];

// Nouns for technical context
export const nouns = [
  "application",
  "system",
  "framework",
  "library",
  "tool",
  "solution",
  "approach",
  "method",
  "technique",
  "pattern",
  "structure",
  "architecture",
  "implementation",
  "functionality",
  "feature",
  "component",
  "module",
  "interface",
  "service",
  "platform",
  "environment",
  "workflow",
  "process",
  "performance",
  "behavior",
  "response",
  "interaction",
  "experience",
  "development",
  "management",
];

// Connectors for flow
export const connectors = [
  "while",
  "when",
  "because",
  "since",
  "although",
  "however",
  "therefore",
  "moreover",
  "furthermore",
  "nevertheless",
  "consequently",
  "meanwhile",
  "otherwise",
  "instead",
  "besides",
];
