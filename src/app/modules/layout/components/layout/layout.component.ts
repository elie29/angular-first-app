import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <p>
      layout works!
    </p>
    <app-header></app-header>
    <app-dashboard></app-dashboard>
    <app-footer></app-footer>
  `
})
export class LayoutComponent {}
