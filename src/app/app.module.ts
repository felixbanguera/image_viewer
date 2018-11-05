import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgSuiteComponent } from './img-suite/img-suite.component';
import { ImgComboComponent } from './img-suite/img-combo/img-combo.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgSuiteComponent,
    ImgComboComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
