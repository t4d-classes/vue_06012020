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

// const step1 = () => {

//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve('step 1 complete');
//     }, 2000);
  
//   });

// };

// const step2 = () => {

//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       reject('step 2 error');
//     }, 2000);
  
//   });

// };

// const step3 = () => {

//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve('step 3 complete');
//     }, 2000);
  
//   });

// };

// step1()
//   .then(result => {
//     console.log(result);
//     return step2();
//   })
//   .then(result => {
//     console.log(result);
//     return step3();
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });



// const myFetch = (url) => {

//   return new Promise(resolve => {

//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener('readystatechange', () => {
    
//       if (xhr.status === 200 && xhr.readyState === 4) {
//         resolve(JSON.parse(xhr.responseText));
//       }
    
//     });
    
//     xhr.open('GET', url);
//     xhr.send();

//   });

// };


// Exercise
// Implement the following myFetch function, I should be able to take this code and paste into your file, and the code works.
// The cars variable should be populated with an array of cars.

// myFetch('http://localhost:3070/cars').then(cars => console.log(cars));

// fetch('http://localhost:3070/cars')
//   .then(res => res.json())
//   .then(cars => console.log(cars));

fetch('http://localhost:3070/cars', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ make: 'Ford', model: 'T', year: 1920, color: 'black', price: 400 }),
})
  .then(res => res.json())
  .then(car => console.log(car));
