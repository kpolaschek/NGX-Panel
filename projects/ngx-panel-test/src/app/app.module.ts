import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPanelModule } from 'ngx-panel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
