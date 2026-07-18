import { objectComparison } from "../index.js";

console.log("=== OBJECTCOMPARISON EXAMPLES ===");

// 1. Basic usage: Comparing identical nested objects
const objA = { name: "Ali", details: { age: 25, active: true } };
const objB = { name: "Ali", details: { age: 25, active: true } };
const objC = { name: "Ali", details: { age: 25, active: false } };

console.log("\n1. Comparing nested objects:");
console.log("Comparing A and B (should be true):", objectComparison(objA, objB));
console.log("Comparing A and C (should be false):", objectComparison(objA, objC));

// 2. Edge Case: Comparing NaN
console.log("\n2. Comparing NaNs (should return true):");
console.log("NaN === NaN?", objectComparison(NaN, NaN));

// 3. Edge Case: Comparing Date and RegExp elements
console.log("\n3. Comparing Dates and RegExps:");
console.log("Dates equal (same time)?", objectComparison(new Date("2026-07-17"), new Date("2026-07-17")));
console.log("RegExps equal (same source/flags)?", objectComparison(/abc/gi, /abc/gi));
console.log("RegExps unequal (different flags)?", objectComparison(/abc/gi, /abc/g));

// 4. Edge Case: Array matching
console.log("\n4. Comparing nested arrays:");
console.log("Arrays equal?", objectComparison([1, [2, 3]], [1, [2, 3]]));
console.log("Arrays unequal (length mismatch)?", objectComparison([1, 2], [1, 2, 3]));

// 5. Edge Case: Mismatched structures (e.g. array vs object)
console.log("\n5. Mismatched structures matching:");
console.log("Array vs plain object:", objectComparison([1, 2], { 0: 1, 1: 2 }));
// Expected output: false
