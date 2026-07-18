import { groupBy } from "../index.js";

console.log("=== GROUPBY EXAMPLES ===");

// 1. Basic usage: Grouping objects by a property name string
const users = [
  { name: "Ali", role: "dev" },
  { name: "Sara", role: "design" },
  { name: "Usman", role: "dev" }
];
console.log("\n1. Group users by 'role' property:");
console.log(groupBy(users, "role"));

// 2. Callback resolver function
const nums = [1.2, 2.1, 2.4];
console.log("\n2. Group numbers by Math.floor callback:");
console.log(groupBy(nums, Math.floor));
// Expected output: { '1': [ 1.2 ], '2': [ 2.1, 2.4 ] }

// 3. Edge Case: Prototype Safety check
console.log("\n3. Verify returned object prototype (should be null):");
const resultObj = groupBy([], "key");
console.log("Prototype is null?", Object.getPrototypeOf(resultObj) === null);
// Expected output: true

// 4. Edge Case: Empty array input
console.log("\n4. Group an empty array:");
console.log(groupBy([], "id"));
// Expected output: [Object: null prototype] {}

// 5. Error Handling: Non-array input
console.log("\n5. Error Handling: Passing plain object:");
try {
  groupBy({}, "key");
} catch (error) {
  console.log("Caught expected error:", error.message);
}

// 6. Error Handling: Invalid key type resolver
console.log("\n6. Error Handling: Passing a number as key:");
try {
  groupBy([1, 2], 123);
} catch (error) {
  console.log("Caught expected error:", error.message);
}
