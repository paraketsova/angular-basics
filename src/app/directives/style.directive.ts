import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {

  @Input('appStyle') color: string = 'blue'
  @Input('fontWeight') fontWeight = 'normal'

  constructor(private el: ElementRef, private r: Renderer2) {
    // console.log(el)
    // this.r.setStyle(this.el.nativeElement, 'color', 'blue')
    // этот вариант изменения стилей рабочий и корректный.
    // он работает благодаря добавлению в конструктор приват р: Рендерер2
/*
    el.nativeElement.style.color = 'red' // - это не слишком удачный способ изменить стиль
*/
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
      // при клике на цветной абзац получаем в консоли объект евента или евент.таргет
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
    //при наведении мыши на параграф - добавляем новый цвет параграфу(он становится синим).
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)

}

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null)
    // ... При уходе мыши цвет с параграфа исчезает
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null)

  }


}
