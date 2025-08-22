export const react = [
  {
    question: "What is the default method for updating state in React class components?",
    options: ["setState()", "updateState()", "changeState()", "modifyState()"],
    correctOption: "setState()"
  },
  {
    question: "Which hook is used for managing state in a functional component?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    correctOption: "useState"
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctOption: "useEffect"
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A lightweight copy of the real DOM",
      "The same as the real DOM",
      "A server-side database",
      "A JavaScript API for HTML"
    ],
    correctOption: "A lightweight copy of the real DOM"
  },
  {
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A templating engine",
      "A CSS preprocessor",
      "A JavaScript framework"
    ],
    correctOption: "A syntax extension for JavaScript"
  },
  {
    question: "What is the default port for React development server?",
    options: ["3000", "8000", "5000", "8080"],
    correctOption: "3000"
  },
  {
    question: "Which command is used to create a new React app?",
    options: [
      "npx create-react-app myApp",
      "npm install react",
      "npm start react-app",
      "react-create myApp"
    ],
    correctOption: "npx create-react-app myApp"
  },
  {
    question: "What does useRef hook return?",
    options: ["A mutable ref object", "A DOM element", "A function", "An array"],
    correctOption: "A mutable ref object"
  },
  {
    question: "What is the purpose of useMemo?",
    options: [
      "To memoize expensive calculations",
      "To store component state",
      "To fetch data",
      "To update the DOM"
    ],
    correctOption: "To memoize expensive calculations"
  },
  {
    question: "Which hook is used to access context in functional components?",
    options: ["useContext", "useEffect", "useState", "useReducer"],
    correctOption: "useContext"
  },
  {
    question: "What does React.StrictMode do?",
    options: [
      "Checks for potential problems in the application",
      "Improves performance",
      "Prevents re-rendering",
      "Creates strict types"
    ],
    correctOption: "Checks for potential problems in the application"
  },
  {
    question: "What is the default behavior of forms in React?",
    options: [
      "They reload the page on submit",
      "They prevent default submission",
      "They use AJAX by default",
      "They store data in localStorage"
    ],
    correctOption: "They reload the page on submit"
  },
  {
    question: "Which lifecycle method is called after the component is rendered?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentDidUpdate",
      "componentWillUnmount"
    ],
    correctOption: "componentDidMount"
  },
  {
    question: "What is prop drilling?",
    options: [
      "Passing props through multiple layers of components",
      "Accessing props without passing them",
      "Copying props between components",
      "Deleting props in child components"
    ],
    correctOption: "Passing props through multiple layers of components"
  },
  {
    question: "Which hook replaces componentDidMount, componentDidUpdate, and componentWillUnmount?",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    correctOption: "useEffect"
  },
  {
    question: "What is the purpose of keys in React lists?",
    options: [
      "To help React identify which items have changed",
      "To make elements unique for CSS",
      "To encrypt data",
      "To set focus on elements"
    ],
    correctOption: "To help React identify which items have changed"
  },
  {
    question: "What happens when setState is called?",
    options: [
      "React schedules a re-render",
      "React refreshes the page",
      "React stores the state in localStorage",
      "Nothing happens until restart"
    ],
    correctOption: "React schedules a re-render"
  },
  {
    question: "What is a controlled component?",
    options: [
      "An input element whose value is controlled by React state",
      "An element that controls other components",
      "A component with restricted access",
      "A static HTML element"
    ],
    correctOption: "An input element whose value is controlled by React state"
  },
  {
    question: "What is the default value of useState if no argument is passed?",
    options: ["undefined", "null", "0", "false"],
    correctOption: "undefined"
  },
  {
    question: "Which hook is used for performance optimization in rendering?",
    options: ["useMemo", "useState", "useEffect", "useRef"],
    correctOption: "useMemo"
  },
  {
    question: "What is the main advantage of React over plain JavaScript?",
    options: [
      "Efficient UI updates using virtual DOM",
      "Better database handling",
      "Automatic API integration",
      "Built-in authentication"
    ],
    correctOption: "Efficient UI updates using virtual DOM"
  },
  {
    question: "What will happen if you call setState inside render method?",
    options: [
      "It will cause an infinite loop",
      "It will not update the state",
      "It will throw an error",
      "It will re-render once"
    ],
    correctOption: "It will cause an infinite loop"
  },
  {
    question: "What is lifting state up in React?",
    options: [
      "Moving state to a common parent component",
      "Moving state to child components",
      "Converting local state to global",
      "Storing state in Redux"
    ],
    correctOption: "Moving state to a common parent component"
  },
  {
    question: "What is React.Fragment used for?",
    options: [
      "Grouping elements without adding extra DOM nodes",
      "Storing state",
      "Debugging",
      "Adding animations"
    ],
    correctOption: "Grouping elements without adding extra DOM nodes"
  },
  {
    question: "Which hook is used to store mutable values without causing re-render?",
    options: ["useRef", "useState", "useEffect", "useReducer"],
    correctOption: "useRef"
  },
  {
    question: "What is the default behavior of React events?",
    options: [
      "They are wrapped in SyntheticEvent",
      "They are native browser events",
      "They execute immediately",
      "They bypass the DOM"
    ],
    correctOption: "They are wrapped in SyntheticEvent"
  },
  {
    question: "What is the return value of ReactDOM.render()?",
    options: ["The mounted component", "void", "A DOM element", "A Promise"],
    correctOption: "The mounted component"
  },
  {
    question: "Which hook should be used to fetch data when component mounts?",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    correctOption: "useEffect"
  },
  {
    question: "What is the main difference between React and ReactDOM?",
    options: [
      "React is the library for building UI, ReactDOM is for rendering to DOM",
      "React is server-side, ReactDOM is client-side",
      "React handles CSS, ReactDOM handles JS",
      "React is for backend, ReactDOM is for frontend"
    ],
    correctOption: "React is the library for building UI, ReactDOM is for rendering to DOM"
  },
  {
    question: "What is the role of Redux in a React app?",
    options: [
      "State management",
      "Styling",
      "Routing",
      "API calls"
    ],
    correctOption: "State management"
  },
  {
    question: "What is a higher-order component (HOC) in React?",
    options: [
      "A function that takes a component and returns a new component",
      "A class that extends React.Component",
      "A hook for managing state",
      "A component with more privileges"
    ],
    correctOption: "A function that takes a component and returns a new component"
  },
  {
    question: "Which React method is used to update the DOM after a state or prop change?",
    options: [
      "Reconciliation",
      "Diffing",
      "Hydration",
      "Mounting"
    ],
    correctOption: "Reconciliation"
  },
  {
    question: "What is the default type of button in HTML forms inside React?",
    options: ["submit", "button", "reset", "none"],
    correctOption: "submit"
  },
  {
    question: "Which hook allows you to create custom hooks?",
    options: [
      "Any function starting with 'use'",
      "useCustomHook",
      "useState",
      "useEffect"
    ],
    correctOption: "Any function starting with 'use'"
  },
  {
    question: "What is the main advantage of using useReducer over useState?",
    options: [
      "Better for complex state logic",
      "Faster rendering",
      "Easier syntax",
      "Built-in API calls"
    ],
    correctOption: "Better for complex state logic"
  },
  {
    question: "Which package is used for routing in React?",
    options: [
      "react-router-dom",
      "react-navigation",
      "react-path",
      "react-route"
    ],
    correctOption: "react-router-dom"
  },
  {
    question: "Which hook is used to update the document title in React?",
    options: ["useEffect", "useTitle", "useDocument", "useHead"],
    correctOption: "useEffect"
  },
  {
    question: "What is the difference between a controlled and uncontrolled component?",
    options: [
      "Controlled components are managed by state, uncontrolled use refs",
      "Controlled use refs, uncontrolled use state",
      "Controlled are faster",
      "Uncontrolled store data in Redux"
    ],
    correctOption: "Controlled components are managed by state, uncontrolled use refs"
  }
]


