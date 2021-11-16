import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post
  @ContentChild('info', {static: true}) infoRef: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement)
  }
// здесь у ContentChild static: true  потому что инфореф используется в ngOnInit
//  в любом другом случае статик должнро быть фолс
}
