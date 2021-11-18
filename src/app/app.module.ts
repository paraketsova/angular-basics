import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {StyleDirective} from "./directives/style.directive";
import {IfnotDirective} from './directives/ifnot.directive';


@NgModule({ // декоратор
  declarations: [
    AppComponent,
    StyleDirective,
    IfnotDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //указываем, что главный компонент для запуска - Аппкомп
})
export class AppModule { }
