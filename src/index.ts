import { Employee } from "./models/employee";
import { sendEmail } from "./service/email-service";
import { getEmployees } from "./service/employees-service";

console.log('Is this working?');

let employees: Employee[] = [];

try{
    employees = getEmployees('/Users/alessandrooppedisano/Documents/GitHub/the-birthday-greetings-kata/src/employees.json');
    const today = new Date();   
    const  employeesWithBirthday = employees.filter(employee => employee.isBirthday(today));
    
    sendEmail(employeesWithBirthday);

} catch (error: any) {
    console.error(error.message);
}


