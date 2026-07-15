// Groups array items by a given key (string property or callback function)
function groupBy(array, key) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array, received ${typeof array}`);
  }

  if (typeof key !== "string" && typeof key !== "function") {
    throw new TypeError("Key must be a string or a function");
  }

  // if key is a function use it directly, otherwise access the property
  const resolver = typeof key === "function" ? key : (item) => item[key];

  return array.reduce((grouped, item) => {
    const groupKey = resolver(item);

    // create the group if it doesn't exist yet
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }

    grouped[groupKey].push(item);

    return grouped;
  }, Object.create(null));
}

export default groupBy;
