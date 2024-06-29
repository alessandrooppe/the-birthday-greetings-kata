import { Gender } from "./enum/gender";

export interface EmployeeJson {
    lastName: string;
    firstName: string;
    dateOfBirth: string;
    email: string;
    gender: Gender;
}