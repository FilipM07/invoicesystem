import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SettingsComponent } from './settings/settings.component';
import { PrintComponent } from './print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SettingsComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
