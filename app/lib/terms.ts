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
        type: "personal",
        duration: "12:34",
        description:
          "My personal explanation of closures with practical examples",
      },
      {
        id: "closure-2",
        title: "JavaScript Closures - Fun Fun Function",
        url: "https://youtu.be/CQqwU2Ixu-U",
        type: "youtube",
        duration: "16:23",
        description: "Great explanation of closures in JavaScript",
      },
      {
        id: "closure-3",
        title: "MDN Web Docs - Closures",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        type: "documentation",
        description: "Official documentation on JavaScript closures",
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
        type: "personal",
        duration: "15:42",
        description: "My comprehensive guide to JavaScript hoisting",
      },
      {
        id: "hoisting-2",
        title: "JavaScript Hoisting Explained",
        url: "https://youtu.be/EvfRXyKa_GI",
        type: "youtube",
        duration: "8:15",
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
        type: "personal",
        duration: "18:45",
        description: "Master asynchronous JavaScript programming",
      },
      {
        id: "async-2",
        title: "JavaScript Promises and Async/Await",
        url: "https://youtu.be/PoRJizFvM7s",
        type: "youtube",
        duration: "22:15",
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
        type: "personal",
        duration: "55:30",
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
    term: "eventloop",
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
];

// React Terms
const reactTerms: Term[] = [
  {
    term: "virtualdom",
    definition:
      "A programming concept where a virtual representation of the UI is kept in memory",
    category: "React",
    resources: [
      {
        id: "vdom-1",
        title: "Virtual DOM Explained - My React Series",
        url: "https://youtu.be/BYbgopx44vo",
        type: "personal",
        duration: "18:30",
        description: "Part of my React fundamentals series",
      },
      {
        id: "vdom-2",
        title: "React Virtual DOM Tutorial",
        url: "https://youtu.be/jwRAdGLUarw",
        type: "youtube",
        duration: "22:45",
      },
      {
        id: "vdom-3",
        title: "React Docs - Virtual DOM",
        url: "https://reactjs.org/docs/faq-internals.html",
        type: "documentation",
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
        type: "personal",
        duration: "30:45",
        description: "Everything about state in React applications",
      },
      {
        id: "state-2",
        title: "useState Hook Explained",
        url: "https://youtu.be/O6P86uwfdR0",
        type: "youtube",
        duration: "15:20",
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
        type: "personal",
        duration: "28:20",
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
        type: "personal",
        duration: "14:30",
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
        type: "personal",
        duration: "42:15",
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
    term: "reactquery",
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
        type: "personal",
        duration: "35:15",
        description: "Everything you need to know about responsive design",
      },
      {
        id: "responsive-2",
        title: "CSS Grid and Flexbox for Responsive Design",
        url: "https://youtu.be/jV8B24rSN5o",
        type: "youtube",
        duration: "28:45",
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
        type: "personal",
        duration: "52:30",
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
    term: "flexbox",
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
    term: "webpackplugin",
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
    term: "tree-shaking",
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
];

// Backend Terms
const backendTerms: Term[] = [
  {
    term: "restapi",
    definition:
      "Representational State Transfer - an architectural style for designing networked applications",
    category: "Backend",
    resources: [
      {
        id: "rest-1",
        title: "Building REST APIs - My Complete Guide",
        url: "https://youtu.be/0oXYLzuucwE",
        type: "personal",
        duration: "45:20",
        description: "Complete tutorial on building REST APIs from scratch",
      },
      {
        id: "rest-2",
        title: "What is REST API?",
        url: "https://youtu.be/lsMQRaeKNDk",
        type: "youtube",
        duration: "12:30",
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
        type: "personal",
        duration: "20:15",
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
    term: "apiendpoint",
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
    term: "loadbalancer",
    definition: "Distributes incoming network traffic across multiple servers",
    category: "Backend",
  },
];

// Interview Terms
const interviewTerms: Term[] = [
  {
    term: "bigO",
    definition:
      "Mathematical notation describing the limiting behavior of a function",
    category: "Interview",
    resources: [
      {
        id: "bigo-1",
        title: "Big O Notation Interview Prep - My Series",
        url: "https://youtu.be/v4cd1O4zkGw",
        type: "personal",
        duration: "25:30",
        description: "Essential Big O concepts for coding interviews",
      },
      {
        id: "bigo-2",
        title: "Big O Notation - CS Dojo",
        url: "https://youtu.be/D6xkbGLQesk",
        type: "youtube",
        duration: "11:27",
      },
    ],
  },
  {
    term: "algorithm",
    definition: "A step-by-step procedure for calculations and data processing",
    category: "Interview",
    resources: [
      {
        id: "algo-1",
        title: "Algorithm Interview Prep - My Bootcamp",
        url: "https://youtu.be/8hly31xKli0",
        type: "personal",
        duration: "1:15:30",
        description: "Complete algorithm preparation for interviews",
      },
    ],
  },
  {
    term: "recursion",
    definition:
      "A function that calls itself to solve a smaller instance of the same problem",
    category: "Interview",
    resources: [
      {
        id: "recursion-1",
        title: "Recursion Made Simple - My Tutorial",
        url: "https://youtu.be/KEEKn7Me-ms",
        type: "personal",
        duration: "20:45",
        description: "Master recursion with practical examples",
      },
    ],
  },
  {
    term: "hashing",
    definition:
      "Process of converting data into a fixed-size string of characters",
    category: "Interview",
  },
  {
    term: "singleton",
    definition: "A class of which only one instance can exist",
    category: "Interview",
  },
  {
    term: "runtime",
    definition: "The environment in which code is executed",
    category: "Interview",
  },
  {
    term: "git",
    definition:
      "A distributed version control system for tracking changes in code",
    category: "Interview",
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
    term: "overfitting",
    definition:
      "When a model learns the training data too well, including noise, and performs poorly on new data",
    category: "AI",
  },
  {
    term: "underfitting",
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
    term: "fine-tuning",
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
    term: "zero-shot learning",
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
