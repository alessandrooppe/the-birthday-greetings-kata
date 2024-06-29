import { Employee } from "../src/models/employee";
import { Gender } from "../src/models/enum/gender";

describe('getEmployees', () => {
    test('should confirm today is birthday of employee', () => {

        const today = new Date();
        const employee: Employee = new Employee('Doe', 'John', today.toString(), '?', Gender.M);
    
        expect(employee.isBirthday(today)).toBe(true);
    });

    test('should confirm today is not birthdayof employee', () => {
        const today = new Date();
        const yesterday = new Date(today).setDate(today.getDate() - 1);
        const employee: Employee = new Employee('Doe', 'John', yesterday.toString(), '?', Gender.M);
    
        expect(employee.isBirthday(today)).toBe(false);
    });
});
