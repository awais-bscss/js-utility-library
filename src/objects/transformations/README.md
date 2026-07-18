# transformations

Object key/value transformation utilities (`mapKeys`, `mapValues`, `pick`, `omit`).

---

# mapKeys

Transforms object keys using a custom mapper function.

## Import

```javascript
// Style 1: Main entry import (recommended)
import { mapKeys } from "../../../index.js";

// Style 2: Direct import
import { mapKeys } from "./transformations.js";
```

## Signature

```typescript
function mapKeys(object: object, iteratee: (value: any, key: string, object: object) => string): object
```

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `object` | `object` | Yes | *None* | The object to map keys from. |
| `iteratee` | `Function` | Yes | *None* | Key mapper resolver invoked per iteration. Signature: `(value, key, object) => string`. |

## Returns

- **Type**: `object`
- **Description**: A new object containing the mapped keys with the original values.

## Examples

### Basic Usage
```javascript
import { mapKeys } from "./transformations.js";

const user = { firstName: "Ali", lastName: "Khan" };
mapKeys(user, (val, key) => key.toUpperCase());
// => { FIRSTNAME: "Ali", LASTNAME: "Khan" }
```

### Edge Cases
```javascript
import { mapKeys } from "./transformations.js";

// Returning duplicate keys inside iteratee (last mapped value wins)
mapKeys({ a: 1, b: 2 }, () => "duplicate");
// => { duplicate: 2 }

// Empty object mapping
mapKeys({}, () => "key");
// => {}
```

### Real-World Scenario: Renaming API Responses (snake_case to camelCase)
When receiving response payloads from a backend database configured in `snake_case`, you may want to transform the keys to `camelCase` for clean frontend JS coding standards.

```javascript
import { mapKeys } from "./transformations.js";

const dbResponse = {
  first_name: "Ali",
  last_name: "Khan",
  user_email: "ali@example.com"
};

const toCamelCase = (str) => str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

const camelCaseUser = mapKeys(dbResponse, (val, key) => toCamelCase(key));
console.log(camelCaseUser);
// => { firstName: 'Ali', lastName: 'Khan', userEmail: 'ali@example.com' }
```

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `object` is not an object or is `null` | `TypeError("Expected an object, received [type]")` |
| If `iteratee` is not a function | `TypeError("Iteratee must be a function")` |

### Thrown Error Example
```javascript
try {
  mapKeys(null, () => {});
} catch (error) {
  console.error(error.message);
  // => "Expected an object, received object"
}
```

## Notes / Related

