import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // именно этот селектор будет опознан для выбора и перенесён в HTML модуль при загрузке рендеринга
  templateUrl: './app.component.html', // конфигурация для шаблона выбранного выше компонента
  styleUrls: ['./app.component.scss']  // конфиграция для стиля выбранного выше компонента
})
export class AppComponent { //здесь заводим все динамические переменные

  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]

  obj = { a:1, b: {c: 2} }

}
