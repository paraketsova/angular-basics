import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // именно этот селектор будет опознан для выбора и перенесён в HTML модуль при загрузке рендеринга
  templateUrl: './app.component.html', // конфигурация для шаблона выбранного выше компонента
  styleUrls: ['./app.component.scss']  // конфиграция для стиля выбранного выше компонента
})
export class AppComponent { //здесь заводим все динамические переменные

  arr = [1, 1, 2, 3, 5, 8, 13]

//   obis = [
//     {title: 'Post 1',
//       author: 'Mariia',
//       comments: [
//         {name: 'Max', text: 'Lorem1'},
//         {name: 'Max', text: 'Lorem2'},
//         {name: 'Max', text: 'Lorem3'},
//       ]
//     },
//
//     {title: 'Post 2',
//       author: 'Mariia2',
//       comments: [
//         {name: 'Max2', text: 'Lorem2-1'},
//         {name: 'Max2', text: 'Lorem2-2'},
//         {name: 'Max2', text: 'Lorem2-3'},
//       ]
//     }
//   ]
}