- **Mutation**: This utility does not mutate the input object. It returns a new mapped object.
- **Related Utilities**:
  - [mapValues](#mapvalues)
  - [pick](#pick)
  - [omit](#omit)

---

# mapValues

Transforms object values using a custom mapper function.

## Import

```javascript
// Style 1: Main entry import (recommended)
import { mapValues } from "../../../index.js";

// Style 2: Direct import
import { mapValues } from "./transformations.js";
```

## Signature

```typescript
function mapValues(object: object, iteratee: (value: any, key: string, object: object) => any): object
```

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `object` | `object` | Yes | *None* | The object to map values from. |
| `iteratee` | `Function` | Yes | *None* | Value mapper resolver invoked per iteration. Signature: `(value, key, object) => any`. |

## Returns

- **Type**: `object`
- **Description**: A new object containing the original keys with the newly mapped values.

## Examples

### Basic Usage
```javascript
import { mapValues } from "./transformations.js";

const user = { firstName: "Ali", age: 25 };
mapValues(user, (val) => typeof val === "string" ? val.toUpperCase() : val * 2);
// => { firstName: "ALI", age: 50 }
```

### Edge Cases
```javascript
import { mapValues } from "./transformations.js";

// Empty object mapping
mapValues({}, () => 42);
// => {}
```

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `object` is not an object or is `null` | `TypeError("Expected an object, received [type]")` |
| If `iteratee` is not a function | `TypeError("Iteratee must be a function")` |

### Thrown Error Example
```javascript
try {
  mapValues({ a: 1 }, "not-a-func");
} catch (error) {
  console.error(error.message);
  // => "Iteratee must be a function"
}
```

## Notes / Related

- **Mutation**: This utility does not mutate the input object. It returns a new mapped object.
- **Related Utilities**:
  - [mapKeys](#mapkeys)
  - [pick](#pick)
  - [omit](#omit)

---

# pick

Creates a new object containing only the specified keys.

## Import

```javascript
// Style 1: Main entry import (recommended)
import { pick } from "../../../index.js";

// Style 2: Direct import
import { pick } from "./transformations.js";
```

## Signature

```typescript
function pick(object: object, keys: string[]): object
```

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `object` | `object` | Yes | *None* | The source object to copy properties from. |
| `keys` | `string[]` | Yes | *None* | Array of string keys specifying which fields to keep. |

## Returns

- **Type**: `object`
- **Description**: A new object containing only the matched properties that existed on the source object.

## Examples

### Basic Usage
```javascript
import { pick } from "./transformations.js";

const user = { firstName: "Ali", lastName: "Khan", age: 25 };
pick(user, ["firstName", "age"]);
// => { firstName: "Ali", age: 25 }
```

### Edge Cases
```javascript
import { pick } from "./transformations.js";

// Picking keys that do not exist on the object
pick({ a: 1 }, ["b", "c"]);
// => {}

// Empty keys list
pick({ a: 1 }, []);
// => {}
```

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `object` is not an object or is `null` | `TypeError("Expected an object, received [type]")` |
| If `keys` is not an array | `TypeError("Keys must be an array of strings")` |

### Thrown Error Example
```javascript
try {
  pick({ a: 1 }, "a");
} catch (error) {
  console.error(error.message);
  // => "Keys must be an array of strings"
}
```

## Notes / Related

- **Mutation**: This utility does not mutate the input object. It returns a filtered object copy.
- **Related Utilities**:
  - [mapKeys](#mapkeys)
  - [mapValues](#mapvalues)
  - [omit](#omit)

---

# omit

Creates a new object excluding the specified keys.

## Import

```javascript
// Style 1: Main entry import (recommended)
import { omit } from "../../../index.js";

// Style 2: Direct import
import { omit } from "./transformations.js";
```

## Signature

```typescript
function omit(object: object, keys: string[]): object
```

## Parameters

| Parameter | Type | Required? | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `object` | `object` | Yes | *None* | The source object to filter. |
| `keys` | `string[]` | Yes | *None* | Array of string keys specifying which fields to discard. |

## Returns

- **Type**: `object`
- **Description**: A new object containing all properties of the original object except those specified in `keys`.

## Examples

### Basic Usage
```javascript
import { omit } from "./transformations.js";

const user = { firstName: "Ali", lastName: "Khan", age: 25 };
omit(user, ["age"]);
// => { firstName: "Ali", lastName: "Khan" }
```

### Edge Cases
```javascript
import { omit } from "./transformations.js";

// Omitting keys that do not exist on the object
omit({ a: 1 }, ["b", "c"]);
// => { a: 1 }

// Empty keys list (returns a full shallow copy)
omit({ a: 1 }, []);
// => { a: 1 }
```

### Real-World Scenario: Sanitizing Object Payloads (Stripping Sensitive Keys)
When returning user settings or profile details from a database to a public API endpoint, you must discard sensitive fields (like hashed passwords, salt, internal IDs) to prevent security leaks.

```javascript
import { omit } from "./transformations.js";

const userRecord = {
  id: "usr_99827",
  username: "ali_developer",
  email: "ali@example.com",
  passwordHash: "8f7a6c9d0b...",
  internalMetadata: { lastIp: "192.168.1.1" }
};

// Discard sensitive details
const publicProfile = omit(userRecord, ["passwordHash", "internalMetadata"]);
console.log(publicProfile);
// => { id: 'usr_99827', username: 'ali_developer', email: 'ali@example.com' }
```

## Error Handling

The utility performs runtime assertions and throws a `TypeError` for invalid parameters.

| Condition | Error Thrown |
| :--- | :--- |
| If `object` is not an object or is `null` | `TypeError("Expected an object, received [type]")` |
| If `keys` is not an array | `TypeError("Keys must be an array of strings")` |

### Thrown Error Example
```javascript
try {
  omit({ a: 1 }, "a");
} catch (error) {
  console.error(error.message);
  // => "Keys must be an array of strings"
}
```

## Notes / Related

- **Mutation**: This utility does not mutate the input object. It returns a filtered object copy.
- **Related Utilities**:
  - [mapKeys](#mapkeys)
  - [mapValues](#mapvalues)
  - [pick](#pick)
