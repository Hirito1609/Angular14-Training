import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../models/iemployee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit, OnDestroy {

  employees!: any[];
  showLoader = false;
  employeesSubscription!: Subscription;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    this.showLoader = true;
    // whenever the comp is coming into view -- this will be called.
    // ideal place for your async calls
    this.employeesSubscription = this.employeesService.getEmployees()
      .subscribe((res: IEmployee[]) =>{
        console.log(res);
        this.employees = res;
        this.showLoader = false;
      });
  }

  ngOnDestroy(): void {
    if(this.employeesSubscription) {
      this.employeesSubscription.unsubscribe();
    }

    if(this.employees) {
      this.employees.length = 0;
    }
  }
}
