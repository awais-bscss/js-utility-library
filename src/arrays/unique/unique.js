// removes duplicates from an array — can use a key or callback for objects
import { validateArray, validateKey, createResolver } from "../../helpers.js";

function unique(array, key) {
  validateArray(array);

  // simple case: no key, just use Set to drop duplicates
  if (key === undefined) {
    return [...new Set(array)];
  }

  validateKey(key);

  const resolver = createResolver(key);
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