export const nodejs = [
  {
    question: "Which command is used to initialize a new Node.js project?",
    options: ["npm init", "node start", "npm start", "npm install"],
    correctOption: "npm init"
  },
  {
    question: "Which module is used to create a server in Node.js?",
    options: ["http", "fs", "url", "path"],
    correctOption: "http"
  },
  {
    question: "Which statement is true about Node.js?",
    options: [
      "It is single-threaded",
      "It is multi-threaded",
      "It is only for frontend development",
      "It cannot handle concurrent requests"
    ],
    correctOption: "It is single-threaded"
  },
  {
    question: "Which of the following is a built-in module in Node.js?",
    options: ["fs", "express", "mongoose", "axios"],
    correctOption: "fs"
  },
  {
    question: "Which function is used to include modules in Node.js?",
    options: ["require()", "import()", "include()", "load()"],
    correctOption: "require()"
  },
  {
    question: "What is the default file name for the main entry point in a Node.js app?",
    options: ["index.js", "server.js", "main.js", "app.js"],
    correctOption: "index.js"
  },
  {
    question: "Which command is used to install a package as a development dependency?",
    options: ["npm install package --save-dev", "npm install package", "npm dev package", "npm install-dev"],
    correctOption: "npm install package --save-dev"
  },
  {
    question: "Which object in Node.js is used to handle events?",
    options: ["EventEmitter", "Events", "Emitter", "NodeEvents"],
    correctOption: "EventEmitter"
  },
  {
    question: "Which method is used to read files asynchronously in Node.js?",
    options: ["fs.readFile", "fs.read", "fs.readAsync", "fs.getFile"],
    correctOption: "fs.readFile"
  },
  {
    question: "Which environment variable is used to set the Node.js environment?",
    options: ["NODE_ENV", "ENV_NODE", "NODE_MODE", "ENVIRONMENT"],
    correctOption: "NODE_ENV"
  }
]

