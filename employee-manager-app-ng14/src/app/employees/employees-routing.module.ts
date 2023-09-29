import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeesComponent } from './components/employees/employees.component';

const employeeRoutes: Routes = [
  { path:'', component:EmployeesComponent },
  { path:'add', component:AddEmployeeComponent },
  { path:':id', component:EmployeeDetailsComponent }
  // { path:'', redirectTo: '', pathMatch: 'full' },  //to handle empty url
  // { path:'**', component:HomeComponent} //to handle random urls
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes)
  ],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
