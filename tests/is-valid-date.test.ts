import { isValidDate } from "../src/utils/validate-utils";

describe('isValidDate', () => {
  test('should return true for valid date strings', () => {
    expect(isValidDate("2021-12-15")).toBe(true);
    expect(isValidDate("April 1, 2020")).toBe(true);
    expect(isValidDate("2024-02-29")).toBe(true);
  });
});


