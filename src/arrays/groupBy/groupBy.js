// groups array items by a property name or a callback
import { validateArray, validateKey, createResolver } from "../../helpers.js";

function groupBy(array, key) {
  validateArray(array);
  validateKey(key);

  const resolver = createResolver(key);

  // using Object.create(null) so the result has no inherited keys like hasOwnProperty
  return array.reduce((grouped, item) => {
    const groupKey = resolver(item);

    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }

    grouped[groupKey].push(item);

    return grouped;
  }, Object.create(null));
}

export default groupBy;
