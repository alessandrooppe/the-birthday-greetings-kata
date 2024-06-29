import { Employee } from "./models/employee";
import { sendEmails } from "./service/email-service";
import { getEmployeesByJson } from "./service/employees-service";
import * as path from 'path';

export function checkBirthday() {
  let employees: Employee[] = [];

  try{
    const filePath = path.resolve(__dirname, 'employees.json');
    employees = getEmployeesByJson(filePath);
    const today = new Date();   
    const employeesWithBirthday = employees.filter(employee => employee.isBirthday(today));
    if(employeesWithBirthday.length > 0)
      sendEmails(employeesWithBirthday);
    else
      console.log('No birthdays today');
  
  } catch (error) {
    console.error(error);
  }
}

console.log('Start...');
checkBirthday()
console.log('Finish...');