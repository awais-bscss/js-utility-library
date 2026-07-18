import { flatten } from "../index.js";

console.log("=== FLATTEN EXAMPLES ===");

// 1. Basic usage: Fully flatten array
console.log("\n1. Fully flatten highly nested array:");
console.log(flatten([1, [2, [3, [4]]]]));
// Expected output: [ 1, 2, 3, 4 ]

// 2. Flattening to specified depth 1
console.log("\n2. Flatten to depth 1:");
console.log(flatten([1, [2, [3, [4]]]], 1));
// Expected output: [ 1, 2, [ 3, [ 4 ] ] ]

// 3. Edge Case: Depth 0 (returns a copy)
console.log("\n3. Flatten with depth 0:");
console.log(flatten([1, [2, [3]]], 0));
// Expected output: [ 1, [ 2, [ 3 ] ] ]

// 4. Edge Case: Depth greater than actual nesting
console.log("\n4. Flatten with depth 10 (actual depth 3):");
console.log(flatten([1, [2, [3]]], 10));
// Expected output: [ 1, 2, 3 ]

// 5. Error Handling: Passing non-array input
console.log("\n5. Error Handling: Passing a string:");
try {
  flatten("not-an-array");
} catch (error) {
  console.log("Caught expected error:", error.message);
}

// 6. Error Handling: Passing negative depth
console.log("\n6. Error Handling: Passing negative depth:");
try {
  flatten([1, 2], -5);
} catch (error) {
  console.log("Caught expected error:", error.message);
}
