import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string
  [field: string]: string
}

@Component({
  selector: 'app-root', // именно этот селектор будет опознан для выбора и перенесён в HTML модуль при загрузке рендеринга
  templateUrl: './app.component.html', // конфигурация для шаблона выбранного выше компонента
  styleUrls: ['./app.component.scss']  // конфиграция для стиля выбранного выше компонента
})
export class AppComponent { //здесь заводим все динамические переменные

  search = ''
  searchField = 'title'

 posts: Post[] = [
   {title: 'One', text: "I want to break free!"},
   {title: 'Two', text: "I've fallen in love..."},
   {title: 'Three', text: "It's strange but it's true!"},
 ]
}
