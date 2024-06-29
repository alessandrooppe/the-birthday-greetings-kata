import { Employee } from "../models/employee";
import { EmployeeJson } from "../models/employee-json";
import fs from 'fs';
import { Gender } from "../models/enum/gender";

function validateEmployee(employee: any): employee is EmployeeJson {
    return (
        typeof employee.lastName === 'string' &&
        typeof employee.firstName === 'string' &&
        typeof employee.dateOfBirth === 'string' &&
        typeof employee.email === 'string' &&
        Object.values(Gender).includes(employee.gender)
    );
}

export function getEmployeesByJson(filePath: string): Employee[] {
    console.log('Reading employees...');
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const employeesJson = JSON.parse(data);
        console.log('Finish reading employees...');
        
        const employees: Employee[] = employeesJson.map((employee: any) => {
            if (!validateEmployee(employee)) {
                console.log(`Invalid employee data: ${JSON.stringify(employee)}`);
                //throw new Error(`Invalid employee data: ${JSON.stringify(employee)}`);
            }
            return new Employee(
                employee.lastName,
                employee.firstName,
                employee.dateOfBirth,
                employee.email,
                employee.gender
            );
        });

        return employees;
    } catch (error) {
        throw new Error(`Failed to read or parse the file: ${error}`);
    }
}