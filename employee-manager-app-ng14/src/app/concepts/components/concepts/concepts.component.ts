import { Component } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent {
  //interpolation
  appName = 'Employee Manager Plus App!';
  //property binding
  companyName = 'Cognizant';
  //two way binding
  courseName = 'Angular 14';
  user = {
    name: 'John',
    age: 42
  };
  reportStatus: any;
  //for Login
  isLoggedin = false;
  skillSet = ['Angular', 'HTML', 'Bootstrap', 'JS', 'CSS'];
  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
      country: 'MARS'
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
      country: 'USA'
    },
    {
      name: 'Day  Meyers',
      age: 21,
      country: 'HK'
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
      country: 'UK'
    },
    {
      name: 'Cook  Tyson',
      age: 32,
      country: 'USA'
    }
  ];

  //public method
  handleClickMe(event: any) {
    event.target.innerText = 'Clicked';
    // console.log(event);
    // TODO: Disable button on click
    event.target.disabled = true;
  }

  handleReportGenerated(event: any) {
    // console.log(event);
    this.reportStatus = event;
  }

  handleLoginToggle() {
    this.isLoggedin = !this.isLoggedin;
  }
}
