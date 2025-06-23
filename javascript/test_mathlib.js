// test_mathlib.js
const assert = require('assert');
const math = require('./mathlib');

console.log("🧪 Running mathlib tests...");

assert.strictEqual(math.add(2, 3), 5);
assert.strictEqual(math.subtract(5, 2), 3);
assert.strictEqual(math.multiply(4, 3), 12);
assert.strictEqual(math.divide(10, 2), 5);

// Optional: test divide-by-zero error
try {
  math.divide(10, 0);
  console.error("❌ Expected error not thrown for divide by zero");
  process.exit(1);
} catch (e) {
  assert.strictEqual(e.message, "Cannot divide by zero");
}

console.log("✅ All tests passed!");