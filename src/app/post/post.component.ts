import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('myPost') post!: Post //передали в строке имя ожидаемого параметра, который может отличаться от шаблонного имени (post)
//однако значения из перменной майПост будут заноситься в шаблон Пост
  constructor() { }

  ngOnInit(): void {
  }

}