export const expressjs = [
  {
    question: "What method is used to define a GET route in Express?",
    options: ["app.get()", "app.route()", "app.fetch()", "app.getRoute()"],
    correctOption: "app.get()"
  },
  {
    question: "Which middleware is commonly used to parse JSON in Express?",
    options: ["express.json()", "express.urlencoded()", "express.text()", "express.raw()"],
    correctOption: "express.json()"
  },
  {
    question: "What is the default port used in most Express.js apps?",
    options: ["3000", "8080", "5000", "4000"],
    correctOption: "3000"
  },
  {
    question: "Which method is used to define middleware in Express?",
    options: ["app.use()", "app.middleware()", "app.add()", "app.route()"],
    correctOption: "app.use()"
  },
  {
    question: "What is the purpose of next() in Express middleware?",
    options: [
      "To pass control to the next middleware",
      "To stop the server",
      "To send a response",
      "To restart the server"
    ],
    correctOption: "To pass control to the next middleware"
  },
  {
    question: "Which HTTP method is used for creating a resource in REST API?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctOption: "POST"
  },
  {
    question: "How do you send JSON data in an Express response?",
    options: ["res.json()", "res.sendJSON()", "res.send()", "res.data()"],
    correctOption: "res.json()"
  },
  {
    question: "Which Express method is used to serve static files?",
    options: ["express.static()", "express.serve()", "app.static()", "app.serve()"],
    correctOption: "express.static()"
  },
  {
    question: "How do you define a route parameter in Express?",
    options: ["/user/:id", "/user/id", "/user?id", "/user#id"],
    correctOption: "/user/:id"
  },
  {
    question: "Which function in Express is called when no route matches?",
    options: [
      "Error-handling middleware",
      "404 middleware",
      "Default middleware",
      "NoRouteHandler"
    ],
    correctOption: "Error-handling middleware"
  }
]

