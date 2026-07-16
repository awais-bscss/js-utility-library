# JS Utility Library

A lightweight, zero-dependency JavaScript utility library built from scratch. No Lodash.

## About

This library is part of the **Frontend Engineering Internship — Month 1** weekly assignments. Each utility is hand-written with a focus on clean code, proper error handling, and production-ready standards.

## Project Structure

```
js-utility-library/
├── src/
│   ├── arrays/
│   │   ├── chunk.js
│   │   ├── flatten.js
│   │   ├── groupBy.js
│   │   └── unique.js
│   ├── objects/
│   │   └── deepClone.js
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
| `chunk`   | ✅ Done | Splits an array into chunks of a given size       |

### Objects

| Utility              | Status | Description                                  |
|----------------------|--------|----------------------------------------------|
| `deepClone`          | ✅ Done | Creates a deep copy of an object             |
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
import unique from "./src/arrays/unique.js";

// primitive deduplication
unique([1, 2, 2, 3, 3, 3]); // [1, 2, 3]

// unique by object key
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 1, name: "Ali" },
];
unique(users, "id"); // [{ id: 1, name: "Ali" }, { id: 2, name: "Sara" }]

// unique by callback
unique(["hello", "world", "hi"], (word) => word.length);
// ["hello", "hi"] — first occurrence of each length kept
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

```js
import chunk from "./src/arrays/chunk.js";

// chunk into pairs
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

// chunk into groups of 3
chunk([1, 2, 3, 4, 5, 6], 3); // [[1, 2, 3], [4, 5, 6]]

// default size = 1
chunk([1, 2, 3]); // [[1], [2], [3]]
```

```js
import deepClone from "./src/objects/deepClone.js";

const original = {
  name: "Ali",
  address: { city: "Lahore", zip: 54000 },
  hobbies: ["coding", "reading"],
  joined: new Date("2025-01-01"),
};

const clone = deepClone(original);
clone.address.city = "Karachi";
clone.hobbies.push("gaming");

console.log(original.address.city); // "Lahore" — original unchanged
console.log(original.hobbies); // ["coding", "reading"] — original unchanged
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
