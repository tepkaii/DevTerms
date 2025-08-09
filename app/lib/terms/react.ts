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
    resources: [
      {
        id: "tsx-1",
        title: "TypeScript + React Tutorial",
        url: "https://youtu.be/Z5iWr6Srsj8",
        type: "youtube",
        description: "Using TypeScript with React components",
      },
    ],
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
    resources: [
      {
        id: "props-1",
        title: "React Props Explained",
        url: "https://youtu.be/m7OWXtbiXX8",
        type: "youtube",
        description: "Understanding props in React components",
      },
    ],
  },
  {
    term: "react query",
    definition: "A data-fetching library for React that manages server state",
    category: "React",
    resources: [
      {
        id: "react-query-1",
        title: "React Query Tutorial",
        url: "https://youtu.be/seU46c6Jz7E",
        type: "youtube",
        description: "Complete guide to React Query",
      },
    ],
  },
  {
    term: "context",
    definition:
      "React feature to pass data through the component tree without prop drilling",
    category: "React",
    resources: [
      {
        id: "context-1",
        title: "React Context API Tutorial",
        url: "https://youtu.be/5LrDIWkK_Bc",
        type: "youtube",
        description: "Using React Context for state management",
      },
    ],
  },
  {
    term: "lifecycle",
    definition:
      "The different stages in a component's existence in frameworks like React",
    category: "React",
    resources: [
      {
        id: "lifecycle-1",
        title: "React Component Lifecycle Methods",
        url: "https://youtu.be/qnN_FuFNq2g",
        type: "youtube",
        description: "Understanding React component lifecycle",
      },
    ],
  },
  {
    term: "hydration",
    definition:
      "The process of attaching event listeners to static HTML rendered on the server",
    category: "React",
    resources: [
      {
        id: "hydration-1",
        title: "React Hydration Explained",
        url: "https://youtu.be/R-BKadZWYVQ",
        type: "youtube",
        description: "Understanding hydration in React SSR",
      },
    ],
  },
  {
    term: "ref",
    definition: "A way to access DOM nodes or React elements directly",
    category: "React",
    resources: [
      {
        id: "ref-1",
        title: "React Refs Tutorial",
        url: "https://youtu.be/FXa9mMTKOu8",
        type: "youtube",
        description: "Working with refs in React",
      },
    ],
  },
  {
    term: "useEffect",
    definition:
      "React hook that lets you perform side effects in functional components",
    category: "React",
    resources: [
      {
        id: "useeffect-1",
        title: "useEffect Hook Complete Guide",
        url: "https://youtu.be/0ZJgIjIuY7U",
        type: "youtube",
        description: "Master the useEffect hook",
      },
    ],
  },
  {
    term: "useState",
    definition: "React hook that lets you add state to functional components",
    category: "React",
    resources: [
      {
        id: "usestate-1",
        title: "useState Hook Explained",
        url: "https://youtu.be/O6P86uwfdR0",
        type: "youtube",
        description: "Understanding useState hook",
      },
    ],
  },
  {
    term: "useReducer",
    definition:
      "React hook for managing complex state logic through a reducer function",
    category: "React",
    resources: [
      {
        id: "usereducer-1",
        title: "useReducer Hook Tutorial",
        url: "https://youtu.be/kK_Wqx3RnHk",
        type: "youtube",
        description: "Managing complex state with useReducer",
      },
    ],
  },
  {
    term: "useCallback",
    definition:
      "React hook that returns a memoized callback function to optimize performance",
    category: "React",
    resources: [
      {
        id: "usecallback-1",
        title: "useCallback Hook Explained",
        url: "https://youtu.be/IL82CzlaCys",
        type: "youtube",
        description: "Performance optimization with useCallback",
      },
    ],
  },
  {
    term: "useMemo",
    definition:
      "React hook that memoizes expensive calculations to optimize performance",
    category: "React",
    resources: [
      {
        id: "usememo-1",
        title: "useMemo Hook Tutorial",
        url: "https://youtu.be/THL1OPn72vo",
        type: "youtube",
        description: "Memoization with useMemo hook",
      },
    ],
  },
  {
    term: "useContext",
    definition:
      "React hook that lets you subscribe to React context without nesting",
    category: "React",
    resources: [
      {
        id: "usecontext-1",
        title: "useContext Hook Tutorial",
        url: "https://youtu.be/5LrDIWkK_Bc",
        type: "youtube",
        description: "Using useContext hook effectively",
      },
    ],
  },
  {
    term: "useRef",
    definition:
      "React hook that returns a mutable ref object with a .current property",
    category: "React",
    resources: [
      {
        id: "useref-1",
        title: "useRef Hook Explained",
        url: "https://youtu.be/t2ypzz6gJm0",
        type: "youtube",
        description: "Understanding useRef hook usage",
      },
    ],
  },
  {
    term: "custom hook",
    definition:
      "A JavaScript function that starts with 'use' and calls other hooks",
    category: "React",
    resources: [
      {
        id: "custom-hook-1",
        title: "Custom Hooks Tutorial",
        url: "https://youtu.be/6ThXsUwLWvc",
        type: "youtube",
        description: "Creating custom React hooks",
      },
    ],
  },
  {
    term: "react router",
    definition:
      "A library for handling navigation and routing in React applications",
    category: "React",
    resources: [
      {
        id: "react-router-1",
        title: "React Router Tutorial",
        url: "https://youtu.be/Law7wfdg_ls",
        type: "youtube",
        description: "Complete React Router guide",
      },
    ],
  },
  {
    term: "higher order component",
    definition:
      "A function that takes a component and returns a new component with enhanced functionality",
    category: "React",
    resources: [
      {
        id: "hoc-1",
        title: "Higher Order Components Explained",
        url: "https://youtu.be/rsBQj6X7UK8",
        type: "youtube",
        description: "Understanding HOCs in React",
      },
    ],
  },
  {
    term: "render prop",
    definition:
      "A technique for sharing code between components using a prop whose value is a function",
    category: "React",
    resources: [
      {
        id: "render-prop-1",
        title: "Render Props in React",
        url: "https://www.youtube.com/watch?v=G5-sKrJjxXU",
        type: "youtube",
        description: "Using render props pattern in React",
      },
    ],
  },
  {
    term: "controlled component",
    definition: "A component whose form data is handled by React state",
    category: "React",
    resources: [
      {
        id: "controlled-1",
        title: "Controlled vs Uncontrolled Components",
        url: "https://youtu.be/7Vo_VCcWupQ",
        type: "youtube",
        description: "Understanding controlled components",
      },
    ],
  },
  {
    term: "uncontrolled component",
    definition:
      "A component that maintains its own internal state instead of using React state",
    category: "React",
    resources: [
      {
        id: "uncontrolled-1",
        title: "Uncontrolled Components Tutorial",
        url: "https://youtu.be/7Vo_VCcWupQ",
        type: "youtube",
        description: "When to use uncontrolled components",
      },
    ],
  },
  {
    term: "key prop",
    definition:
      "A special attribute that helps React identify which items have changed in lists",
    category: "React",
    resources: [
      {
        id: "key-prop-1",
        title: "React Keys Explained",
        url: "https://youtu.be/0sasRxl35_8",
        type: "youtube",
        description: "Why keys matter in React lists",
      },
    ],
  },
  {
    term: "fragment",
    definition:
      "A way to group multiple elements without adding extra nodes to the DOM",
    category: "React",
    resources: [
      {
        id: "fragment-1",
        title: "React Fragments Tutorial",
        url: "https://youtu.be/7Vo_VCcWupQ",
        type: "youtube",
        description: "Using React Fragments effectively",
      },
    ],
  },
  {
    term: "portals",
    definition:
      "A way to render children into a DOM node outside of the parent component's hierarchy",
    category: "React",
    resources: [
      {
        id: "portals-1",
        title: "React Portals Tutorial",
        url: "https://youtu.be/HpHLa-5Wdys",
        type: "youtube",
        description: "Understanding React portals",
      },
    ],
  },
  {
    term: "error boundary",
    definition:
      "React components that catch JavaScript errors in their child component tree",
    category: "React",
    resources: [
      {
        id: "error-boundary-1",
        title: "Error Boundaries in React",
        url: "https://youtu.be/DNYXgtZBRPE",
        type: "youtube",
        description: "Implementing error boundaries",
      },
    ],
  },
  {
    term: "suspense",
    definition:
      "A React component that lets you display fallback content while waiting for async operations",
    category: "React",
    resources: [
      {
        id: "suspense-1",
        title: "React Suspense Tutorial",
        url: "https://youtu.be/0sdMBGmC9EA",
        type: "youtube",
        description: "Using React Suspense for loading states",
      },
    ],
  },
  {
    term: "lazy loading",
    definition:
      "A technique to defer loading of components until they are actually needed",
    category: "React",
    resources: [
      {
        id: "lazy-loading-1",
        title: "React Lazy Loading Tutorial",
        url: "https://youtu.be/JU6sl_yyZqs",
        type: "youtube",
        description: "Implementing lazy loading in React",
      },
    ],
  },
  {
    term: "reconciliation",
    definition:
      "The process React uses to update the DOM efficiently by comparing virtual DOM trees",
    category: "React",
    resources: [
      {
        id: "reconciliation-1",
        title: "React Reconciliation Explained",
        url: "https://youtu.be/7YO5ws-WJX4",
        type: "youtube",
        description: "Understanding React's reconciliation algorithm",
      },
    ],
  },
  // Additional React Terms
  {
    term: "fiber",
    definition:
      "React's reconciliation engine that enables incremental rendering and prioritization",
    category: "React",
    resources: [
      {
        id: "fiber-1",
        title: "React Fiber Architecture Explained",
        url: "https://youtu.be/ZCuYPiUIONs",
        type: "youtube",
        description: "Understanding React Fiber internals",
      },
    ],
  },
  {
    term: "concurrent mode",
    definition:
      "A set of React features that help apps stay responsive by rendering component trees without blocking the main thread",
    category: "React",
    resources: [
      {
        id: "concurrent-1",
        title: "React Concurrent Mode Tutorial",
        url: "https://youtu.be/y0E9mX2D2kI",
        type: "youtube",
        description: "Introduction to concurrent rendering",
      },
    ],
  },
  {
    term: "server components",
    definition:
      "React components that render on the server and send HTML to the client",
    category: "React",
    resources: [
      {
        id: "server-components-1",
        title: "React Server Components Explained",
        url: "https://youtu.be/TQQPAU21ZUw",
        type: "youtube",
        description: "Understanding React Server Components",
      },
    ],
  },
  {
    term: "forward ref",
    definition:
      "A technique to pass refs through components to their child elements",
    category: "React",
    resources: [
      {
        id: "forward-ref-1",
        title: "React forwardRef Tutorial",
        url: "https://youtu.be/RLWniwmfdq4",
        type: "youtube",
        description: "Using forwardRef in React components",
      },
    ],
  },
  {
    term: "memo",
    definition:
      "A higher-order component that memoizes components to prevent unnecessary re-renders",
    category: "React",
    resources: [
      {
        id: "memo-1",
        title: "React.memo Optimization",
        url: "https://youtu.be/Ql_-TJoz5L8",
        type: "youtube",
        description: "Performance optimization with React.memo",
      },
    ],
  },
  {
    term: "strict mode",
    definition:
      "A development mode feature that helps identify potential problems in an application",
    category: "React",
    resources: [
      {
        id: "strict-mode-1",
        title: "React StrictMode Explained",
        url: "https://youtu.be/kgUFHrld9bY",
        type: "youtube",
        description: "Using React StrictMode for better development",
      },
    ],
  },
  {
    term: "profiler",
    definition:
      "A React component that measures the performance of its child components",
    category: "React",
    resources: [
      {
        id: "profiler-1",
        title: "React Profiler Tutorial",
        url: "https://youtu.be/00RoZflFE34",
        type: "youtube",
        description: "Performance profiling in React",
      },
    ],
  },
  {
    term: "synthetic events",
    definition:
      "React's wrapper around native events that provides consistent behavior across browsers",
    category: "React",
    resources: [
      {
        id: "synthetic-events-1",
        title: "React Synthetic Events Explained",
        url: "https://youtu.be/8vi56FYmzk8",
        type: "youtube",
        description: "Understanding React's event system",
      },
    ],
  },
  {
    term: "pure component",
    definition:
      "A class component that implements shallow comparison in shouldComponentUpdate",
    category: "React",
    resources: [
      {
        id: "pure-component-1",
        title: "React PureComponent vs Component",
        url: "https://youtu.be/YCRuTT31qR0",
        type: "youtube",
        description: "When to use PureComponent",
      },
    ],
  },
  {
    term: "useLayoutEffect",
    definition:
      "React hook that fires synchronously after all DOM mutations but before painting",
    category: "React",
    resources: [
      {
        id: "uselayouteffect-1",
        title: "useLayoutEffect vs useEffect",
        url: "https://youtu.be/wU57kvYOxT4",
        type: "youtube",
        description: "Understanding useLayoutEffect timing",
      },
    ],
  },
  {
    term: "useImperativeHandle",
    definition:
      "React hook that customizes the instance value exposed to parent components when using ref",
    category: "React",
    resources: [
      {
        id: "useimperativehandle-1",
        title: "useImperativeHandle Hook Tutorial",
        url: "https://youtu.be/zpEyAOkytkU",
        type: "youtube",
        description: "Advanced ref handling with useImperativeHandle",
      },
    ],
  },
  {
    term: "useDebugValue",
    definition:
      "React hook used to display a label for custom hooks in React DevTools",
    category: "React",
    resources: [
      {
        id: "usedebugvalue-1",
        title: "useDebugValue Hook Explained",
        url: "https://youtu.be/1jWS7cCuUXw",
        type: "youtube",
        description: "Debugging custom hooks with useDebugValue",
      },
    ],
  },
];