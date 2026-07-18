# unique

Returns unique values from an array, optionally by key/callback.

---

## Import

```javascript
// Style 1: Main entry import (recommended)
import { unique } from "../../../index.js";

// Style 2: Direct import
import unique from "./unique.js";
```

---

## Signature

```typescript
function unique<T>(array: T[], key?: string | ((item: T) => any)): T[]
```

---

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `array` | `any[]` | Yes | *None* | The array to filter and deduplicate. |
| `key` | `string \| Function` | No | `undefined` | String property name or callback function resolver determining uniqueness criteria. |

---

## Returns

- **Type**: `any[]`
- **Description**: A new array containing only the unique elements from the original array. If duplicates exist, only the first encountered element is kept.

---

## Examples

### Basic Usage
```javascript
import unique from "./unique.js";

// Simple primitive deduplication
unique([1, 2, 2, 3, 3, 3, 1]);
// => [1, 2, 3]
```

### Edge Cases
```javascript
import unique from "./unique.js";

// Deduplication based on custom callback length
unique(["hello", "world", "hi"], (word) => word.length);
// => ["hello", "hi"]

// Empty array input
unique([]);
// => []
```

### Real-World Scenario: Deduplicating Customer Email Lists
Suppose you have a mailing list gathered from multiple signup forms. Some users signed up multiple times with differing casing or details. You want to extract a list of unique subscribers based on their email address (ignoring letter casing).

```javascript
import unique from "./unique.js";

const subscribers = [
  { name: "Ali", email: "Ali@example.com" },
  { name: "Sara", email: "sara@example.com" },
  { name: "Ali K.", email: "ali@example.com" }, // Duplicate email with different casing/name
  { name: "Usman", email: "usman@example.com" }
];

// Deduplicate subscribers using a case-insensitive email check callback
const cleanMailingList = unique(subscribers, (user) => user.email.toLowerCase());
console.log(cleanMailingList);
/*
=> [
  { name: 'Ali', email: 'Ali@example.com' },
  { name: 'Sara', email: 'sara@example.com' },
  { name: 'Usman', email: 'usman@example.com' }
]
*/
```

---

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `array` is not an array | `TypeError("Expected an array, received [type]")` |
| If `key` is provided but is not a string or function | `TypeError("Key must be a string or a function")` |

### Thrown Error Example
```javascript
try {
  unique([1, 2], {});
} catch (error) {
  console.error(error.message);
  // => "Key must be a string or a function"
}
```

---

## Notes / Related

- **Mutation**: This utility does not mutate the input array. It returns a new deduplicated array copy.
- **Related Utilities**:
  - [groupBy](../groupBy/README.md)
