import { describe, it } from "node:test"
import { add, divide, multiply, subtract } from "../calculator.js"
import assert from "node:assert"

describe("Calculator unit tests", () => {
    describe("add tests", () => {
        it("should add two numbers", () => {
            const a = 1;
            const b = 2;

            const result = add(1, 2);
            
            const expectedResult = 3;
            assert.strictEqual(result, expectedResult, `Add result should be ${expectedResult}, actual: ${result}`)
        })
    })

    describe("subscribe tests", () => {
        it("should subtract two numbers", () => {
            const a = 1;
            const b = 2;

            const result = subtract(1, 2);

            const expectedResult = -1;
            assert.strictEqual(result, expectedResult, `Subtract result should be ${expectedResult}, actual: ${result}`)
        })
    })

    describe("multiply tests", () => {
        it("should multiply two numbers", () => {
            const a = 1;
            const b = 2;

            const result = multiply(a, b);

            const expectedResult = 2;
            assert.strictEqual(result, expectedResult, `Multiply result should be ${expectedResult}, actual: ${result}`)
        })
    })

    describe("divide tests", () => {
        it("should throw an error when divide a number by zero", () => {
            const a = 1;
            const b = 0;

            assert.throws(() => divide(a, b), "should throw 'Cannot divide by zero' error")
        });
        it("should divide by a non-zero number", () => {
            const a = 10;
            const b = 2;

            const result = divide(a, b);

            const expectedResult = 5;
            assert.strictEqual(result, expectedResult, `divide result should be ${expectedResult}, actual: ${result}`)
        })
    })
})