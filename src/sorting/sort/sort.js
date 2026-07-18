// sorts an array with optional key/callback and asc/desc order
import { validateArray, validateKey, createResolver } from "../../helpers.js";

function sort(array, key, order = "asc") {
  validateArray(array);

  if (order !== "asc" && order !== "desc") {
    throw new TypeError(`Order must be "asc" or "desc", received "${order}"`);
  }

  const direction = order === "asc" ? 1 : -1;

  // no key? sort the raw values directly
  if (key === undefined) {
    return [...array].sort((a, b) => {
      if (a < b) return -1 * direction;
      if (a > b) return 1 * direction;
      return 0;
    });
  }

  validateKey(key);

  const resolver = createResolver(key);

  return [...array].sort((a, b) => {
    const valA = resolver(a);
    const valB = resolver(b);

    if (valA < valB) return -1 * direction;
    if (valA > valB) return 1 * direction;
    return 0;
  });
}

export default sort;
