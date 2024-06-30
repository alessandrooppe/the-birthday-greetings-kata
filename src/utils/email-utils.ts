import { Employee } from "../models/employee";
import { Gender } from "../models/enum/gender";

/*
* Formatta il body di auguri di compleanno.
*/ 
export function formatBodyForBirthdayEmail(employee: Employee): string {
    let dear: string;    
    switch (employee.gender) {
        case Gender.M:
        dear = 'Caro';
        break;
        case Gender.F:   
        dear = 'Cara';
        break; 
        case Gender.Altro: 
        dear = 'Car*';
        break;   
        default:
        dear = 'Caro';
    }

    return`${dear} ${employee.firstName} ${employee.lastName}, oggi è il tuo compleanno! Auguri!`;
}