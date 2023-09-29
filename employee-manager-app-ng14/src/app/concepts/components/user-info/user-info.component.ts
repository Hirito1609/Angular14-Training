import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  template: `
    <p>
      User Age : {{age}}
    </p>
  `,
  styles: [
  ]
})
export class UserInfoComponent implements OnInit {

  //create custom property
  @Input() age = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
