import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    // console.log(el)
    this.r.setStyle(this.el.nativeElement, 'color', 'blue') // этот вариант изменения стилей рабочий и корректный.
      // он работает благодаря добавлению в конструктор приват р: Рендерер2
/*
    el.nativeElement.style.color = 'red' // - это не слишком удачный способ изменить стиль
*/

  }

}
