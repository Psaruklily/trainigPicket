class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    emit(value) {
        this.observers.forEach(observer => observer.next(value));
    }

    calculateSum(a, b) {
        const res = a + b;
        
        this.emit(res);
        return res;
    } 
}

class Logger {
    log(text) {
        console.log('Logger:', text);
    }
}

const stream$ = new Subject(); 

const logger = new Logger();

stream$.subscribe({
    next: (res) => logger.log(res),
});

stream$.calculateSum(2, 5);
// Logger: 7

//============================================================================
class Singleton {
    static _instance;

    constructor() {
      if (!Singleton._instance) {
        Singleton._instance = this;
      }
      this.id = Math.random();
      return Singleton._instance;
    }
  }

const a = new Singleton();
const b = new Singleton();

console.log('a:', a);
console.log('b', b);

console.log(a === b);
















