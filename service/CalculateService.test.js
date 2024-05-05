const { calculate } = require("./CalculateService");

// Test for Calculate Service
describe("CalculateService", () => {
  // Test for addition
  test("adds 1 + 2 to equal 3", async () => {
    const result = await calculate({ num1: 1, num2: 2, operation: "+" });
    expect(result.result).toBe(3);
  });

  // Test for subtraction
  test("subtracts 5 - 2 to equal 3", async () => {
    const result = await calculate({ num1: 5, num2: 2, operation: "-" });
    expect(result.result).toBe(3);
  });

  // Test for multiplication
  test("multiplies 2 * 3 to equal 6", async () => {
    const result = await calculate({ num1: 2, num2: 3, operation: "*" });
    expect(result.result).toBe(6);
  });

  // Test for division
  test("divides 6 / 2 to equal 3", async () => {
    const result = await calculate({ num1: 6, num2: 2, operation: "/" });
    expect(result.result).toBe(3);
  });

  // Test for handling invalid operation
  test("handles invalid operation", async () => {
    const result = await calculate({ num1: 2, num2: 3, operation: "%" });
    expect(result).toEqual({ result: undefined }); // This depends on how you want to handle invalid operations
  });
});
