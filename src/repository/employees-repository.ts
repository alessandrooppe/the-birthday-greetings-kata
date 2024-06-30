import { Employee } from "../models/employee";
import fs from 'fs';
import csv from 'csv-parser';
import { Gender } from "../models/enum/gender";
import { EmployeeData } from "../models/employee-data";
import { mapGender, validateEmployee } from "../utils/validate-utils";

/**
 * Legge un file JSON contenente dati degli impiegati e li restituisce come array di Employee.
 */
export async function getEmployeesFromJson(filePath: string): Promise<Employee[]> {
  console.log('Lettura impiegati da JSON...');
  
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const employeesJson = JSON.parse(data);
    console.log('Lettura completata...');

    return employeesJson.map((employee: any) => {
      if (!validateEmployee(employee)) {
        console.log(`Dati impiegato non validi: ${JSON.stringify(employee)}`);
        return null;
      }
      
      return new Employee(
        employee.lastName,
        employee.firstName,
        employee.dateOfBirth,
        employee.email,
        mapGender(employee.gender) ?? Gender.M
      );
    }).filter((employee: Employee | null) => employee !== null) as Employee[];
  } catch (error) {
    console.error(`Errore nella lettura o nel parsing del file: ${error}`);
    throw new Error(`Impossibile processare il file ${filePath}`);
  }
}

/**
 * Legge un file CSV contenente dati degli impiegati e restituisce un Promise con un array di Employee.
 */
export function getEmployeesFromCsv(filePath: string): Promise<Employee[]> {
  console.log('Lettura impiegati da CSV...');
  const employees: Employee[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv({
        mapHeaders: ({ header }) => header.trim(),
        mapValues: ({ value }) => value.trim(),
      }))
      .on('data', (data) => {
          
        const employeeData: EmployeeData = {
          lastName: data['last_name'],
          firstName: data['first_name'],
          dateOfBirth: data['date_of_birth'],
          email: data['email'],
          gender: data['gender'],
        };

        if (!validateEmployee(employeeData)) {
          console.log(`Dati impiegato non validi: ${JSON.stringify(employeeData)}`);
        } else {
        
          employees.push(new Employee(
            employeeData.lastName,
            employeeData.firstName,
            employeeData.dateOfBirth,
            employeeData.email,
            mapGender(employeeData.gender) ?? Gender.M
          ));
        }
      })
      .on('end', () => {
        console.log('Lettura impiegati completata.');
        resolve(employees);
      })
      .on('error', (error) => {
        reject(new Error(`Errore nella lettura o nell'analisi del file CSV: ${error}`));
      });
  });
}