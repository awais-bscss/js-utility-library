// common checks that kept repeating in groupBy, unique, sort, etc.
// pulled them out here so we don't copy-paste the same lines everywhere

export function validateArray(value) {
  if (!Array.isArray(value)) {
    throw new TypeError(`Expected an array, received ${typeof value}`);
  }
}

export function validateKey(key) {
  if (typeof key !== "string" && typeof key !== "function") {
    throw new TypeError("Key must be a string or a function");
  }
}

// turns a string key like "name" into (item) => item.name
// if it's already a function, just pass it through
export function createResolver(key) {
  return typeof key === "function" ? key : (item) => item?.[key];
}
