import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { RoleSelectorComponent } from './components/role-selector/role-selector.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    RoleSelectorComponent
  ],
  exports: [HeaderComponent],
  imports: [CommonModule]
})
export class HeaderModule {}
