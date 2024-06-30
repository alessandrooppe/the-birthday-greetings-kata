import { EmployeeData } from "../models/employee-data";
import { Gender } from "../models/enum/gender";

/**
 * Mappa una stringa a un valore dell'enumerazione Gender se possibile.
 */
export function mapGender(value: string | number): Gender | undefined {
  const genderNumber = typeof value === 'string' ? parseInt(value.trim(), 10) : value;

  if (genderNumber in Gender) {
    return genderNumber as Gender;
  }
  return undefined;
}
  

/**
 * Controlla se una stringa continene una data, la data poi dovrebbe avere un controllo aggiungtivo per vedere se la data è valida.
 */  
export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

/**
 * Valida se l'oggetto fornito è un'istanza valida di EmployeeData.
 */
export function validateEmployee(employee: any): employee is EmployeeData {
  const gender: Gender | undefined = mapGender(employee.gender);
      
  if(gender === undefined) {
    return false;
  }

  if(!isValidDate(employee.dateOfBirth)) {
    return false;
  }
  
  return (
    typeof employee.lastName === 'string' &&
    typeof employee.firstName === 'string' &&
    typeof employee.dateOfBirth === 'string' &&
    typeof employee.email === 'string' &&
    Object.values(Gender).includes(gender)
  );
}
