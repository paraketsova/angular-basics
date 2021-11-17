import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit { //здесь заводим все динамические переменные
  posts: Post[] = [
    {title: 'I want to survive', text: 'I want to believe', id: 1},
    {title: 'I want to break free', text: 'I want to break free from your lies', id: 2}
  ]

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('timeOut')
    //   this.posts[0] = {
    //     title: 'Changed!',
    //     text: 'Text also changed!',
    //     id: 33
    //   }
    // }, 5000)
    //в апп компоненте спустя неск секунд меняется элемент и энгуляр понял что изменилось и нарисовал в шаблоне
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    // console.log('Post', post)
  }

  removePost(id: number) {
    console.log('I want to remove', id)
    this.posts = this.posts.filter(p => p.id !==id)
  }
}
