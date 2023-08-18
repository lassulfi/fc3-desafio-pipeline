import { describe, it, expect } from "@jest/globals"
import { add, divide, multiply, subtract } from "./calculator.js"

describe("Calculator unit tests", () => {
    describe("add tests", () => {
        it("should add two numbers", () => {
            const a = 1;
            const b = 2;

            const result = add(1, 2);
            
            const expectedResult = 3;
            expect(result).toStrictEqual(expectedResult)
        })
    })

    describe("subscribe tests", () => {
        it("should subtract two numbers", () => {
            const a = 1;
            const b = 2;

            const result = subtract(1, 2);

            const expectedResult = -1;
            expect(result).toStrictEqual(expectedResult)
        })
    })

    describe("multiply tests", () => {
        it("should multiply two numbers", () => {
            const a = 1;
            const b = 2;

            const result = multiply(a, b);

            const expectedResult = 2;
            expect(result).toStrictEqual(expectedResult)
        })
    })

    describe("divide tests", () => {
        it("should throw an error when divide a number by zero", () => {
            const a = 1;
            const b = 0;

            expect(() => divide(a, b)).toThrow("Cannot divide by zero");
        });
        it("should divide by a non-zero number", () => {
            const a = 10;
            const b = 2;

            const result = divide(a, b);

            const expectedResult = 5;
            expect(result).toStrictEqual(expectedResult)
        })
    })
})