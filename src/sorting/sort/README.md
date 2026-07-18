# sort

Sorts arrays by key or callback with configurable order.

---

## Import

```javascript
// Style 1: Main entry import (recommended)
import { sort } from "../../../index.js";

// Style 2: Direct import
import sort from "./sort.js";
```

---

## Signature

```typescript
function sort<T>(array: T[], key?: string | ((item: T) => any), order?: "asc" | "desc"): T[]
```

---

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `array` | `any[]` | Yes | *None* | The target array to sort. |
| `key` | `string \| Function` | No | `undefined` | Key property name or callback function resolver to determine sorting value. If undefined, sorts array elements directly as primitives. |
| `order` | `"asc" \| "desc"` | No | `"asc"` | Sort order direction. |

---

## Returns

- **Type**: `any[]`
- **Description**: A new sorted array. The sorting is stable where possible, and elements are shallow-copied into the returned array.

---

## Examples

### Basic Usage
```javascript
import sort from "./sort.js";

// Sort primitive numbers ascending
sort([3, 1, 2]);
// => [1, 2, 3]

// Sort primitive numbers descending
sort([3, 1, 2], undefined, "desc");
// => [3, 2, 1]
```

### Edge Cases
```javascript
import sort from "./sort.js";

// Sort objects using key callback descending
const items = [{ name: "Usman" }, { name: "Ali" }, { name: "Sara" }];
sort(items, (item) => item.name.length, "desc");
// => [{ name: "Usman" }, { name: "Sara" }, { name: "Ali" }] (Sorted by name length descending)

// Empty array input
sort([]);
// => []
```

### Real-World Scenario: E-Commerce Product Sorting
Suppose you have a list of products in an e-commerce catalog, and you need to sort them dynamically by price (ascending/descending) or by custom logic, like sorting by name length or rating.

```javascript
import sort from "./sort.js";

const catalog = [
  { id: 1, title: "Wireless Mouse", price: 25 },
  { id: 2, title: "Mechanical Keyboard", price: 85 },
  { id: 3, title: "HD Monitor", price: 150 },
  { id: 4, title: "USB Cable", price: 10 }
];

// Sort products by price ascending
const cheapToExpensive = sort(catalog, "price");
console.log(cheapToExpensive);
/*
=> [
  { id: 4, title: 'USB Cable', price: 10 },
  { id: 1, title: 'Wireless Mouse', price: 25 },
  { id: 2, title: 'Mechanical Keyboard', price: 85 },
  { id: 3, title: 'HD Monitor', price: 150 }
]
*/

// Sort products by title descending
const alphaSorted = sort(catalog, (p) => p.title, "desc");
console.log(alphaSorted);
```

---

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `array` is not an array | `TypeError("Expected an array, received [type]")` |
| If `order` is not "asc" or "desc" | `TypeError('Order must be "asc" or "desc", received "[val]"')` |
| If `key` is provided but is not a string or function | `TypeError("Key must be a string or a function")` |

### Thrown Error Example
```javascript
try {
  sort([1, 2], undefined, "invalid-order");
} catch (error) {
  console.error(error.message);
  // => "Order must be \"asc\" or \"desc\", received \"invalid-order\""
}
```

---

## Notes / Related

- **Mutation**: This utility does not mutate the input array. It returns a new sorted array copy.
- **Related Utilities**:
  - [unique](../../arrays/unique/README.md)
