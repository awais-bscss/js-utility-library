// deep equality check — works with nested objects, arrays, dates, regex, and NaN
function objectComparison(value, other) {
  // same reference or same primitive? done
  if (value === other) {
    return true;
  }

  // NaN is the only value that's not equal to itself, so we handle it separately
  if (typeof value === "number" && typeof other === "number" && isNaN(value) && isNaN(other)) {
    return true;
  }

  // if either side is null or not an object, and they weren't strictly equal above, bail out
  if (value === null || other === null || typeof value !== "object" || typeof other !== "object") {
    return false;
  }

  // dates — compare by timestamp
  if (value instanceof Date && other instanceof Date) {
    return value.getTime() === other.getTime();
  }

  // regex — compare source pattern and flags
  if (value instanceof RegExp && other instanceof RegExp) {
    return value.source === other.source && value.flags === other.flags;
  }

  // arrays — must be same length and every element must match
  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      if (!objectComparison(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }

  // one is array, the other isn't
  if (Array.isArray(value) || Array.isArray(other)) {
    return false;
  }

  // plain objects — compare all keys recursively
  const keysA = Object.keys(value);
  const keysB = Object.keys(other);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(other, key) || !objectComparison(value[key], other[key])) {
      return false;
    }
  }

  return true;
}

export default objectComparison;
