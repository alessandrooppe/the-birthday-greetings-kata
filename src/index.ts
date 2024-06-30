import { EmailService } from "./service/email-service";

export type Config = "json" | "csv";

export async function checkBirthday(config: Config = "json") {
 
  try{
    
    var emailService = new EmailService();
    await emailService.sendEmailsForBirthDayToEmployess(config, "company@oppe.com");

  } catch (error) {
    console.error(error);
  }
}

console.log('Start...');
checkBirthday("csv");
console.log('Finish...');