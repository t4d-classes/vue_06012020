'use strict';

// class Promise {

//   constructor(fn) {

//     this.resolveFns = [];
//     this.rejectFns = [];

//     const resolve = (data) => {
//       this.resolveFns.forEach(resolveFn => resolveFn(data));
//     };

//     const reject = (data) => {
//       this.rejectFns.forEach(rejectFn => rejectFn(data));
//     };

//     fn(resolve, reject);
//   }

//   then(cb) {
//     this.resolveFns.push(cb);
//   }

//   catch(cb) {
//     this.rejectFns.push(cb);
//   }
// }


// console.log('creating promise');

// const p = new Promise((resolve, reject) => {

//   console.log('calling host function: setTimeout');

//   setTimeout(() => {
//     console.log('calling reject');
//     reject('some error');
//   }, 2000);

// });


// p
//   .then((result) => {
//     console.log('resolved:', result);
//   })
//   .catch(result => {
//     console.log('rejected:', result);
//   });

// console.log('waiting');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {

  if (xhr.status === 200 && xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }

});

xhr.open('GET', 'http://localhost:3070/cars');
xhr.send();

// Exercise
// Implement the following myFetch function, I should be able to take this code and paste into your file, and the code works.
// The cars variable should be populated with an array of cars.

myFetch('http://localhost:3070/cars').then(cars => console.log(cars));
