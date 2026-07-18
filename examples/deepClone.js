import { deepClone } from "../index.js";

console.log("=== DEEPCLONE EXAMPLES ===");

// 1. Basic usage: Deep copy of plain nested objects
const originalObj = {
  user: {
    details: { age: 25 },
    tags: ["coder", "hiker"]
  }
};
const cloneObj = deepClone(originalObj);
cloneObj.user.details.age = 30;
cloneObj.user.tags.push("gamer");

console.log("\n1. Verify deep nesting copies are separate:");
console.log("Original Age (should be 25):", originalObj.user.details.age);
console.log("Clone Age (should be 30):", cloneObj.user.details.age);
console.log("Original Tags (should not have 'gamer'):", originalObj.user.tags);
console.log("Clone Tags:", cloneObj.user.tags);

// 2. Edge Case: Deep clone of Date instances
const date = new Date("2026-07-17");
const clonedDate = deepClone(date);
clonedDate.setFullYear(2030);

console.log("\n2. Verify deep clone of Dates:");
console.log("Original Date Year:", date.getFullYear());
console.log("Cloned Date Year:", clonedDate.getFullYear());

// 3. Edge Case: Deep clone of RegExp instances
const regex = /test/gi;
const clonedRegex = deepClone(regex);
console.log("\n3. Verify deep clone of RegExp:");
console.log("Original Regex:", regex);
console.log("Cloned Regex:", clonedRegex);
console.log("Different instance?", clonedRegex !== regex);

// 4. Edge Case: Handling null and undefined
console.log("\n4. Verify primitives cloning (should return themselves):");
console.log("null clone:", deepClone(null));
console.log("number clone:", deepClone(42));
console.log("undefined clone:", deepClone(undefined));
