import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from "./post/post.component";

@NgModule({ // декоратор
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //указываем, что главный компонент для запуска - Аппкомп
})
export class AppModule { }
