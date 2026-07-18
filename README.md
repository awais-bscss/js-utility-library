# JS Utility Library

A collection of lightweight, vanilla JavaScript utility functions. Written from scratch with a focus on code readability, solid error handling, and zero external dependencies.

This library is a great fit if you need common array, object, and sorting helpers but want to avoid the bundle size bloat of Lodash.

## Features

- **Zero Dependencies**: Pure vanilla JavaScript to keep your bundles small.
- **Modern ESM**: Built using ES Modules for native tree-shaking support in Vite, Webpack, and Rollup.
- **Strict Validations**: Rejects invalid parameters early by throwing standard TypeErrors instead of failing silently.
- **Modular Design**: Every utility is isolated in its own folder with its own code and documentation.

## Project Structure

```text
js-utility-library/
├── examples/
│   ├── chunk.js
│   ├── deepClone.js
│   ├── flatten.js
│   ├── groupBy.js
│   ├── objectComparison.js
│   ├── sort.js
│   ├── transformations.js
│   └── unique.js
├── src/
│   ├── helpers.js
│   ├── arrays/
│   │   ├── chunk/
│   │   │   ├── chunk.js
│   │   │   └── README.md
│   │   ├── flatten/
│   │   │   ├── flatten.js
│   │   │   └── README.md
│   │   ├── groupBy/
│   │   │   ├── groupBy.js
│   │   │   └── README.md
│   │   └── unique/
│   │       ├── unique.js
│   │       └── README.md
│   ├── objects/
│   │   ├── deepClone/
│   │   │   ├── deepClone.js
│   │   │   └── README.md
│   │   ├── objectComparison/
│   │   │   ├── objectComparison.js
│   │   │   └── README.md
│   │   └── transformations/
│   │       ├── transformations.js
│   │       └── README.md
│   └── sorting/
│       └── sort/
│           ├── sort.js
│           └── README.md
├── index.js
├── package.json
└── README.md
```

## API Reference

### Arrays

| Utility | Description | Documentation |
| :--- | :--- | :--- |
| `chunk` | Splits an array or string into chunks of a given size. | [Readme](./src/arrays/chunk/README.md) |
| `flatten` | Flattens nested arrays recursively to a specified depth. | [Readme](./src/arrays/flatten/README.md) |
| `groupBy` | Groups array items by a key or custom callback function. | [Readme](./src/arrays/groupBy/README.md) |
| `unique` | Returns unique values from an array, optionally by key/callback. | [Readme](./src/arrays/unique/README.md) |

### Objects

| Utility | Description | Documentation |
| :--- | :--- | :--- |
| `deepClone` | Creates a deep copy of any value (nested structures, Dates, RegExps). | [Readme](./src/objects/deepClone/README.md) |
| `objectComparison` | Performs a deep equality comparison between two values. | [Readme](./src/objects/objectComparison/README.md) |
| `mapKeys` | Transforms object keys using a custom mapper function. | [Readme](./src/objects/transformations/README.md#mapkeys) |
| `mapValues` | Transforms object values using a custom mapper function. | [Readme](./src/objects/transformations/README.md#mapvalues) |
| `pick` | Creates a new object containing only the specified keys. | [Readme](./src/objects/transformations/README.md#pick) |
| `omit` | Creates a new object excluding the specified keys. | [Readme](./src/objects/transformations/README.md#omit) |

### Sorting

| Utility | Description | Documentation |
| :--- | :--- | :--- |
| `sort` | Sorts arrays by key or callback with configurable order. | [Readme](./src/sorting/sort/README.md) |

## Installation

Clone the repository directly into your project:

```bash
git clone https://github.com/M-Awais/js-utility-library.git
cd js-utility-library
```

Since there are no dependencies, you can start importing it immediately in a Node.js or browser environment.

## Usage

### Main Entry Import (Recommended)
Import multiple helpers from the root entry point:

```js
import { chunk, sort } from "./index.js";

const arr = [3, 1, 2];
const sorted = sort(arr); // [1, 2, 3]
```

### Direct Import
Import specific utilities individually to keep your bundle footprint as small as possible:

```js
import chunk from "./src/arrays/chunk/chunk.js";

const parts = chunk("hello", 2); // ["he", "ll", "o"]
```

## Quick Examples

### Chunk
```js
chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]
```

### Flatten
```js
flatten([1, [2, [3, [4]]]], 2);
// => [1, 2, 3, [4]]
```

### GroupBy
```js
groupBy([{ name: "Ali", role: "dev" }, { name: "Sara", role: "design" }], "role");
// => { dev: [...], design: [...] }
```

### Unique
```js
unique([1, 2, 2, 3, 1]); 
// => [1, 2, 3]
```

### DeepClone
```js
const copy = deepClone({ a: { b: 2 }, date: new Date() });
```

### ObjectComparison
```js
objectComparison({ a: 1, b: [2] }, { a: 1, b: [2] });
// => true
```

### mapKeys
```js
mapKeys({ a: 1, b: 2 }, (val, key) => key.toUpperCase());
// => { A: 1, B: 2 }
```

### mapValues
```js
mapValues({ a: 1, b: 2 }, (val) => val * 10);
// => { a: 10, b: 20 }
```

### pick
```js
pick({ a: 1, b: 2, c: 3 }, ["a", "c"]);
// => { a: 1, c: 3 }
```

### omit
```js
omit({ a: 1, b: 2, c: 3 }, ["b"]);
// => { a: 1, c: 3 }
```

### Sort
```js
sort([3, 1, 2], undefined, "desc");
// => [3, 2, 1]
```

## Error Handling

All utilities validate parameters at runtime. If you pass an unexpected argument (e.g., passing a number to an array parameter, or an invalid sorting direction), the utility will throw a standard `TypeError` immediately with a helpful error message.

## License

This project is licensed under the ISC License. See `package.json` for details.
