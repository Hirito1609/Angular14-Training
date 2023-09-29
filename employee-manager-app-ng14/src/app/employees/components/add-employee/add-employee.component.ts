import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../models/iemployee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: []
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;
  submitButtonDisabled = false;
  isSaved = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private employeesService: EmployeesService
  ) {
    this.addEmployeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ])
    });
  }

  ngOnInit(): void {}

  handleAddEmployee() {
    console.log(this.addEmployeeForm);
    // console.log(this.addEmployeeForm.value);
    this.submitButtonDisabled = true;

    this.employeesService.createEmployee(this.addEmployeeForm.value).subscribe({
      next: (res: IEmployee) => {
        console.log(res);
        this.submitButtonDisabled = false;
        this.isSaved = true;
        this.addEmployeeForm.reset();
      },
      error: (error: any) => {
        // console.log(error);
        this.errorMessage = error;
      }
    });
  }

  handleBackBtnClick() {
    this.router.navigate(['employees']);
  }
}
