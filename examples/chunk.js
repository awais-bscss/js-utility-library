import { chunk } from "../index.js";

console.log("=== CHUNK EXAMPLES ===");

// 1. Basic usage: Chunk array into pairs
console.log("\n1. Chunk array [1, 2, 3, 4, 5] into pairs:");
console.log(chunk([1, 2, 3, 4, 5], 2));
// Expected output: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

// 2. Chunking a string into substrings
console.log("\n2. Chunk string 'optimus' into groups of 3:");
console.log(chunk("optimus", 3));
// Expected output: [ 'opt', 'imu', 's' ]

// 3. Edge Case: Size greater than input length
console.log("\n3. Size greater than array length (size 10 for length 3):");
console.log(chunk([1, 2, 3], 10));
// Expected output: [ [ 1, 2, 3 ] ]

// 4. Edge Case: Empty array input
console.log("\n4. Chunk empty array:");
console.log(chunk([], 3));
// Expected output: []

// 5. Error Handling: Invalid input array type
console.log("\n5. Error Handling: Passing non-array, non-string type (number 123):");
try {
  chunk(123, 2);
} catch (error) {
  console.log("Caught expected error:", error.message);
}

// 6. Error Handling: Invalid size parameter
console.log("\n6. Error Handling: Passing invalid size (-1):");
try {
  chunk([1, 2, 3], -1);
} catch (error) {
  console.log("Caught expected error:", error.message);
}
