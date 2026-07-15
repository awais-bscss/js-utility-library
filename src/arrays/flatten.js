// Flattens nested arrays to a specified depth (default: Infinity)
function flatten(array, depth = Infinity) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array, received ${typeof array}`);
  }

  if (typeof depth !== "number" || depth < 0) {
    throw new TypeError("Depth must be a non-negative number");
  }

  const result = [];

  function flattenHelper(items, currentDepth) {
    for (const item of items) {
      if (Array.isArray(item) && currentDepth > 0) {
        flattenHelper(item, currentDepth - 1);
      } else {
        result.push(item);
      }
    }
  }

  flattenHelper(array, depth);
  return result;
}

export default flatten;
