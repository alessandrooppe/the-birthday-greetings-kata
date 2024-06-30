import { Gender } from "../src/models/enum/gender";
import { mapGender } from "../src/repository/employees-repository";

describe('mapGender', () => {
    it('should return the correct Gender enum for valid input', () => {
      expect(mapGender('1')).toEqual(Gender.Altro);
      expect(mapGender(' 2 ')).toBe(Gender.M);
      expect(mapGender('3')).toBe(Gender.F);
    });
  
    it('should return undefined for invalid input', () => {
      expect(mapGender('abc')).toBeUndefined(); 
    });
});