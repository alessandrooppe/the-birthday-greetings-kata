import path from "path";
import { Employee } from "../src/models/employee";
import { Gender } from "../src/models/enum/gender";
import { getEmployeesFromJson, getEmployeesFromCsv, validateEmployee } from "../src/repository/employees-repository";

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
        const employees = getEmployeesFromJson(filePath);
        
        expect(employees).toContain;
    }); 


    it('should return true for a valid employee object', () => {
        const validEmployee = {
          lastName: 'Rossi',
          firstName: 'Mario',
          dateOfBirth: '1985-05-15',
          email: 'mario.rossi@example.com',
          gender: '1'
        };
        expect(validateEmployee(validEmployee)).toBe(true);
    });

    it('should return false for an employee with invalid gender', () => {
    const invalidGenderEmployee = {
        lastName: 'Rossi',
        firstName: 'Mario',
        dateOfBirth: '1985-05-15',
        email: 'mario.rossi@example.com',
        gender: '100'
    };
    expect(validateEmployee(invalidGenderEmployee)).toBe(false);
    });

    it('should return false for an employee with missing or invalid fields', () => {
    const invalidFieldsEmployee = {
        lastName: 'Rossi',
        firstName: 'Mario',
        dateOfBirth: '1985-05-15',
        email: 123,
        gender: '1'
    };
    expect(validateEmployee(invalidFieldsEmployee)).toBe(false);
    });

    it('should return false for an employee with incorrect data types', () => {
    const incorrectTypesEmployee = {
        lastName: 123,
        firstName: 'Mario',
        dateOfBirth: '1985-05-15',
        email: 'mario.rossi@example.com',
        gender: '1'
    };
    expect(validateEmployee(incorrectTypesEmployee)).toBe(false);
    });
});