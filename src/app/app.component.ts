import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root', // именно этот селектор будет опознан для выбора и перенесён в HTML модуль при загрузке рендеринга
  templateUrl: './app.component.html', // конфигурация для шаблона выбранного выше компонента
  styleUrls: ['./app.component.scss']  // конфиграция для стиля выбранного выше компонента
})
export class AppComponent { //здесь заводим все динамические переменные
  posts: Post[] = [
    {title: 'I want to survive', text: 'I want to believe', id: 1},
    {title: 'I want to break free', text: 'I want to break free from your lies', id: 2}
  ]
}
