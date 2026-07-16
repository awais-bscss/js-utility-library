// Object key/value transformation utilities

// Transform object keys using a custom mapper function
export function mapKeys(object, iteratee) {
  if (object === null || typeof object !== "object") {
    throw new TypeError(`Expected an object, received ${typeof object}`);
  }
  if (typeof iteratee !== "function") {
    throw new TypeError("Iteratee must be a function");
  }

  const result = {};
  for (const key of Object.keys(object)) {
    const value = object[key];
    const newKey = iteratee(value, key, object);
    result[newKey] = value;
  }
  return result;
}

// Transform object values using a custom mapper function
export function mapValues(object, iteratee) {
  if (object === null || typeof object !== "object") {
    throw new TypeError(`Expected an object, received ${typeof object}`);
  }
  if (typeof iteratee !== "function") {
    throw new TypeError("Iteratee must be a function");
  }

  const result = {};
  for (const key of Object.keys(object)) {
    const value = object[key];
    result[key] = iteratee(value, key, object);
  }
  return result;
}

// Create a new object containing only the specified keys
export function pick(object, keys) {
  if (object === null || typeof object !== "object") {
    throw new TypeError(`Expected an object, received ${typeof object}`);
  }
  if (!Array.isArray(keys)) {
    throw new TypeError("Keys must be an array of strings");
  }

  const result = {};
  for (const key of keys) {
    if (key in object) {
      result[key] = object[key];
    }
  }
  return result;
}

// Create a new object excluding the specified keys
export function omit(object, keys) {
  if (object === null || typeof object !== "object") {
    throw new TypeError(`Expected an object, received ${typeof object}`);
  }
  if (!Array.isArray(keys)) {
    throw new TypeError("Keys must be an array of strings");
  }

  const result = {};
  const omitSet = new Set(keys);
  for (const key of Object.keys(object)) {
    if (!omitSet.has(key)) {
      result[key] = object[key];
    }
  }
  return result;
}

export default {
  mapKeys,
  mapValues,
  pick,
  omit,
};
