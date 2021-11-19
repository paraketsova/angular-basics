import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({ // декоратор
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //указываем, что главный компонент для запуска - Аппкомп
})
export class AppModule { }
