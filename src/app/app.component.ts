import {Component} from '@angular/core';
import {Observable} from "rxjs";

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

  pr: Promise<string> = new Promise<string>( resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000)
  })

    date: Observable<Date> = new Observable<Date> ( obs => {
      setInterval( () => {
        obs.next(new Date())
      }, 1000)
    })
}
