import { isLeapYear } from "../utils/date-utils";
import { Gender } from "./enum/gender";

export class Employee {
    lastName: string;
    firstName: string;
    dateOfBirth: Date;
    email: string;
    gender: Gender;

    constructor(lastName: string, firstName: string, dateOfBirth: string, email: string, gender: Gender) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.dateOfBirth = new Date(dateOfBirth);
        this.email = email;
        this.gender = gender;
    }

    isBirthday(today: Date): boolean {
        const birthDate = this.dateOfBirth;

        const isLeapDayBirthday = birthDate.getDate() === 29 && birthDate.getMonth() === 1;

        if (isLeapDayBirthday) {
            if (!isLeapYear(today.getFullYear()) && today.getDate() === 28 && today.getMonth() === 1) {
                return true;
            }

            if (isLeapYear(today.getFullYear()) && today.getDate() === 29 && today.getMonth() === 1) {
                return true;
            }

            return false;
        }
        
        return birthDate.getDate() === today.getDate() && birthDate.getMonth() === today.getMonth();
    }
}