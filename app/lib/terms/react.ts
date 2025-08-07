import { Term } from "../types";

// React Terms
export const reactTerms: Term[] = [
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
    definition: "React hook that lets you add state to functional components",
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
    definition: "A component whose form data is handled by React state",
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
