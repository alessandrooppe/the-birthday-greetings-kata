import { Employee } from "../src/models/employee";
import { Gender } from "../src/models/enum/gender";
import { formatBodyForBirthdayEmail } from "../src/utils/email-utils";

describe('Email', () => {
    test('confirm the formatBodyForBirthdayEmail works', () => {

        const employee: Employee = new Employee('Doe', 'John',  "1975-09-11", '?', Gender.M);
        const message = formatBodyForBirthdayEmail(employee);
        
        expect(message).toEqual("Buon compleanno! Caro John Doe, oggi è il tuo compleanno! Auguri!");
    });

});
