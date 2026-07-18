import { mapKeys, mapValues, pick, omit } from "../index.js";

console.log("=== TRANSFORMATIONS EXAMPLES ===");

const user = { firstName: "Ali", lastName: "Khan", age: 25 };

// ==========================================
// 1. MAPKEYS
// ==========================================
console.log("\n1. mapKeys: Convert keys to uppercase:");
console.log(mapKeys(user, (val, key) => key.toUpperCase()));
// Expected output: { FIRSTNAME: 'Ali', LASTNAME: 'Khan', AGE: 25 }

console.log("mapKeys Edge Case: Handing duplicate mapped keys (last one wins):");
console.log(mapKeys({ a: 1, b: 2 }, () => "duplicate"));
// Expected output: { duplicate: 2 }

// ==========================================
// 2. MAPVALUES
// ==========================================
console.log("\n2. mapValues: Double number values, convert strings to upper:");
console.log(mapValues(user, (val) => typeof val === "string" ? val.toUpperCase() : val * 2));
// Expected output: { firstName: 'ALI', lastName: 'KHAN', age: 50 }

// ==========================================
// 3. PICK
// ==========================================
console.log("\n3. pick: Retrieve only specified keys ['firstName', 'age']:");
console.log(pick(user, ["firstName", "age"]));
// Expected output: { firstName: 'Ali', age: 25 }

console.log("pick Edge Case: Pick keys that do not exist in target:");
console.log(pick(user, ["firstName", "nonexistent"]));
// Expected output: { firstName: 'Ali' }

// ==========================================
// 4. OMIT
// ==========================================
console.log("\n4. omit: Discard specified keys ['age']:");
console.log(omit(user, ["age"]));
// Expected output: { firstName: 'Ali', lastName: 'Khan' }

console.log("omit Edge Case: Discard keys that do not exist:");
console.log(omit(user, ["nonexistent"]));
// Expected output: { firstName: 'Ali', lastName: 'Khan', age: 25 }

// ==========================================
// 5. ERROR HANDLING
// ==========================================
console.log("\n5. Error Handling Examples:");
try {
  pick(null, ["a"]);
} catch (error) {
  console.log("Caught expected error for pick(null):", error.message);
}

try {
  mapKeys({ a: 1 }, "not-a-function");
} catch (error) {
  console.log("Caught expected error for mapKeys (invalid callback):", error.message);
}
