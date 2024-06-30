import { Config } from "..";
import { Email } from "../models/email";
import { Employee } from "../models/employee";
import * as path from 'path';
import { formatBodyForBirthdayEmail } from "../utils/email-utils";
import { getEmployeesFromCsv, getEmployeesFromJson } from "../repository/employees-repository";

export class EmailService {

  async sendEmailsForBirthDayToEmployess(config: Config, senderEmail: string): Promise<void> {
  
    let employees: Employee[] = [];

    if(config === "json") {
      const filePath = path.resolve(__dirname, '../employees.json');
      employees = await getEmployeesFromJson(filePath);
    } else {
      const filePath = path.resolve(__dirname, '../employees.csv');
      employees = await getEmployeesFromCsv(filePath);  
    }

    const today = new Date();

    const employeesWithBirthday = employees.filter(employee => employee.isBirthday(today));
    
    console.log('Sending emails...');

    if(employeesWithBirthday.length > 0) {
      employeesWithBirthday.forEach(employee => {
        const email: Email = {
          from: senderEmail,
          to: employee.email,
          subject: 'Buon compleanno!',
          body: formatBodyForBirthdayEmail(employee)
        };
        console.log(email);
      });
    }  
    else   
      console.log('No birthdays today');
    
    console.log('Finish emails...');
  }
  
}

