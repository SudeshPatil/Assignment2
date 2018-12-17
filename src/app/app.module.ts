import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component'
import { BasicComponent } from './basic.component';
@NgModule({
  declarations: [
    AppComponent, MessageComponent, BasicComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent,BasicComponent]
})
export class AppModule { }
