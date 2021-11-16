import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {PostFormComponent} from './post-form/post-form.component';
import {PostComponent} from './post/post.component';

@NgModule({ // декоратор
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //указываем, что главный компонент для запуска - Аппкомп
})
export class AppModule { }
