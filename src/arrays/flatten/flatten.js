// flattens nested arrays up to a given depth (defaults to fully flat)
import { validateArray } from "../../helpers.js";

function flatten(array, depth = Infinity) {
  validateArray(array);

  if (typeof depth !== "number" || depth < 0 || (!Number.isInteger(depth) && depth !== Infinity)) {
    throw new TypeError("Depth must be a non-negative integer or Infinity");
  }

  const result = [];

  function flattenHelper(items, remaining) {
    for (const item of items) {
      if (Array.isArray(item) && remaining > 0) {
        flattenHelper(item, remaining - 1);
      } else {
        result.push(item);
      }
    }
  }

  flattenHelper(array, depth);
  return result;
}

export default flatten;
