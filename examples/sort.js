import { sort } from "../index.js";

console.log("=== SORT EXAMPLES ===");

// 1. Basic usage: Sort primitive numbers ascending
console.log("\n1. Sort primitives ascending:");
console.log(sort([3, 1, 2]));
// Expected output: [ 1, 2, 3 ]

// 2. Sort primitive numbers descending
console.log("\n2. Sort primitives descending:");
console.log(sort([3, 1, 2], undefined, "desc"));
// Expected output: [ 3, 2, 1 ]

// 3. Sort array of objects by property string key
const users = [
  { name: "Usman", age: 28 },
  { name: "Ali", age: 22 },
  { name: "Sara", age: 25 }
];
console.log("\n3. Sort users by 'age' key:");
console.log(sort(users, "age"));
// Expected output: sorted by age ascending

// 4. Sort array of objects by callback resolver
console.log("\n4. Sort users by name length descending:");
console.log(sort(users, (u) => u.name.length, "desc"));
// Expected output: sorted by name length descending

// 5. Edge Case: Verify non-mutation of input array
const originalArray = [5, 4, 3];
const sortedArray = sort(originalArray);
console.log("\n5. Verification of non-mutation:");
console.log("Original Array (should remain [5, 4, 3]):", originalArray);
console.log("Sorted Array:", sortedArray);

// 6. Error Handling: Invalid sort order parameter
console.log("\n6. Error Handling: Passing invalid sorting order:");
try {
  sort([1, 2, 3], undefined, "up");
} catch (error) {
  console.log("Caught expected error:", error.message);
}
