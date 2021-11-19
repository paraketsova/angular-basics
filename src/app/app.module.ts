import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MultByPipe} from "./pipes/mult-by.pipe";
import {ExMarksPipe} from './pipes/ex-marks.pipe';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({ // декоратор
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //указываем, что главный компонент для запуска - Аппкомп
})
export class AppModule { }
