# chunk

Splits an array or string into chunks of a given size.

---

## Import

```javascript
// Style 1: Main entry import (recommended)
import { chunk } from "../../../index.js";

// Style 2: Direct import
import chunk from "./chunk.js";
```

---

## Signature

```typescript
function chunk<T>(array: T[] | string, size?: number): T[][] | string[]
```

---

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `array` | `any[] \| string` | Yes | *None* | The array or string to divide into chunks. |
| `size` | `number` | No | `1` | The size of each chunk. Must be a positive integer greater than or equal to `1`. |

---

## Returns

- **Type**: `any[][] | string[]`
- **Description**: A new array containing the divided chunks. If the input cannot be divided evenly, the last chunk will contain the remaining items (i.e. it will be smaller than `size`).

---

## Examples

### Basic Usage
```javascript
import chunk from "./chunk.js";

chunk([1, 2, 3, 4], 2);
// => [[1, 2], [3, 4]]

chunk("hello", 2);
// => ["he", "ll", "o"]
```

### Edge Cases
```javascript
import chunk from "./chunk.js";

// Size is greater than array/string length
chunk([1, 2], 5);
// => [[1, 2]]

// Empty array input
chunk([], 3);
// => []
```

### Real-World Scenario: Batch API Requests / Pagination
When rendering lists of products or sending bulk analytics updates to a server, you often need to slice lists into smaller batches to prevent performance lags or API request size limits.

```javascript
import chunk from "./chunk.js";

const productIds = [101, 102, 103, 104, 105, 106, 107];
const BATCH_SIZE = 3;

// Chunk productIds to render them page-by-page (3 products per page)
const pages = chunk(productIds, BATCH_SIZE);
console.log(pages);
// => [ [101, 102, 103], [104, 105, 106], [107] ]

// Iterate pages to send chunked requests to an analytics endpoint
pages.forEach((batch, index) => {
  console.log(`Sending batch ${index + 1}:`, batch);
  // sendBatchToAnalyticsEndpoint(batch);
});
```

---

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `array` is not an array or a string | `TypeError("Expected an array or string, received [type]")` |
| If `size` is not a number | `TypeError("Size must be a positive integer")` |
| If `size` is less than 1 | `TypeError("Size must be a positive integer")` |
| If `size` is not a whole number (float) | `TypeError("Size must be a positive integer")` |

### Thrown Error Example
```javascript
try {
  chunk([1, 2, 3], 1.5);
} catch (error) {
  console.error(error.message);
  // => "Size must be a positive integer"
}
```

---

## Notes / Related

- **Mutation**: This utility does not mutate the input array or string. It returns a new array copy.
- **Related Utilities**:
  - [flatten](../flatten/README.md)
  - [unique](../unique/README.md)
