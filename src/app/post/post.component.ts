import {Component} from '@angular/core'

@Component({  //пишем какие параметры мы должны передать в компонент
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'] //в этот массив мы можем передавать несколько стилкомпонентов
})
export class PostComponent {}
