// Creates a deep copy of an object, handling nested objects, arrays, dates, and regex
function deepClone(value) {
  // handle null and non-object types (primitives)
  if (value === null || typeof value !== "object") {
    return value;
  }

  // handle Date
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  // handle RegExp
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  // handle Array
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  // handle plain objects
  const cloned = {};

  for (const key of Object.keys(value)) {
    cloned[key] = deepClone(value[key]);
  }

  return cloned;
}

export default deepClone;
