import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardModule } from '../dashboard/dashboard.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HeaderModule, DashboardModule, FooterModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
