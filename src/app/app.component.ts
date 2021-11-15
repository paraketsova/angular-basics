import { Component } from '@angular/core';
import {timeout} from "rxjs";

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

  // img = 'https://miro.medium.com/max/400/1*PWe4DmAE78BLD4SHpXizMw.png'

  inputValue = ''

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is over')
    //   this.img = 'https://angular.io/assets/images/logos/angular/angular.png'
    // }, 5000)
  }

//  создаем метод, который будем вызывать в HTML
  onInput = (event: any) => {
    // console.log('Event', event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  // onBlur(str: string) {
  // this.inputValue = str
  // }

  onClick() {
    console.log('Click!')
  }
}
