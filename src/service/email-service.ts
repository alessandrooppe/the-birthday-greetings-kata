import { Employee } from "../models/employee";

import { formatBodyForBirthdayEmail } from "../utils/email-utils";

export function sendEmails(employees: Employee[]): void {
  console.log('Sending emails...');

  employees.forEach(employee => {
    console.log(formatBodyForBirthdayEmail(employee));
  });
  
  console.log('Finish emails...');
}