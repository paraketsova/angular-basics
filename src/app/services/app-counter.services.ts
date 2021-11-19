import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
  //   а это ^ позволяет не добавлять наш AppCounterServices ручками
  // в providers:[]  у @NgModule в app.module.ts
})
// этот декоратор Injectable рекомендуется ВСЕГДА добавлять к любому сервису.
// он позволяет инжекрировать внутрь одного сервиса другой

export class AppCounterServices {
  counter = 0

  increase() {
    this.counter++
  }

  decrease() {
    this.counter--
  }
}
