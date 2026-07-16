// Sorts an array, optionally by a key or callback, with configurable order
function sort(array, key, order = "asc") {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array, received ${typeof array}`);
  }

  if (order !== "asc" && order !== "desc") {
    throw new TypeError(`Order must be "asc" or "desc", received "${order}"`);
  }

  const direction = order === "asc" ? 1 : -1;

  // no key provided, sort primitives directly
  if (key === undefined) {
    return [...array].sort((a, b) => {
      if (a < b) return -1 * direction;
      if (a > b) return 1 * direction;
      return 0;
    });
  }

  if (typeof key !== "string" && typeof key !== "function") {
    throw new TypeError("Key must be a string or a function");
  }

  const resolver = typeof key === "function" ? key : (item) => item?.[key];

  return [...array].sort((a, b) => {
    const valA = resolver(a);
    const valB = resolver(b);

    if (valA < valB) return -1 * direction;
    if (valA > valB) return 1 * direction;
    return 0;
  });
}

export default sort;
