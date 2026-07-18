# objectComparison

Performs a deep equality comparison between two values.

---

## Import

```javascript
// Style 1: Main entry import (recommended)
import { objectComparison } from "../../../index.js";

// Style 2: Direct import
import objectComparison from "./objectComparison.js";
```

---

## Signature

```typescript
function objectComparison(value: any, other: any): boolean
```

---

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value` | `any` | Yes | *None* | The first value to compare. |
| `other` | `any` | Yes | *None* | The second value to compare. |

---

## Returns

- **Type**: `boolean`
- **Description**: Returns `true` if the values are deeply equal, and `false` otherwise. Handles NaNs, mixed types, Date structures, RegExp instances, arrays, and nested object fields recursively.

---

## Examples

### Basic Usage
```javascript
import objectComparison from "./objectComparison.js";

const objA = { name: "Ali", details: { age: 25 } };
const objB = { name: "Ali", details: { age: 25 } };
const objC = { name: "Ali", details: { age: 26 } };

objectComparison(objA, objB); // => true
objectComparison(objA, objC); // => false
```

### Edge Cases
```javascript
import objectComparison from "./objectComparison.js";

// Comparing NaN (which usually fails strict equality check)
objectComparison(NaN, NaN);
// => true

// Comparing Date & RegExp elements
objectComparison(new Date("2026-07-17"), new Date("2026-07-17")); // => true
objectComparison(/abc/gi, /abc/g); // => false (mismatched regex flags)

// Type safety checks (mismatched types don't fail, they return false)
objectComparison([1, 2], { 0: 1, 1: 2 }); // => false
```

### Real-World Scenario: Checking for Form Modifications (Dirty State)
In web applications, you often want to enable a "Save Changes" button or prompt the user before they leave a page if they have modified any fields. You can compare the current form state to the clean state loaded from the server.

```javascript
import objectComparison from "./objectComparison.js";

const savedSettings = {
  theme: "dark",
  notifications: { email: true, push: false },
  favorites: ["coding", "gaming"]
};

// User changes form input fields
const currentFormState = {
  theme: "dark",
  notifications: { email: true, push: true }, // Changed push from false to true
  favorites: ["coding", "gaming"]
};

const hasUnsavedChanges = !objectComparison(savedSettings, currentFormState);
console.log("Enable Save Button?", hasUnsavedChanges);
// => Enable Save Button? true
```

---

## Error Handling

The utility does not throw errors for standard execution as it acts gracefully on all JavaScript primitives and standard objects. Mismatched structures will return `false` instead of crashing.

---

## Notes / Related

- **Mutation**: This utility does not mutate either input argument.
- **Related Utilities**:
  - [deepClone](../deepClone/README.md)
