import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { LogoComponent } from './modules/header/components/logo/logo.component';
import { MenuComponent } from './modules/header/components/menu/menu.component';
import { RoleSelectorComponent } from './modules/header/components/role-selector/role-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    RoleSelectorComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
