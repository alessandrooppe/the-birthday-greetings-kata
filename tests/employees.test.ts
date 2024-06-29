import path from "path";
import { Employee } from "../src/models/employee";
import { Gender } from "../src/models/enum/gender";
import { getEmployeesByJson } from "../src/service/employees-service";

describe('Employees', () => {
    test('confirm the constructor of employee', () => {
        const today = new Date();
        const employee: Employee = new Employee('Doe', 'John', today.toString(), '?', Gender.M);
        const employeeTest = {
            lastName: 'Doe',
            firstName: 'John',
            dateOfBirth: new Date(today.toString()),
            email: '?',
            gender: Gender.M
        }
        
        expect(employee).toEqual(employeeTest);
    });

    test('confirm the extract json of employee', () => {
        const filePath = path.resolve(__dirname, 'employees.json');
        const employees = getEmployeesByJson(filePath);
        
        expect(employees).toContain;
    });
});
