// recursively clones a value — handles nested objects, arrays, dates, regex
function deepClone(value) {
  // primitives and null just get returned as-is
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  // keep the same prototype (important for null-prototype objects from groupBy etc.)
  const cloned = Object.create(Object.getPrototypeOf(value));

  for (const key of Object.keys(value)) {
    cloned[key] = deepClone(value[key]);
  }

  return cloned;
}

export default deepClone;
