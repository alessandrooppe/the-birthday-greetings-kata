import { Employee } from "../models/employee";

export function sendEmail(employees: Employee[]): void {
    console.log('Sending emails...');
    employees.forEach(employee => {
        console.log(`Dear ${employee.firstName} ${employee.lastName}, today is your birthday! Best wishes!`);
    });
    console.log('Finish emails...');
}