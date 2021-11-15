/*константы и функции*/

const str: string = 'Hello Typescript';
const num: number = 42;
const isActive: boolean = false;

let strArray: string[] = ['h', 'e', 'l'];
let numArray: Array<number> = [1, 1, 2, 3];

function logInfo(name: string, age: number): void {
  console.log(`Info: ${name}, ${age}`)
}

logInfo('Mariia', 25);

function calc(a: number, b: number | string): number {
  if (typeof b === 'string') b = +b
  return a + b
}
console.log(calc(2, 5))

/* работа с классами в Ts */
class Server {
  static VERSION = '1.0.3'

  // public name: string
  // protected ip: number

  private status: string = 'working'

  constructor(public name: string, protected ip: number) {
    // this.name = name
    // this.ip = ip
  }

  public turnOn() {
    this.status = 'working'
  }

  protected turnOff() {
    this.status = 'offline'
  }

  public getStatus(): string {
    return this.status
  }
}

const server: Server = new Server('AWS', 1234);


/*  Работа с объектами  */
interface UserInterface {
  name: string
  age: number
  logInfo: () => void  // таким образом записываем, что логИнфо это функция
  id?: any  //знак вопроса говорит о необязательности поля для объекта
}

const user: UserInterface = {
  name: 'Mariia',
  age: 47,
  logInfo() {
    (this.name + '' + this.age)
  }
}

/*  ещё работа с классами */
interface SayHello {
  sayHello: () => void
}

class User implements SayHello {
  constructor(private name: string, private age: number) {
  }

  sayHello(): void {
    console.log(this.name + 'Hello!')
  }
}


/*  Generic types  */

const arr: Array<number> = [1, 2, 3, 4]

interface Username {
  id: number
  name: string
  age: number
}

const username: Array<Username> = [
  {id: 1, name: 'Y', age: 2},
  {id: 2, name: 'E', age: 23}
]

const username2: Username[] = [
  {id: 1, name: 'Y', age: 2},
  {id: 2, name: 'E', age: 23}
]