export const mongodb = [
  {
    question: "Which data format does MongoDB use to store documents?",
    options: ["JSON", "XML", "BSON", "CSV"],
    correctOption: "BSON"
  },
  {
    question: "Which command is used to display all databases in MongoDB shell?",
    options: ["show dbs", "list databases", "db.show()", "display dbs"],
    correctOption: "show dbs"
  },
  {
    question: "What is the default port for MongoDB?",
    options: ["27017", "3306", "5432", "8080"],
    correctOption: "27017"
  },
  {
    question: "Which method is used to insert a single document in MongoDB?",
    options: ["insertOne()", "insert()", "insertDocument()", "addOne()"],
    correctOption: "insertOne()"
  },
  {
    question: "What is the MongoDB equivalent of a table in SQL?",
    options: ["Document", "Collection", "Schema", "Record"],
    correctOption: "Collection"
  },
  {
    question: "Which method is used to update multiple documents in MongoDB?",
    options: ["updateMany()", "updateAll()", "update()", "modifyMany()"],
    correctOption: "updateMany()"
  },
  {
    question: "Which method is used to delete a single document?",
    options: ["deleteOne()", "removeOne()", "delete()", "dropOne()"],
    correctOption: "deleteOne()"
  },
  {
    question: "Which MongoDB method returns all documents in a collection?",
    options: ["find()", "findAll()", "getAll()", "listDocuments()"],
    correctOption: "find()"
  },
  {
    question: "In MongoDB, `_id` is:",
    options: [
      "A primary key field for every document",
      "A random number",
      "Optional field",
      "A timestamp only"
    ],
    correctOption: "A primary key field for every document"
  },
  {
    question: "Which method is used to sort query results in MongoDB?",
    options: ["sort()", "orderBy()", "arrange()", "order()"],
    correctOption: "sort()"
  },
  {
    question: "Which aggregation stage is used to filter documents?",
    options: ["$match", "$filter", "$group", "$find"],
    correctOption: "$match"
  },
  {
    question: "What will `db.collection.drop()` do?",
    options: [
      "Delete all documents in the collection",
      "Delete the entire collection",
      "Delete only indexes",
      "Backup the collection"
    ],
    correctOption: "Delete the entire collection"
  },
  {
    question: "Which index is created by default on each collection?",
    options: ["_id", "primary", "first", "auto_index"],
    correctOption: "_id"
  },
  {
    question: "Which MongoDB method is used to limit the number of documents returned?",
    options: ["limit()", "max()", "restrict()", "slice()"],
    correctOption: "limit()"
  },
  {
    question: "What is the maximum size of a BSON document in MongoDB?",
    options: ["16 MB", "64 MB", "1 GB", "2 GB"],
    correctOption: "16 MB"
  },
  {
    question: "Which command is used to switch to a different database?",
    options: ["use <dbName>", "switch <dbName>", "select <dbName>", "db.use(<dbName>)"],
    correctOption: "use <dbName>"
  },
  {
    question: "Which method is used to create an index?",
    options: ["createIndex()", "makeIndex()", "addIndex()", "index()"],
    correctOption: "createIndex()"
  },
  {
    question: "Which aggregation stage is used to group documents?",
    options: ["$group", "$aggregate", "$match", "$project"],
    correctOption: "$group"
  },
  {
    question: "Which MongoDB operator is used for pattern matching in queries?",
    options: ["$regex", "$match", "$pattern", "$search"],
    correctOption: "$regex"
  },
  {
    question: "What does `db.collection.countDocuments()` return?",
    options: [
      "The number of documents matching a query",
      "The total database size",
      "The number of collections",
      "The number of indexes"
    ],
    correctOption: "The number of documents matching a query"
  }
]


