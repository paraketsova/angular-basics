import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // при значении onPush ангуляр будет реагировать ТОЛЬКО на входные свойства OnInput
  // и если мы изменим Default на ОнПуш, то изменение названий постов перестанет работать по таймауту
  // или мы можем внести ссылку на отслеживаемый элемент в ОнИнпутв апп.компонент.тс
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() post!: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: any

  constructor() { // наследие Js, здесь он не нужен, обычно логику не прописывают в конструкторе
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnСhanges', changes)
    //в объекте changes мы можем увидеть предыдущие значение полей поста и то, является ли нынешняя версия значений исходоной версией
  }

  ngOnInit() {
    console.log('ngOnInit') // отследить когда происходит событие
    // console.log(this.infoRef.nativeElement)
  }
// здесь у ContentChild {static: true}  потому что инфореф используется в ngOnInit
//  в любом другом случае статик должнро быть фолс. Вообще в данном конкр случае
//  {static: ...}  вообще не нужен в новой версии Анг

  ngDoCheck(): void {
    console.log('ngDoCheck')
    // метод позволяет остлеживать изменения и вызывается при любых изменениях. Вызывается после ngOnChanges иngOnInit
  }

  ngAfterContentInit() {
  console.log('AfterContentInit')
  // метод инициализируетя тогда, когда инициализируется контент, который мы передаем в компонент
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
    // метод инициализируетя тогда, когда весь передаваемый контент готов для использвования
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
    // после инициализации нашего пост.форм компонента
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
    // после delete нашего контента
  }
}
