// Performs a deep comparison between two values to determine if they are equivalent
function objectComparison(value, other) {
  // 1. If values are strictly equal, they are equal (covers primitives and same reference)
  if (value === other) {
    return true;
  }

  // 2. Handle NaN comparison (NaN === NaN is false in JS)
  if (typeof value === "number" && typeof other === "number" && isNaN(value) && isNaN(other)) {
    return true;
  }

  // 3. If either is null or not an object (and they weren't strictly equal), they cannot be equal
  if (value === null || other === null || typeof value !== "object" || typeof other !== "object") {
    return false;
  }

  // 4. Handle Date objects comparison
  if (value instanceof Date && other instanceof Date) {
    return value.getTime() === other.getTime();
  }

  // 5. Handle RegExp objects comparison
  if (value instanceof RegExp && other instanceof RegExp) {
    return value.source === other.source && value.flags === other.flags;
  }

  // 6. Handle Array comparison
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

  // If one is an Array and the other is not
  if (Array.isArray(value) || Array.isArray(other)) {
    return false;
  }

  // 7. Handle plain objects comparison
  const keysA = Object.keys(value);
  const keysB = Object.keys(other);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check if all keys in A are present in B and their values are deeply equal
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(other, key) || !objectComparison(value[key], other[key])) {
      return false;
    }
  }

  return true;
}

export default objectComparison;
