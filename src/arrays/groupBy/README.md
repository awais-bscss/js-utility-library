# groupBy

Groups array items by a key or custom callback function.

---

## Import

```javascript
// Style 1: Main entry import (recommended)
import { groupBy } from "../../../index.js";

// Style 2: Direct import
import groupBy from "./groupBy.js";
```

---

## Signature

```typescript
function groupBy<T>(array: T[], key: string | ((item: T) => any)): Record<string, T[]>
```

---

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `array` | `any[]` | Yes | *None* | The array to process and group. |
| `key` | `string \| Function` | Yes | *None* | The string key property or callback function resolver to determine the group name. |

---

## Returns

- **Type**: `Record<string, any[]>`
- **Description**: A `null`-prototype object mapping resolved group keys to arrays of matching elements from the input array. The null prototype ensures safe lookup keys without namespace conflicts with standard JavaScript object properties (e.g. `constructor`, `toString`).

---

## Examples

### Basic Usage
```javascript
import groupBy from "./groupBy.js";

const users = [
  { name: "Ali", role: "dev" },
  { name: "Sara", role: "design" },
  { name: "Usman", role: "dev" }
];

groupBy(users, "role");
// => { dev: [{ name: "Ali", ... }, { name: "Usman", ... }], design: [{ name: "Sara", ... }] }
```

### Edge Cases
```javascript
import groupBy from "./groupBy.js";

// Grouping numbers using Math.floor callback
groupBy([1.2, 2.1, 2.4], Math.floor);
// => { '1': [1.2], '2': [2.1, 2.4] }

// Empty array input
groupBy([], "id");
// => {}
```

### Real-World Scenario: Grouping and Summing E-Commerce Transactions
Suppose you have a list of purchase transactions and want to group them by department to calculate the total spend in each.

```javascript
import groupBy from "./groupBy.js";

const transactions = [
  { department: "Electronics", amount: 299 },
  { department: "Books", amount: 15 },
  { department: "Electronics", amount: 45 },
  { department: "Clothing", amount: 120 },
  { department: "Books", amount: 35 }
];

// Group transactions by department name
const grouped = groupBy(transactions, "department");
console.log(grouped);
/*
=> {
  Electronics: [ { department: 'Electronics', amount: 299 }, { department: 'Electronics', amount: 45 } ],
  Books: [ { department: 'Books', amount: 15 }, { department: 'Books', amount: 35 } ],
  Clothing: [ { department: 'Clothing', amount: 120 } ]
}
*/

// Calculate total spend per department
for (const dept of Object.keys(grouped)) {
  const total = grouped[dept].reduce((sum, t) => sum + t.amount, 0);
  console.log(`${dept}: $${total}`);
}
// Outputs:
// Electronics: $344
// Books: $50
// Clothing: $120
```

---

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `array` is not an array | `TypeError("Expected an array, received [type]")` |
| If `key` is not a string or a function | `TypeError("Key must be a string or a function")` |

### Thrown Error Example
```javascript
try {
  groupBy([1, 2], 123);
} catch (error) {
  console.error(error.message);
  // => "Key must be a string or a function"
}
```

---

## Notes / Related

- **Mutation**: This utility does not mutate the input array. It creates a brand-new map object.
- **Related Utilities**:
  - [unique](../unique/README.md)
