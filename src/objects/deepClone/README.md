# deepClone

Creates a deep copy of any value (nested structures, Dates, RegExps).

---

## Import

```javascript
// Style 1: Main entry import (recommended)
import { deepClone } from "../../../index.js";

// Style 2: Direct import
import deepClone from "./deepClone.js";
```

---

## Signature

```typescript
function deepClone<T>(value: T): T
```

---

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value` | `any` | Yes | *None* | The value (primitive, array, object, date, regex) to clone. |

---

## Returns

- **Type**: `any`
- **Description**: A new value deeply cloned from the input. References to nested objects/arrays are not shared between the original and the clone.
- **Prototype Retention**: Copies prototype structures exactly. Cloned objects created with `Object.create(null)` will preserve their null prototype, avoiding unexpected property inheritance.

---

## Examples

### Basic Usage
```javascript
import deepClone from "./deepClone.js";

const original = {
  name: "Ali",
  details: { age: 25 }
};

const clone = deepClone(original);
clone.details.age = 30;

console.log(original.details.age); // => 25 (original remains unchanged)
console.log(clone.details.age);    // => 30
```

### Edge Cases
```javascript
import deepClone from "./deepClone.js";

// Clones Date and RegExp objects correctly (distinct instances, same contents)
const date = new Date("2026-07-17");
const dateClone = deepClone(date);

console.log(dateClone !== date); // => true
console.log(dateClone.getTime() === date.getTime()); // => true

// Primitives and null return as-is
deepClone(null); // => null
deepClone(42);   // => 42
```

### Real-World Scenario: Safe State Modifications in Frontend Frameworks
When working with Redux, React state, or Vue composition APIs, state must be treated as immutable. Mutating deeply nested properties directly can cause rendering components to miss state updates. `deepClone` allows you to make a completely safe copy of the state, apply modifications, and trigger updates.

```javascript
import deepClone from "./deepClone.js";

const originalState = {
  user: {
    profile: { firstName: "Ali", lastName: "Khan" },
    preferences: { theme: "light", notifications: true }
  }
};

// Create a deep copy of state
const nextState = deepClone(originalState);

// Safely mutate deep properties without modifying originalState
nextState.user.preferences.theme = "dark";

console.log(originalState.user.preferences.theme); // => "light" (safe!)
console.log(nextState.user.preferences.theme);     // => "dark"
```

---

## Error Handling

The utility does not throw errors for standard execution as it acts gracefully on all JavaScript primitives and standard objects. It safely handles `null`, `undefined`, arrays, dates, regExps, and nested objects.

---

## Notes / Related

- **Mutation**: This utility does not mutate the input argument. It creates a brand-new cloned copy.
- **Related Utilities**:
  - [objectComparison](../objectComparison/README.md)
