# flatten

Flattens nested arrays recursively to a specified depth.

---

## Import

```javascript
// Style 1: Main entry import (recommended)
import { flatten } from "../../../index.js";

// Style 2: Direct import
import flatten from "./flatten.js";
```

---

## Signature

```typescript
function flatten(array: any[], depth?: number): any[]
```

---

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `array` | `any[]` | Yes | *None* | The nested array to flatten. |
| `depth` | `number` | No | `Infinity` | The maximum depth to flatten. Must be a non-negative integer or Infinity. |

---

## Returns

- **Type**: `any[]`
- **Description**: A new array containing the flattened elements.

---

## Examples

### Basic Usage
```javascript
import flatten from "./flatten.js";

// Fully flatten nested arrays
flatten([1, [2, [3, [4]]]]);
// => [1, 2, 3, 4]

// Flatten to depth 1
flatten([1, [2, [3, [4]]]], 1);
// => [1, 2, [3, [4]]]
```

### Edge Cases
```javascript
import flatten from "./flatten.js";

// Depth 0 (returns a copy with no flattening)
flatten([1, [2, [3]]], 0);
// => [1, [2, [3]]]

// Empty array input
flatten([], 5);
// => []
```

### Real-World Scenario: Aggregating Multi-level Tag Lists
Imagine you have a list of posts where each post has an array of tags, and you need to get a flat list of all tags used across all posts.

```javascript
import flatten from "./flatten.js";

const posts = [
  { title: "JS Tips", tags: ["javascript", "webdev"] },
  { title: "CSS Grid", tags: ["css", "frontend"] },
  { title: "HTML5 Layouts", tags: ["html", ["webdev", "layout"]] } // Nested tag array
];

// Map posts to their tags (creates nested arrays)
const rawTags = posts.map(post => post.tags);
console.log(rawTags);
// => [ ["javascript", "webdev"], ["css", "frontend"], ["html", ["webdev", "layout"]] ]

// Flatten to get a unified tag list
const allTags = flatten(rawTags);
console.log(allTags);
// => [ "javascript", "webdev", "css", "frontend", "html", "webdev", "layout" ]
```

---

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `array` is not an array | `TypeError("Expected an array, received [type]")` |
| If `depth` is not a number | `TypeError("Depth must be a non-negative integer or Infinity")` |
| If `depth` is less than 0 | `TypeError("Depth must be a non-negative integer or Infinity")` |
| If `depth` is not an integer and not Infinity | `TypeError("Depth must be a non-negative integer or Infinity")` |

### Thrown Error Example
```javascript
try {
  flatten([1, [2]], 1.5);
} catch (error) {
  console.error(error.message);
  // => "Depth must be a non-negative integer or Infinity"
}
```

---

## Notes / Related

- **Mutation**: This utility does not mutate the input array. It returns a new array.
- **Related Utilities**:
  - [chunk](../chunk/README.md)
  - [unique](../unique/README.md)
