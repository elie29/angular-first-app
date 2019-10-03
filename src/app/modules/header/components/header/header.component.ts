import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p>
      header works!
    </p>
    <app-logo></app-logo>
    <app-menu></app-menu>
    <app-role-selector></app-role-selector>
  `
})
export class HeaderComponent {}
