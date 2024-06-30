import { isLeapYear } from "../src/utils/date-utils";

describe('dateUtils', () => {
    test('should return true for a leap year divisible by 4 but not by 100', () => {
        expect(isLeapYear(2024)).toBe(true);  
        expect(isLeapYear(1996)).toBe(true); 
        expect(isLeapYear(2021)).toBe(false);
    });
});
