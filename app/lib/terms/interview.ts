import { Term } from "../types";

// Interview Terms
export const interviewTerms: Term[] = [
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
    resources: [
      {
        id: "queue-1",
        title: "Queue Data Structure Explained",
        url: "https://youtu.be/wjI1WNcIntg",
        type: "youtube",
        description: "Queue implementation and interview problems",
      },
    ],
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
    resources: [
      {
        id: "greedy-1",
        title: "Greedy Algorithms Explained",
        url: "https://youtu.be/HzeK7g8cD0Y",
        type: "youtube",
        description: "Greedy algorithm patterns and problems",
      },
    ],
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
    resources: [
      {
        id: "hashing-1",
        title: "Hashing Interview Questions",
        url: "https://youtu.be/shs0KM3wKv8",
        type: "youtube",
        description: "Hash functions and collision resolution",
      },
    ],
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
    resources: [
      {
        id: "time-complexity-1",
        title: "Time Complexity Analysis",
        url: "https://youtu.be/D6xkbGLQesk",
        type: "youtube",
        description: "Analyzing algorithm time complexity",
      },
    ],
  },
  {
    term: "space complexity",
    definition:
      "A measure of the amount of memory space an algorithm uses as a function of input size",
    category: "Interview",
    resources: [
      {
        id: "space-complexity-1",
        title: "Space Complexity Explained",
        url: "https://youtu.be/yOb0BL-84h8",
        type: "youtube",
        description: "Understanding memory usage in algorithms",
      },
    ],
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
    resources: [
      {
        id: "heap-1",
        title: "Heap Data Structure Tutorial",
        url: "https://youtu.be/t0Cq6tVNRBA",
        type: "youtube",
        description: "Min-heap, max-heap, and heap operations",
      },
    ],
  },
  {
    term: "trie",
    definition:
      "A tree-like data structure used to store strings, where each node represents a single character",
    category: "Interview",
    resources: [
      {
        id: "trie-1",
        title: "Trie Data Structure Explained",
        url: "https://youtu.be/AXjmTQ8LEoI",
        type: "youtube",
        description: "Implementing and using trie structures",
      },
    ],
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
    resources: [
      {
        id: "memoization-1",
        title: "Memoization in Dynamic Programming",
        url: "https://youtu.be/oBt53YbR9Kk",
        type: "youtube",
        description: "Optimization with memoization",
      },
    ],
  },
  {
    term: "runtime",
    definition:
      "The environment in which code is executed, or the time taken for code execution",
    category: "Interview",
    resources: [
      {
        id: "runtime-1",
        title: "Runtime Analysis Tutorial",
        url: "https://youtu.be/D6xkbGLQesk",
        type: "youtube",
        description: "Understanding code execution time",
      },
    ],
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
  // Additional Interview Terms
  {
    term: "breadth first search",
    definition:
      "A graph traversal algorithm that explores vertices level by level from the source",
    category: "Interview",
    resources: [
      {
        id: "bfs-1",
        title: "BFS Algorithm Explained",
        url: "https://youtu.be/oDqjPvD54Ss",
        type: "youtube",
        description: "Breadth-first search implementation",
      },
    ],
  },
  {
    term: "depth first search",
    definition:
      "A graph traversal algorithm that explores as far as possible along each branch before backtracking",
    category: "Interview",
    resources: [
      {
        id: "dfs-1",
        title: "DFS Algorithm Tutorial",
        url: "https://youtu.be/7fujbpJ0LB4",
        type: "youtube",
        description: "Depth-first search implementation",
      },
    ],
  },
  {
    term: "binary search tree",
    definition:
      "A binary tree where left children are smaller and right children are larger than parent nodes",
    category: "Interview",
    resources: [
      {
        id: "bst-1",
        title: "Binary Search Tree Operations",
        url: "https://youtu.be/wcIRPqTR3Kc",
        type: "youtube",
        description: "BST insertion, deletion, and search",
      },
    ],
  },
  {
    term: "balanced tree",
    definition:
      "A tree where the heights of the two child subtrees differ by at most one for every node",
    category: "Interview",
    resources: [
      {
        id: "balanced-1",
        title: "Balanced Trees Explained",
        url: "https://youtu.be/jDM6_TnYIqE",
        type: "youtube",
        description: "AVL trees and tree balancing",
      },
    ],
  },
  {
    term: "merge sort",
    definition:
      "A divide-and-conquer sorting algorithm that divides array into halves and merges them sorted",
    category: "Interview",
    resources: [
      {
        id: "merge-sort-1",
        title: "Merge Sort Algorithm",
        url: "https://youtu.be/4VqmGXwpLqc",
        type: "youtube",
        description: "Merge sort implementation and analysis",
      },
    ],
  },
  {
    term: "quick sort",
    definition:
      "An efficient sorting algorithm using divide-and-conquer with a pivot element",
    category: "Interview",
    resources: [
      {
        id: "quick-sort-1",
        title: "Quick Sort Explained",
        url: "https://youtu.be/Hoixgm4-P4M",
        type: "youtube",
        description: "Quick sort algorithm and partitioning",
      },
    ],
  },
  {
    term: "heap sort",
    definition:
      "A comparison-based sorting algorithm using a binary heap data structure",
    category: "Interview",
    resources: [
      {
        id: "heap-sort-1",
        title: "Heap Sort Algorithm",
        url: "https://youtu.be/2DmK_H7IdTo",
        type: "youtube",
        description: "Sorting with heap data structure",
      },
    ],
  },
  {
    term: "dijkstra algorithm",
    definition:
      "An algorithm for finding the shortest paths between nodes in a weighted graph",
    category: "Interview",
    resources: [
      {
        id: "dijkstra-1",
        title: "Dijkstra's Algorithm Explained",
        url: "https://youtu.be/pVfj6mxhdMw",
        type: "youtube",
        description: "Shortest path algorithm implementation",
      },
    ],
  },
  {
    term: "union find",
    definition:
      "A data structure that efficiently handles equivalence relations and connected components",
    category: "Interview",
    resources: [
      {
        id: "union-find-1",
        title: "Union Find Data Structure",
        url: "https://youtu.be/ibjEGG7ylHk",
        type: "youtube",
        description: "Disjoint set union implementation",
      },
    ],
  },
  {
    term: "topological sort",
    definition:
      "A linear ordering of vertices in a directed acyclic graph such that for every directed edge, the source comes before destination",
    category: "Interview",
    resources: [
      {
        id: "topo-sort-1",
        title: "Topological Sort Algorithm",
        url: "https://youtu.be/eL-KzMXSXXI",
        type: "youtube",
        description: "Ordering vertices in DAG",
      },
    ],
  },
  {
    term: "lru cache",
    definition:
      "Least Recently Used cache - a cache eviction policy that removes least recently accessed items",
    category: "Interview",
    resources: [
      {
        id: "lru-1",
        title: "LRU Cache Implementation",
        url: "https://youtu.be/7ABFKPK2hD4",
        type: "youtube",
        description: "Implementing LRU cache efficiently",
      },
    ],
  },
  {
    term: "prefix sum",
    definition:
      "A technique where each element contains the sum of all previous elements including itself",
    category: "Interview",
    resources: [
      {
        id: "prefix-sum-1",
        title: "Prefix Sum Technique",
        url: "https://youtu.be/PhgtNY_-CiY",
        type: "youtube",
        description: "Range sum queries optimization",
      },
    ],
  },
  {
    term: "kadane algorithm",
    definition:
      "An algorithm for finding the maximum sum of contiguous subarray in O(n) time",
    category: "Interview",
    resources: [
      {
        id: "kadane-1",
        title: "Kadane's Algorithm Explained",
        url: "https://youtu.be/86CQq3pKSUw",
        type: "youtube",
        description: "Maximum subarray sum problem",
      },
    ],
  },
  {
    term: "kmp algorithm",
    definition:
      "Knuth-Morris-Pratt algorithm for efficient string pattern matching",
    category: "Interview",
    resources: [
      {
        id: "kmp-1",
        title: "KMP String Matching Algorithm",
        url: "https://youtu.be/GTJr8OvyEVQ",
        type: "youtube",
        description: "Efficient pattern matching in strings",
      },
    ],
  },
  {
    term: "morris traversal",
    definition:
      "A method to traverse binary trees without using extra space for stack or recursion",
    category: "Interview",
    resources: [
      {
        id: "morris-1",
        title: "Morris Tree Traversal",
        url: "https://youtu.be/wGXB9OWhPTg",
        type: "youtube",
        description: "O(1) space tree traversal",
      },
    ],
  },
  {
    term: "cycle detection",
    definition:
      "Algorithms to detect cycles in data structures like linked lists or graphs",
    category: "Interview",
    resources: [
      {
        id: "cycle-1",
        title: "Cycle Detection Algorithms",
        url: "https://youtu.be/gBTe7lFR3vc",
        type: "youtube",
        description: "Floyd's algorithm and cycle detection",
      },
    ],
  },
  {
    term: "fast slow pointer",
    definition:
      "A technique using two pointers moving at different speeds to solve problems efficiently",
    category: "Interview",
    resources: [
      {
        id: "fast-slow-1",
        title: "Fast and Slow Pointer Technique",
        url: "https://youtu.be/gBTe7lFR3vc",
        type: "youtube",
        description: "Tortoise and hare algorithm",
      },
    ],
  },
  {
    term: "monotonic stack",
    definition:
      "A stack that maintains elements in monotonic order (increasing or decreasing)",
    category: "Interview",
    resources: [
      {
        id: "mono-stack-1",
        title: "Monotonic Stack Problems",
        url: "https://youtu.be/T5x85Cy_cfE",
        type: "youtube",
        description: "Next greater element problems",
      },
    ],
  },
  {
    term: "segment tree",
    definition:
      "A tree data structure used for storing information about intervals and answering range queries",
    category: "Interview",
    resources: [
      {
        id: "segment-tree-1",
        title: "Segment Tree Explained",
        url: "https://youtu.be/ZBHKZF5w4YU",
        type: "youtube",
        description: "Range query data structure",
      },
    ],
  },
  {
    term: "fenwick tree",
    definition:
      "Binary Indexed Tree - a data structure for efficient prefix sum calculations and updates",
    category: "Interview",
    resources: [
      {
        id: "fenwick-1",
        title: "Fenwick Tree Tutorial",
        url: "https://youtu.be/CWDQJGaN1gY",
        type: "youtube",
        description: "Binary indexed tree implementation",
      },
    ],
  },
  {
    term: "rolling hash",
    definition:
      "A hash function that can efficiently update hash values as a sliding window moves",
    category: "Interview",
    resources: [
      {
        id: "rolling-hash-1",
        title: "Rolling Hash Technique",
        url: "https://youtu.be/qQ8vS2btsxI",
        type: "youtube",
        description: "Efficient string matching with hashing",
      },
    ],
  },
  {
    term: "bloom filter",
    definition:
      "A space-efficient probabilistic data structure to test whether an element is in a set",
    category: "Interview",
    resources: [
      {
        id: "bloom-1",
        title: "Bloom Filter Explained",
        url: "https://youtu.be/-SuTGoFYjZs",
        type: "youtube",
        description: "Probabilistic membership testing",
      },
    ],
  },
  {
    term: "consistent hashing",
    definition:
      "A hashing technique that minimizes rehashing when hash table is resized",
    category: "Interview",
    resources: [
      {
        id: "consistent-hash-1",
        title: "Consistent Hashing Explained",
        url: "https://youtu.be/zaRkONvyGr8",
        type: "youtube",
        description: "Distributed system hashing strategy",
      },
    ],
  },
  {
    term: "load balancing",
    definition:
      "Distributing incoming network traffic across multiple servers to ensure reliability",
    category: "Interview",
    resources: [
      {
        id: "load-balance-1",
        title: "Load Balancing Strategies",
        url: "https://youtu.be/K0Ta65OqQkY",
        type: "youtube",
        description: "System design load balancing",
      },
    ],
  },
  {
    term: "caching strategies",
    definition:
      "Different approaches for storing frequently accessed data to improve performance",
    category: "Interview",
    resources: [
      {
        id: "cache-strategies-1",
        title: "Caching Strategies Explained",
        url: "https://youtu.be/U3RkDLtS7uY",
        type: "youtube",
        description: "Cache-aside, write-through, write-back",
      },
    ],
  },
  {
    term: "cap theorem",
    definition:
      "States that distributed systems can guarantee at most two of: Consistency, Availability, Partition tolerance",
    category: "Interview",
    resources: [
      {
        id: "cap-1",
        title: "CAP Theorem Explained",
        url: "https://youtu.be/3KXZuX6-a8k",
        type: "youtube",
        description: "Distributed systems trade-offs",
      },
    ],
  },
  {
    term: "acid properties",
    definition:
      "Atomicity, Consistency, Isolation, Durability - properties guaranteeing reliable database transactions",
    category: "Interview",
    resources: [
      {
        id: "acid-1",
        title: "ACID Properties Explained",
        url: "https://youtu.be/GAe5oB742dw",
        type: "youtube",
        description: "Database transaction properties",
      },
    ],
  },
  {
    term: "sql joins",
    definition:
      "Operations to combine rows from two or more tables based on related columns",
    category: "Interview",
    resources: [
      {
        id: "sql-joins-1",
        title: "SQL Joins Tutorial",
        url: "https://youtu.be/9yeOJ0ZMUYw",
        type: "youtube",
        description: "Inner, outer, left, right joins explained",
      },
    ],
  },
  {
    term: "database indexing",
    definition:
      "Data structure technique to improve the speed of data retrieval operations",
    category: "Interview",
    resources: [
      {
        id: "db-index-1",
        title: "Database Indexing Explained",
        url: "https://youtu.be/-qNSXK7s7_w",
        type: "youtube",
        description: "B-tree indexes and query optimization",
      },
    ],
  },
  {
    term: "normalization",
    definition:
      "Database design process to reduce redundancy and improve data integrity",
    category: "Interview",
    resources: [
      {
        id: "normalization-1",
        title: "Database Normalization",
        url: "https://youtu.be/GFQaEYEc8_8",
        type: "youtube",
        description: "1NF, 2NF, 3NF explained",
      },
    ],
  },
  {
    term: "sharding",
    definition:
      "Database architecture pattern that splits data across multiple database instances",
    category: "Interview",
    resources: [
      {
        id: "sharding-1",
        title: "Database Sharding Explained",
        url: "https://youtu.be/5faMjKuB9bc",
        type: "youtube",
        description: "Horizontal database partitioning",
      },
    ],
  },
];