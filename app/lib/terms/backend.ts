// app/lib/terms/backend.ts
import { Term } from "../types";

// Backend Terms
export const backendTerms: Term[] = [
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
    resources: [
      {
        id: "api-1",
        title: "APIs Explained for Beginners",
        url: "https://youtu.be/GZvSYJDk-us",
        type: "youtube",
        description: "Understanding APIs from basics to advanced concepts",
      },
      {
        id: "api-2",
        title: "How to Design APIs",
        url: "https://youtu.be/sMKsmZbpyjE",
        type: "youtube",
      },
    ],
  },
  {
    term: "database",
    definition: "An organized collection of structured information or data",
    category: "Backend",
    resources: [
      {
        id: "database-1",
        title: "Database Fundamentals Tutorial",
        url: "https://youtu.be/wR0jg0eQsZA",
        type: "youtube",
        description: "Learn database concepts from scratch",
      },
      {
        id: "database-2",
        title: "SQL vs NoSQL Databases",
        url: "https://youtu.be/ZS_kXvOeQ5Y",
        type: "youtube",
      },
    ],
  },
  {
    term: "http",
    definition:
      "HyperText Transfer Protocol - foundation of data communication on the web",
    category: "Backend",
    resources: [
      {
        id: "http-1",
        title: "HTTP Protocol Explained",
        url: "https://youtu.be/iYM2zFP3Zn0",
        type: "youtube",
        description: "Complete guide to HTTP methods and status codes",
      },
      {
        id: "http-2",
        title: "HTTP Headers and Methods",
        url: "https://youtu.be/rq60g1DEryg",
        type: "youtube",
      },
    ],
  },
  {
    term: "jwt",
    definition:
      "JSON Web Token - a compact way to securely transmit information between parties",
    category: "Backend",
    resources: [
      {
        id: "jwt-1",
        title: "JWT Authentication Tutorial",
        url: "https://youtu.be/mbsmsi7l3r4",
        type: "youtube",
        description: "Implementing JWT authentication from scratch",
      },
      {
        id: "jwt-2",
        title: "JWT vs Session Authentication",
        url: "https://youtu.be/UBUNrFtufWo",
        type: "youtube",
      },
    ],
  },
  {
    term: "nodejs",
    definition:
      "JavaScript runtime built on Chrome's V8 engine for building backend apps",
    category: "Backend",
    resources: [
      {
        id: "nodejs-1",
        title: "Node.js Tutorial for Beginners",
        url: "https://youtu.be/TlB_eWDSMt4",
        type: "youtube",
        description: "Complete Node.js course from basics to advanced",
      },
      {
        id: "nodejs-2",
        title: "Building APIs with Node.js",
        url: "https://youtu.be/pKd0Rpw7O48",
        type: "youtube",
      },
    ],
  },
  {
    term: "api endpoint",
    definition:
      "A specific URL where an API can be accessed by a client application",
    category: "Backend",
    resources: [
      {
        id: "endpoint-1",
        title: "API Endpoints Best Practices",
        url: "https://youtu.be/WXsD0ZgxjRw",
        type: "youtube",
        description: "Designing clean and efficient API endpoints",
      },
    ],
  },
  {
    term: "sql",
    definition:
      "Structured Query Language - used to interact with relational databases",
    category: "Backend",
    resources: [
      {
        id: "sql-1",
        title: "SQL Tutorial for Beginners",
        url: "https://youtu.be/HXV3zeQKqGY",
        type: "youtube",
        description: "Learn SQL from basics to advanced queries",
      },
      {
        id: "sql-2",
        title: "Advanced SQL Queries",
        url: "https://youtu.be/qw--VYLpxG4",
        type: "youtube",
      },
    ],
  },
  {
    term: "nosql",
    definition:
      "Databases that store data in formats other than relational tables",
    category: "Backend",
    resources: [
      {
        id: "nosql-1",
        title: "NoSQL Databases Explained",
        url: "https://youtu.be/0buKQHokLK8",
        type: "youtube",
        description: "Understanding different types of NoSQL databases",
      },
    ],
  },
  {
    term: "schema",
    definition:
      "Defines the structure of a database including tables and fields",
    category: "Backend",
    resources: [
      {
        id: "schema-1",
        title: "Database Schema Design Tutorial",
        url: "https://youtu.be/3BZz8R7mqu0",
        type: "youtube",
        description: "Best practices for designing database schemas",
      },
    ],
  },
  {
    term: "cors",
    definition:
      "Cross-Origin Resource Sharing - a security feature to control resource access across domains",
    category: "Backend",
    resources: [
      {
        id: "cors-1",
        title: "CORS Explained",
        url: "https://youtu.be/4KHiSt0oLJ0",
        type: "youtube",
        description: "Understanding and implementing CORS in APIs",
      },
    ],
  },
  {
    term: "ci",
    definition:
      "Continuous Integration - practice of automatically testing and merging code",
    category: "Backend",
    resources: [
      {
        id: "ci-1",
        title: "CI/CD Pipeline Tutorial",
        url: "https://youtu.be/scEDHsr3APg",
        type: "youtube",
        description: "Setting up continuous integration workflows",
      },
    ],
  },
  {
    term: "cd",
    definition:
      "Continuous Deployment - automatically deploying every change that passes tests",
    category: "Backend",
    resources: [
      {
        id: "cd-1",
        title: "Continuous Deployment Best Practices",
        url: "https://youtu.be/xSv_m3KhUO8",
        type: "youtube",
        description: "Implementing automated deployment pipelines",
      },
    ],
  },
  {
    term: "websocket",
    definition:
      "Protocol for two-way communication between client and server over a single connection",
    category: "Backend",
    resources: [
      {
        id: "websocket-1",
        title: "WebSockets Tutorial",
        url: "https://youtu.be/8ARodQ4Wlf4",
        type: "youtube",
        description: "Real-time communication with WebSockets",
      },
    ],
  },
  {
    term: "load balancer",
    definition: "Distributes incoming network traffic across multiple servers",
    category: "Backend",
    resources: [
      {
        id: "load-balancer-1",
        title: "Load Balancing Explained",
        url: "https://youtu.be/sCR3SAVdyCc",
        type: "youtube",
        description: "Understanding different load balancing strategies",
      },
    ],
  },
  {
    term: "graphql",
    definition:
      "A query language for APIs that allows clients to request exactly the data they need",
    category: "Backend",
    resources: [
      {
        id: "graphql-1",
        title: "GraphQL Tutorial for Beginners",
        url: "https://youtu.be/ZQL7tL2S0oQ",
        type: "youtube",
        description: "Learn GraphQL from basics to advanced concepts",
      },
      {
        id: "graphql-2",
        title: "GraphQL vs REST API",
        url: "https://youtu.be/yWzKJPw_VzM",
        type: "youtube",
      },
    ],
  },
  {
    term: "orm",
    definition:
      "Object-Relational Mapping - technique for converting data between incompatible systems",
    category: "Backend",
    resources: [
      {
        id: "orm-1",
        title: "ORM Tutorial - Prisma & Sequelize",
        url: "https://youtu.be/RebA5J-rlwg",
        type: "youtube",
        description: "Understanding ORMs with practical examples",
      },
    ],
  },
  {
    term: "mongodb",
    definition:
      "A document-oriented NoSQL database program using JSON-like documents",
    category: "Backend",
    resources: [
      {
        id: "mongodb-1",
        title: "MongoDB Tutorial for Beginners",
        url: "https://youtu.be/c2M-rlkkT5o",
        type: "youtube",
        description: "Complete MongoDB course with Node.js integration",
      },
      {
        id: "mongodb-2",
        title: "MongoDB Aggregation Pipeline",
        url: "https://youtu.be/A3jvoE0jGdE",
        type: "youtube",
      },
    ],
  },
  {
    term: "redis",
    definition:
      "An in-memory data structure store used as database, cache, and message broker",
    category: "Backend",
    resources: [
      {
        id: "redis-1",
        title: "Redis Tutorial",
        url: "https://youtu.be/jgpVdJB2sKQ",
        type: "youtube",
        description: "Caching and data storage with Redis",
      },
    ],
  },
  {
    term: "docker",
    definition:
      "Platform for developing, shipping, and running applications in containers",
    category: "Backend",
    resources: [
      {
        id: "docker-1",
        title: "Docker Tutorial for Beginners",
        url: "https://youtu.be/pTFZFxd4hOI",
        type: "youtube",
        description: "Complete Docker containerization guide",
      },
      {
        id: "docker-2",
        title: "Docker Compose Tutorial",
        url: "https://youtu.be/HG6yIjZapSA",
        type: "youtube",
      },
    ],
  },
  {
    term: "kubernetes",
    definition:
      "Container orchestration platform for automating deployment and scaling",
    category: "Backend",
    resources: [
      {
        id: "kubernetes-1",
        title: "Kubernetes Tutorial for Beginners",
        url: "https://youtu.be/X48VuDVv0do",
        type: "youtube",
        description: "Container orchestration with Kubernetes",
      },
    ],
  },
  {
    term: "microservices",
    definition:
      "Architectural approach where applications are built as a suite of small services",
    category: "Backend",
    resources: [
      {
        id: "microservices-1",
        title: "Microservices Architecture Tutorial",
        url: "https://youtu.be/rv4LlmLmVWk",
        type: "youtube",
        description: "Building scalable microservices applications",
      },
    ],
  },
  {
    term: "monolith",
    definition:
      "Software architecture where all components are interconnected and interdependent",
    category: "Backend",
    resources: [
      {
        id: "monolith-1",
        title: "Monolith vs Microservices",
        url: "https://youtu.be/GBTdnfD6s5Q",
        type: "youtube",
        description: "Understanding monolithic architecture patterns",
      },
    ],
  },
  {
    term: "serverless",
    definition:
      "Cloud computing model where the provider manages server infrastructure automatically",
    category: "Backend",
    resources: [
      {
        id: "serverless-1",
        title: "Serverless Architecture Tutorial",
        url: "https://youtu.be/vxJobGtqKVM",
        type: "youtube",
        description: "Building serverless applications with AWS Lambda",
      },
    ],
  },
  {
    term: "lambda",
    definition:
      "AWS service for running code without provisioning or managing servers",
    category: "Backend",
    resources: [
      {
        id: "lambda-1",
        title: "AWS Lambda Tutorial",
        url: "https://youtu.be/eOBq__h4OJ4",
        type: "youtube",
        description: "Building serverless functions with AWS Lambda",
      },
    ],
  },
  {
    term: "api gateway",
    definition:
      "Management tool for APIs that acts as a reverse proxy to accept API calls",
    category: "Backend",
    resources: [
      {
        id: "api-gateway-1",
        title: "API Gateway Tutorial",
        url: "https://youtu.be/LS5chiHuxLA",
        type: "youtube",
        description: "Managing APIs with AWS API Gateway",
      },
    ],
  },
  {
    term: "rate limiting",
    definition:
      "Technique to control the rate of traffic sent or received by a network",
    category: "Backend",
    resources: [
      {
        id: "rate-limiting-1",
        title: "API Rate Limiting Tutorial",
        url: "https://youtu.be/RwCxMDi6uKI",
        type: "youtube",
        description: "Implementing rate limiting in APIs",
      },
    ],
  },
  {
    term: "caching",
    definition:
      "Storing frequently accessed data in temporary storage for faster retrieval",
    category: "Backend",
    resources: [
      {
        id: "caching-1",
        title: "Caching Strategies Tutorial",
        url: "https://youtu.be/6FyXURRVmR0",
        type: "youtube",
        description: "Different caching patterns and implementations",
      },
    ],
  },
  {
    term: "cdn",
    definition:
      "Content Delivery Network - geographically distributed servers for faster content delivery",
    category: "Backend",
    resources: [
      {
        id: "cdn-1",
        title: "CDN Explained",
        url: "https://youtu.be/Bsq5cKkS33I",
        type: "youtube",
        description: "How CDNs improve website performance",
      },
    ],
  },
  {
    term: "ssl",
    definition:
      "Secure Sockets Layer - protocol for establishing encrypted links between servers and clients",
    category: "Backend",
    resources: [
      {
        id: "ssl-1",
        title: "SSL/TLS Tutorial",
        url: "https://youtu.be/SJJmoDZ3il8",
        type: "youtube",
        description: "Understanding SSL certificates and HTTPS",
      },
    ],
  },
  {
    term: "https",
    definition: "HTTP Secure - HTTP protocol with encryption using SSL/TLS",
    category: "Backend",
    resources: [
      {
        id: "https-1",
        title: "HTTPS Implementation Tutorial",
        url: "https://youtu.be/T4Df5_cojAs",
        type: "youtube",
        description: "Securing web applications with HTTPS",
      },
    ],
  },
  {
    term: "oauth",
    definition:
      "Open standard for access delegation commonly used for token-based authentication",
    category: "Backend",
    resources: [
      {
        id: "oauth-1",
        title: "OAuth 2.0 Tutorial",
        url: "https://youtu.be/996OiexHze0",
        type: "youtube",
        description: "Understanding OAuth 2.0 authentication flow",
      },
    ],
  },
  {
    term: "crud",
    definition:
      "Create, Read, Update, Delete - basic operations for persistent storage",
    category: "Backend",
    resources: [
      {
        id: "crud-1",
        title: "CRUD Operations Tutorial",
        url: "https://youtu.be/xh9p7PLqFfs",
        type: "youtube",
        description: "Building CRUD APIs with Node.js and MongoDB",
      },
    ],
  },
  {
    term: "indexing",
    definition:
      "Database optimization technique that improves query performance",
    category: "Backend",
    resources: [
      {
        id: "indexing-1",
        title: "Database Indexing Explained",
        url: "https://youtu.be/ITcOiLSfVJQ",
        type: "youtube",
        description: "How database indexes improve query performance",
      },
    ],
  },
  {
    term: "sharding",
    definition:
      "Database partitioning technique that splits data across multiple servers",
    category: "Backend",
    resources: [
      {
        id: "sharding-1",
        title: "Database Sharding Tutorial",
        url: "https://youtu.be/5faMjKuB9bc",
        type: "youtube",
        description: "Scaling databases with sharding strategies",
      },
    ],
  },
  // Additional New Backend Terms
  {
    term: "express",
    definition: "Fast, minimal web framework for Node.js applications",
    category: "Backend",
    resources: [
      {
        id: "express-1",
        title: "Express.js Tutorial for Beginners",
        url: "https://youtu.be/L72fhGm1tfE",
        type: "youtube",
        description: "Building web applications with Express.js",
      },
      {
        id: "express-2",
        title: "Express.js Advanced Concepts",
        url: "https://youtu.be/Oe421EPjeBE",
        type: "youtube",
      },
    ],
  },
  {
    term: "fastify",
    definition: "Fast and low overhead web framework for Node.js",
    category: "Backend",
    resources: [
      {
        id: "fastify-1",
        title: "Fastify Tutorial",
        url: "https://youtu.be/Lk-uVEVGxOA",
        type: "youtube",
        description: "High-performance APIs with Fastify",
      },
    ],
  },
  {
    term: "nestjs",
    definition:
      "Progressive Node.js framework for building scalable server-side applications",
    category: "Backend",
    resources: [
      {
        id: "nestjs-1",
        title: "NestJS Tutorial for Beginners",
        url: "https://youtu.be/GHTA143_b-s",
        type: "youtube",
        description: "Enterprise-grade Node.js applications with NestJS",
      },
    ],
  },
  {
    term: "postgresql",
    definition: "Advanced open-source relational database management system",
    category: "Backend",
    resources: [
      {
        id: "postgresql-1",
        title: "PostgreSQL Tutorial",
        url: "https://youtu.be/qw--VYLpxG4",
        type: "youtube",
        description: "Complete PostgreSQL course from basics to advanced",
      },
    ],
  },
  {
    term: "mysql",
    definition: "Popular open-source relational database management system",
    category: "Backend",
    resources: [
      {
        id: "mysql-1",
        title: "MySQL Tutorial for Beginners",
        url: "https://youtu.be/HXV3zeQKqGY",
        type: "youtube",
        description: "Learn MySQL database fundamentals",
      },
    ],
  },
  {
    term: "elasticsearch",
    definition:
      "Distributed search and analytics engine built on Apache Lucene",
    category: "Backend",
    resources: [
      {
        id: "elasticsearch-1",
        title: "Elasticsearch Tutorial",
        url: "https://youtu.be/kjN7mV5POXc",
        type: "youtube",
        description: "Full-text search with Elasticsearch",
      },
    ],
  },
  {
    term: "rabbitmq",
    definition:
      "Message broker software implementing Advanced Message Queuing Protocol",
    category: "Backend",
    resources: [
      {
        id: "rabbitmq-1",
        title: "RabbitMQ Tutorial",
        url: "https://youtu.be/7rkeORD4jSw",
        type: "youtube",
        description: "Message queuing with RabbitMQ",
      },
    ],
  },
  {
    term: "kafka",
    definition:
      "Distributed streaming platform for building real-time data pipelines",
    category: "Backend",
    resources: [
      {
        id: "kafka-1",
        title: "Apache Kafka Tutorial",
        url: "https://youtu.be/Ch5VhJzaoaI",
        type: "youtube",
        description: "Event streaming with Apache Kafka",
      },
    ],
  },
  {
    term: "nginx",
    definition:
      "Web server and reverse proxy server for HTTP, HTTPS, SMTP, POP3, and IMAP",
    category: "Backend",
    resources: [
      {
        id: "nginx-1",
        title: "Nginx Tutorial",
        url: "https://youtu.be/7VAI73roXaY",
        type: "youtube",
        description: "Web server configuration with Nginx",
      },
    ],
  },
  {
    term: "apache",
    definition: "Open-source cross-platform web server software",
    category: "Backend",
    resources: [
      {
        id: "apache-1",
        title: "Apache Web Server Tutorial",
        url: "https://youtu.be/kaaenHXO4t4",
        type: "youtube",
        description: "Setting up and configuring Apache server",
      },
    ],
  },
  {
    term: "pm2",
    definition: "Process manager for Node.js applications with load balancing",
    category: "Backend",
    resources: [
      {
        id: "pm2-1",
        title: "PM2 Tutorial",
        url: "https://youtu.be/SC-Ipl1naBE",
        type: "youtube",
        description: "Process management for Node.js with PM2",
      },
    ],
  },
  {
    term: "swagger",
    definition:
      "Open-source framework for API development with documentation tools",
    category: "Backend",
    resources: [
      {
        id: "swagger-1",
        title: "Swagger API Documentation Tutorial",
        url: "https://youtu.be/S8kmHtQeflo",
        type: "youtube",
        description: "Creating API documentation with Swagger",
      },
    ],
  },
  {
    term: "postman",
    definition: "Collaboration platform for API development and testing",
    category: "Backend",
    resources: [
      {
        id: "postman-1",
        title: "Postman Tutorial for Beginners",
        url: "https://youtu.be/VywxIQ2ZXw4",
        type: "youtube",
        description: "API testing and development with Postman",
      },
    ],
  },
  {
    term: "terraform",
    definition:
      "Infrastructure as Code tool for building, changing, and versioning infrastructure",
    category: "Backend",
    resources: [
      {
        id: "terraform-1",
        title: "Terraform Tutorial",
        url: "https://youtu.be/l5k1ai_GBDE",
        type: "youtube",
        description: "Infrastructure as Code with Terraform",
      },
    ],
  },
  {
    term: "ansible",
    definition:
      "Automation platform for configuration management and application deployment",
    category: "Backend",
    resources: [
      {
        id: "ansible-1",
        title: "Ansible Tutorial for Beginners",
        url: "https://youtu.be/9Ua2b06oAr4",
        type: "youtube",
        description: "Automation with Ansible playbooks",
      },
    ],
  },
  {
    term: "jenkins",
    definition:
      "Open-source automation server for implementing CI/CD pipelines",
    category: "Backend",
    resources: [
      {
        id: "jenkins-1",
        title: "Jenkins Tutorial",
        url: "https://youtu.be/FX322RVNGj4",
        type: "youtube",
        description: "CI/CD pipelines with Jenkins",
      },
    ],
  },
  {
    term: "github actions",
    definition:
      "CI/CD platform that allows automation of build, test, and deployment workflows",
    category: "Backend",
    resources: [
      {
        id: "github-actions-1",
        title: "GitHub Actions Tutorial",
        url: "https://youtu.be/R8_veQiYBjI",
        type: "youtube",
        description: "Automating workflows with GitHub Actions",
      },
    ],
  },
  {
    term: "aws",
    definition: "Amazon Web Services - comprehensive cloud computing platform",
    category: "Backend",
    resources: [
      {
        id: "aws-1",
        title: "AWS Tutorial for Beginners",
        url: "https://youtu.be/ulprqHHWlng",
        type: "youtube",
        description: "Getting started with Amazon Web Services",
      },
    ],
  },
  {
    term: "azure",
    definition: "Microsoft's cloud computing platform and infrastructure",
    category: "Backend",
    resources: [
      {
        id: "azure-1",
        title: "Azure Tutorial for Beginners",
        url: "https://youtu.be/NKEFWyqJ5XA",
        type: "youtube",
        description: "Microsoft Azure cloud services overview",
      },
    ],
  },
  {
    term: "gcp",
    definition: "Google Cloud Platform - suite of cloud computing services",
    category: "Backend",
    resources: [
      {
        id: "gcp-1",
        title: "Google Cloud Platform Tutorial",
        url: "https://youtu.be/kzKFuHk8ovk",
        type: "youtube",
        description: "Getting started with Google Cloud Platform",
      },
    ],
  },
  {
    term: "monitoring",
    definition: "Process of tracking application performance and system health",
    category: "Backend",
    resources: [
      {
        id: "monitoring-1",
        title: "Application Monitoring Tutorial",
        url: "https://youtu.be/Lm8VHh9oeJU",
        type: "youtube",
        description: "Monitoring applications with Prometheus and Grafana",
      },
    ],
  },
  {
    term: "logging",
    definition:
      "Recording events and errors that occur during application execution",
    category: "Backend",
    resources: [
      {
        id: "logging-1",
        title: "Application Logging Best Practices",
        url: "https://youtu.be/3RSEE4F-r7Y",
        type: "youtube",
        description: "Effective logging strategies for applications",
      },
    ],
  },
  {
    term: "testing",
    definition:
      "Process of evaluating software functionality to ensure it meets requirements",
    category: "Backend",
    resources: [
      {
        id: "testing-1",
        title: "API Testing Tutorial",
        url: "https://youtu.be/r4QZ8k53kp0",
        type: "youtube",
        description: "Unit and integration testing for APIs",
      },
    ],
  },
  {
    term: "security",
    definition:
      "Protecting applications and data from threats and vulnerabilities",
    category: "Backend",
    resources: [
      {
        id: "security-1",
        title: "API Security Best Practices",
        url: "https://youtu.be/tgZ5TQj6mNU",
        type: "youtube",
        description: "Securing APIs and backend applications",
      },
    ],
  },
  {
    term: "scalability",
    definition:
      "Ability of a system to handle increased load by adding resources",
    category: "Backend",
    resources: [
      {
        id: "scalability-1",
        title: "Scaling Applications Tutorial",
        url: "https://youtu.be/hnpzNAPiC0E",
        type: "youtube",
        description: "Horizontal and vertical scaling strategies",
      },
    ],
  },
];