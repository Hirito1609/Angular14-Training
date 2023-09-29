import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  createEmployee(employee: IEmployee): Observable<IEmployee> {
    console.log(employee);

    return this.http
      .post<IEmployee>('https://jsonplaceholder.typicode.com/users11', employee)
      .pipe(
        map((res: IEmployee) => {
          return res;
        }),
        catchError(err => {
          console.log('error caught in service');
          console.error(err);
          return throwError(() => {
            return new Error(err.status + ' - Some Error Occurred');
          });
        })
      );
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((res: IEmployee[]) => {
          console.log(res);
          return res;
        })
      );
  }

  getEmployeeById(employeeId: string | null): Observable<IEmployee> {
    return this.http
      .get<IEmployee>('https://jsonplaceholder.typicode.com/users/' + employeeId)
      .pipe(
        map((res: IEmployee) => {
          console.log(res);
          return res;
        })
      );
  }

  updateEmployee(employee: IEmployee) {
    return this.http
      .put(
        `https://jsonplaceholder.typicode.com/users/${employee.id}`,
        employee
      )
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }
}
