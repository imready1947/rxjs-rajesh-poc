console.clear();
import { Observable, interval, merge } from 'rxjs';
import {
  auditTime,
  bufferTime,
  debounceTime,
  sampleTime,
  throttleTime,
  tap,
  take,
} from 'rxjs/operators';
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { zip } from 'rxjs';
import { Subject } from 'rxjs';

// // Creating a basic observable
// const simpleObservable = new Observable((observer) => {
//   observer.next('Hello');
//   observer.next('RxJS');
//   observer.complete();
// });
// // Subscribing to the observable
// simpleObservable.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Observable complete'),
// });

// // Creating a basic observable
// const simpleObservable = new Observable((observer) => {
//   observer.next('Hello');
//   observer.next('RxJS');
//   observer.complete();
// });

// // Subscribing to the observable
// simpleObservable.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Observation complete'),
// });

// Creating a subject
const subject = new Subject();

// Creating an observable from an array
const numbersObservable = from([1, 2, 3, 4, 5]);

// Applying map and filter operators
numbersObservable
  .pipe(
    map((num) => num * 2),
    filter((num) => num > 5)
  )
  .subscribe((result) => console.log(result));

// // Creating two observables
// const observable1 = interval(1000); // emits every second
// const observable2 = interval(500); // emits every half second

// // Combining observables using zip
// zip(observable1, observable2).subscribe(([num1, num2]) => {
//   console.log(`Observable 1: ${num1}, Observable 2: ${num2}`);
// });

// const source = interval(1000);
// const example = source.pipe(
//   map((value) => value * 2),
//   filter((value) => value % 4 === 0)
// );

// example.subscribe((value) => console.log(value));
