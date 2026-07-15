# JS Utility Library

A lightweight, zero-dependency JavaScript utility library built from scratch. No Lodash.

## About

This library is part of the **Frontend Engineering Internship — Month 1** weekly assignments. Each utility is hand-written with a focus on clean code, proper error handling, and production-ready standards.

## Project Structure

```
js-utility-library/
├── src/
│   ├── arrays/
│   │   ├── flatten.js
│   │   ├── groupBy.js
│   │   └── unique.js
│   └── sorting/
│       └── sort.js
├── package.json
└── README.md
```

## Utilities

### Arrays

| Utility   | Status | Description                                      |
|-----------|--------|--------------------------------------------------|
| `groupBy` | ✅ Done | Groups array items by a string key or callback   |
| `flatten` | ✅ Done | Flattens nested arrays to a specified depth       |
| `unique`  | ✅ Done | Returns unique values from an array               |
| `sortBy`  | ✅ Done | Sorts array items by a key or comparator (moved to `sorting/`) |
| `chunk`   | 🔲 TODO | Splits an array into chunks of a given size       |

### Objects

| Utility              | Status | Description                                  |
|----------------------|--------|----------------------------------------------|
| `deepClone`          | 🔲 TODO | Creates a deep copy of an object             |
| `objectComparison`   | 🔲 TODO | Deep equality check between two objects      |
| `transformations`    | 🔲 TODO | Object key/value transformation utilities    |

### Sorting

| Utility | Status | Description                                          |
|---------|--------|------------------------------------------------------|
| `sort`  | ✅ Done | Sorts arrays by key/callback with asc/desc order     |

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

```js
import sort from "./src/sorting/sort.js";

// sort primitives
sort([3, 1, 2]); // [1, 2, 3]

// sort descending
sort([3, 1, 2], undefined, "desc"); // [3, 2, 1]

// sort by object key
const users = [
  { name: "Usman", age: 28 },
  { name: "Ali", age: 22 },
  { name: "Sara", age: 25 },
];
sort(users, "age"); // sorted by age ascending

// sort by callback
sort(users, (u) => u.name.length); // sorted by name length
```

```js
import flatten from "./src/arrays/flatten.js";

// fully flatten
flatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4]

// flatten to depth 1
flatten([1, [2, [3, [4]]]], 1); // [1, 2, [3, [4]]]

// flatten to depth 2
flatten([1, [2, [3, [4]]]], 2); // [1, 2, 3, [4]]
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
