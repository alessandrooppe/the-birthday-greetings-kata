import fs from 'fs';
import { Employee } from '../models/employee';

export function getEmployees(filePath: string): Employee[] {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const employeesJson = JSON.parse(data);
        
        return employeesJson.map((employee: any) => new Employee(
            employee.lastName,
            employee.firstName,
            employee.dateOfBirth,
            employee.email,
            employee.gender
        ));
    } catch (error) {
        throw new Error(`Failed to read or parse the file: ${error}`);
    }
}