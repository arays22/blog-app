import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
