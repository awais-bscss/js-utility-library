// Returns unique values from an array, optionally by a key or callback
function unique(array, key) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array, received ${typeof array}`);
  }

  // no key provided, use Set for primitive deduplication
  if (key === undefined) {
    return [...new Set(array)];
  }

  if (typeof key !== "string" && typeof key !== "function") {
    throw new TypeError("Key must be a string or a function");
  }

  const resolver = typeof key === "function" ? key : (item) => item?.[key];
  const seen = new Set();

  return array.filter((item) => {
    const value = resolver(item);

    if (seen.has(value)) {
      return false;
    }

    seen.add(value);
    return true;
  });
}

export default unique;
