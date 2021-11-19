import {Component} from '@angular/core';
import {AppCounterServices} from "./services/app-counter.services";

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root', // именно этот селектор будет опознан для выбора и перенесён в HTML модуль при загрузке рендеринга
  templateUrl: './app.component.html', // конфигурация для шаблона выбранного выше компонента
  styleUrls: ['./app.component.scss']  // конфиграция для стиля выбранного выше компонента
})


export class AppComponent { //здесь заводим все динамические переменные

  constructor(public appCounterService: AppCounterServices) {
  //  сначала оценивает досупность, потом пишем имя,
    //  потом указываем подключаемый сервис
  }

}
