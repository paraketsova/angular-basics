import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  // аналогично Js:     const onAdd = new EventEmitter()

  @ViewChild('titleInput', {static: false}) inputRef: any
  // вьючайлд требует двух параметров на входе. Первый -строка с именем читаемого объекта (но без #)
  // и второй параметр - объект. Здесь он с одним полем, значение которого булевое
  // те переменные, кот. мы получаем с помощью вьюЧайлд имеют спец тип, который называется ЭлементРеф, то тут мы просто пишем any

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      // onAdd. передаёт наружу в апп данные из формы ввода

      // console.log('New Post: ', post)
      this.title = this.text = ''
    }
  }

  focusTitle(): void {
    this.inputRef.nativeElement.focus()
  }

}