export const django = [
  {
    question: "What is Django primarily used for?",
    options: [
      "Desktop application development",
      "Web application development",
      "Mobile app development",
      "Game development"
    ],
    correctAnswer: "Web application development"
  },
  {
    question: "Which command creates a new Django project?",
    options: [
      "django-admin startproject",
      "django-admin startapp",
      "python manage.py runserver",
      "django-admin createproject"
    ],
    correctAnswer: "django-admin startproject"
  },
  {
    question: "Which file contains the configuration for a Django project?",
    options: [
      "urls.py",
      "settings.py",
      "models.py",
      "views.py"
    ],
    correctAnswer: "settings.py"
  },
  {
    question: "Which Django ORM method is used to retrieve all records?",
    options: [
      "all()",
      "get()",
      "filter()",
      "values()"
    ],
    correctAnswer: "all()"
  },
  {
    question: "Which HTTP method is used when submitting a form?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "POST"
  },
  {
    question: "What is the default database used by Django?",
    options: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "MongoDB"
    ],
    correctAnswer: "SQLite"
  },
  {
    question: "Which Django file maps URLs to views?",
    options: [
      "views.py",
      "urls.py",
      "models.py",
      "forms.py"
    ],
    correctAnswer: "urls.py"
  },
  {
    question: "What is the purpose of migrations in Django?",
    options: [
      "Move files between servers",
      "Update database schema",
      "Backup database",
      "Transfer templates"
    ],
    correctAnswer: "Update database schema"
  },
  {
    question: "Which decorator is used to create a class-based view?",
    options: [
      "@classmethod",
      "@staticmethod",
      "@login_required",
      "No decorator needed"
    ],
    correctAnswer: "No decorator needed"
  },
  {
    question: "Which command applies migrations in Django?",
    options: [
      "python manage.py migrate",
      "python manage.py makemigrations",
      "python manage.py runserver",
      "python manage.py createsuperuser"
    ],
    correctAnswer: "python manage.py migrate"
  },
  {
    question: "Which template engine is used by default in Django?",
    options: [
      "Jinja2",
      "Django Template Language",
      "Mako",
      "Mustache"
    ],
    correctAnswer: "Django Template Language"
  },
  {
    question: "Which method is used to retrieve a single object in Django ORM?",
    options: [
      "get()",
      "filter()",
      "all()",
      "first()"
    ],
    correctAnswer: "get()"
  },
  {
    question: "What does CSRF stand for in Django?",
    options: [
      "Cross-Site Request Forgery",
      "Cross-Site Resource Fetching",
      "Client-Side Request Format",
      "Central Server Request Function"
    ],
    correctAnswer: "Cross-Site Request Forgery"
  },
  {
    question: "Which command is used to start a Django app?",
    options: [
      "django-admin startapp",
      "django-admin startproject",
      "python manage.py startproject",
      "python manage.py runserver"
    ],
    correctAnswer: "django-admin startapp"
  },
  {
    question: "Which middleware handles user authentication in Django?",
    options: [
      "AuthenticationMiddleware",
      "SessionMiddleware",
      "SecurityMiddleware",
      "CacheMiddleware"
    ],
    correctAnswer: "AuthenticationMiddleware"
  },
  {
    question: "Which HTTP status code is returned for a successful GET request in Django?",
    options: [
      "200",
      "201",
      "404",
      "500"
    ],
    correctAnswer: "200"
  },
  {
    question: "Which Django ORM method is used to delete an object?",
    options: [
      "remove()",
      "delete()",
      "destroy()",
      "drop()"
    ],
    correctAnswer: "delete()"
  },
  {
    question: "How do you run the Django development server?",
    options: [
      "python manage.py runserver",
      "django-admin startserver",
      "python runserver.py",
      "manage.py start"
    ],
    correctAnswer: "python manage.py runserver"
  },
  {
    question: "Which file defines the models in a Django app?",
    options: [
      "models.py",
      "views.py",
      "urls.py",
      "admin.py"
    ],
    correctAnswer: "models.py"
  },
  {
    question: "What is the default port for Django's development server?",
    options: [
      "8000",
      "8080",
      "5000",
      "3000"
    ],
    correctAnswer: "8000"
  }
]

