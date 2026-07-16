// Splits an array or string into chunks of a given size
function chunk(array, size = 1) {
  if (typeof array !== "string" && !Array.isArray(array)) {
    throw new TypeError(`Expected an array or string, received ${typeof array}`);
  }

  if (typeof size !== "number" || size < 1) {
    throw new TypeError("Size must be a positive number");
  }

  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

export default chunk;
