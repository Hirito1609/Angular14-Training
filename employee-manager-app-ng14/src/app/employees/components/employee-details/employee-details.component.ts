import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { ToastrService } from 'ngx-toastr';
import { IEmployee } from '../../models/iemployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {
  employee!: IEmployee;
  dupEmployee!: IEmployee;
  submitButtonDisabled = false;

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    // let's send req to rest api thru service
    this.employeesService.getEmployeeById(employeeId).subscribe((res: IEmployee) => {
      console.log(res);
      this.employee = res;
      // cloning the employee
      this.dupEmployee = {
        ...this.employee
      };
    });
  }

  handleUpdateEmployee(formData: any) {
    this.submitButtonDisabled = true;
    // console.log(formData);
    console.log(this.dupEmployee);
    this.employeesService
      .updateEmployee(this.dupEmployee)
      .subscribe((res: any) => {
        console.log(res);
        this.toastr.success(
          `Employee ${res.name} detaisl updated successfully`,
          'Updated Successfully'
        );
        this.employee = { ...this.dupEmployee };
        this.submitButtonDisabled = false;
      });

    // TODO: Submit the above data to the service and get it saved in REST API
  }
}
