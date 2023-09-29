import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr />
      <app-menu-list>
        <ng-container footer-list>
          <li class="nav-item">
            <a class="nav-link" routerLink="/">Back to Top</a>
          </li>
        </ng-container>
      </app-menu-list>
      <p>&copy; Copyright 2023 | Hariharan V</p>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}
