import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';
import { FooterComponent } from '../footer/components/footer/footer.component';
import { HeaderModule } from '../header/header.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, FooterComponent],
  imports: [CommonModule, HeaderModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
