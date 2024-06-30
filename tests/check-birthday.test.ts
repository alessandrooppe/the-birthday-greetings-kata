import { checkBirthday } from "../src";
import { EmailService } from "../src/service/email-service";

jest.mock("../src/service/email-service", () => {
  return jest.fn().mockImplementation(() => {
    return {
      sendEmailsForBirthDayToEmployess: jest.fn().mockResolvedValue('Emails sent successfully')
    };
  });
});

describe('checkBirthday', () => {
  test('should call sendEmailsForBirthDayToEmployess with correct parameters', async () => {
    const emailService = new EmailService();
    await checkBirthday("json");

    expect(emailService.sendEmailsForBirthDayToEmployess).toHaveBeenCalledWith("json", "company@oppe.com");
  });
});