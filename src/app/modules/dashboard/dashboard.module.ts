import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