export const postgresql = [
  {
    question: "PostgreSQL is an example of a:",
    options: [
      "NoSQL Database",
      "Relational Database",
      "In-memory Database",
      "Document Store"
    ],
    correctAnswer: "Relational Database"
  },
  {
    question: "Which command is used to create a database in PostgreSQL?",
    options: [
      "CREATE DATABASE",
      "NEW DATABASE",
      "MAKE DATABASE",
      "INIT DATABASE"
    ],
    correctAnswer: "CREATE DATABASE"
  },
  {
    question: "What is the default port for PostgreSQL?",
    options: [
      "3306",
      "5432",
      "1521",
      "27017"
    ],
    correctAnswer: "5432"
  },
  {
    question: "Which PostgreSQL command lists all databases?",
    options: [
      "\\l",
      "\\d",
      "\\db",
      "\\dt"
    ],
    correctAnswer: "\\l"
  },
  {
    question: "What does ACID stand for in PostgreSQL?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Concurrency, Isolation, Durability",
      "Access, Control, Integrity, Data",
      "Atomic, Consistent, Isolated, Distributed"
    ],
    correctAnswer: "Atomicity, Consistency, Isolation, Durability"
  },
  {
    question: "Which command is used to delete a table in PostgreSQL?",
    options: [
      "REMOVE TABLE",
      "DROP TABLE",
      "DELETE TABLE",
      "DESTROY TABLE"
    ],
    correctAnswer: "DROP TABLE"
  },
  {
    question: "Which PostgreSQL data type is used to store JSON data?",
    options: [
      "JSON",
      "JSONB",
      "TEXT",
      "BLOB"
    ],
    correctAnswer: "JSONB"
  },
  {
    question: "Which clause is used to filter rows in SQL?",
    options: [
      "WHERE",
      "HAVING",
      "FILTER",
      "SEARCH"
    ],
    correctAnswer: "WHERE"
  },
  {
    question: "Which PostgreSQL function returns the current date?",
    options: [
      "CURRENT_DATE",
      "NOW()",
      "GETDATE()",
      "DATE()"
    ],
    correctAnswer: "CURRENT_DATE"
  },
  {
    question: "Which keyword is used to sort results in SQL?",
    options: [
      "ORDER BY",
      "SORT BY",
      "GROUP BY",
      "ALIGN BY"
    ],
    correctAnswer: "ORDER BY"
  },
  {
    question: "Which constraint ensures uniqueness in a column?",
    options: [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK"
    ],
    correctAnswer: "UNIQUE"
  },
  {
    question: "Which operator is used for pattern matching in PostgreSQL?",
    options: [
      "LIKE",
      "MATCH",
      "REGEX",
      "SEARCH"
    ],
    correctAnswer: "LIKE"
  },
  {
    question: "Which PostgreSQL statement adds a new column to a table?",
    options: [
      "ALTER TABLE ADD COLUMN",
      "ADD COLUMN TO TABLE",
      "INSERT COLUMN",
      "MODIFY TABLE"
    ],
    correctAnswer: "ALTER TABLE ADD COLUMN"
  },
  {
    question: "Which join returns only matching rows from both tables?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN"
    ],
    correctAnswer: "INNER JOIN"
  },
  {
    question: "Which keyword removes duplicate rows from results?",
    options: [
      "DISTINCT",
      "UNIQUE",
      "FILTER",
      "REMOVE DUPLICATES"
    ],
    correctAnswer: "DISTINCT"
  },
  {
    question: "Which aggregate function counts rows?",
    options: [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MAX()"
    ],
    correctAnswer: "COUNT()"
  },
  {
    question: "What is the maximum size of a row in PostgreSQL?",
    options: [
      "8 KB",
      "1 GB",
      "2 KB",
      "Unlimited"
    ],
    correctAnswer: "1 GB"
  },
  {
    question: "Which PostgreSQL index type supports full-text search?",
    options: [
      "GIN",
      "BTREE",
      "HASH",
      "SP-GiST"
    ],
    correctAnswer: "GIN"
  },
  {
    question: "Which function is used to combine strings in PostgreSQL?",
    options: [
      "CONCAT()",
      "MERGE()",
      "JOIN()",
      "APPEND()"
    ],
    correctAnswer: "CONCAT()"
  },
  {
    question: "Which keyword is used to group rows with the same values?",
    options: [
      "GROUP BY",
      "ORDER BY",
      "FILTER BY",
      "UNION BY"
    ],
    correctAnswer: "GROUP BY"
  }
]