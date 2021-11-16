import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  // аналогично Js:     const onAdd = new EventEmitter()

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
      // емит передаёт наружу в апп данные из формы ввода

      console.log('New Post: ', post)
      this.title = this.text = ''
    }
  }

}
