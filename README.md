# JS Utility Library

A lightweight, zero-dependency JavaScript utility library built from scratch. No Lodash.

## About

This library is part of the **Frontend Engineering Internship — Month 1** weekly assignments. Each utility is hand-written with a focus on clean code, proper error handling, and production-ready standards.

## Project Structure

```
js-utility-library/
├── src/
│   └── arrays/
│       └── groupBy.js
├── package.json
└── README.md
```

## Utilities

### Arrays

| Utility   | Status | Description                                      |
|-----------|--------|--------------------------------------------------|
| `groupBy` | ✅ Done | Groups array items by a string key or callback   |
| `flatten` | 🔲 TODO | Flattens nested arrays to a specified depth       |
| `unique`  | ✅ Done | Returns unique values from an array               |
| `sortBy`  | 🔲 TODO | Sorts array items by a key or comparator          |
| `chunk`   | 🔲 TODO | Splits an array into chunks of a given size       |

### Objects

| Utility              | Status | Description                                  |
|----------------------|--------|----------------------------------------------|
| `deepClone`          | 🔲 TODO | Creates a deep copy of an object             |
| `objectComparison`   | 🔲 TODO | Deep equality check between two objects      |
| `transformations`    | 🔲 TODO | Object key/value transformation utilities    |

## Usage

```js
import groupBy from "./src/arrays/groupBy.js";

const users = [
  { name: "Ali", role: "dev" },
  { name: "Sara", role: "design" },
  { name: "Usman", role: "dev" },
];

// group by property name
groupBy(users, "role");
// { dev: [{ name: "Ali", ... }, { name: "Usman", ... }], design: [{ name: "Sara", ... }] }

// group by callback
groupBy(users, (user) => (user.name.length > 3 ? "long" : "short"));
// { short: [{ name: "Ali", ... }], long: [{ name: "Sara", ... }, { name: "Usman", ... }] }
```

## Setup

```bash
git clone <repo-url>
cd js-utility-library
```

No dependencies needed — pure vanilla JavaScript with ES modules.

## Tech Stack

- **Language:** JavaScript (ES6+)
- **Module System:** ES Modules
- **Dependencies:** None

## Author

**M-Awais**

## License

ISC
