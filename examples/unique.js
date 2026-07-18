import { unique } from "../index.js";

console.log("=== UNIQUE EXAMPLES ===");

// 1. Basic usage: Deduplicate array of primitives
console.log("\n1. Unique elements in primitive array [1, 2, 2, 3, 3, 3, 1]:");
console.log(unique([1, 2, 2, 3, 3, 3, 1]));
// Expected output: [ 1, 2, 3 ]

// 2. Unique objects based on string key property
const items = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 1, name: "Usman" }
];
console.log("\n2. Unique users by 'id' key:");
console.log(unique(items, "id"));
// Expected output: [ { id: 1, name: 'Ali' }, { id: 2, name: 'Sara' } ]

// 3. Unique elements using callback resolver
const words = ["hello", "world", "hi"];
console.log("\n3. Unique elements by string length callback:");
console.log(unique(words, (w) => w.length));
// Expected output: [ 'hello', 'hi' ] (keeps first encountered item of that length)

// 4. Edge Case: Empty array input
console.log("\n4. Deduplicate empty array:");
console.log(unique([]));
// Expected output: []

// 5. Error Handling: Non-array input
console.log("\n5. Error Handling: Passing a number:");
try {
  unique(42);
} catch (error) {
  console.log("Caught expected error:", error.message);
}

// 6. Error Handling: Invalid key resolver
console.log("\n6. Error Handling: Passing invalid key object:");
try {
  unique([1, 2], {});
} catch (error) {
  console.log("Caught expected error:", error.message);
}
