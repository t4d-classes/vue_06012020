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

// fetch('http://localhost:3070/cars', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ make: 'Ford', model: 'T', year: 1920, color: 'black', price: 400 }),
// })
//   .then(res => res.json())
//   .then(car => console.log(car));

// Lab Exercise - Chain the Following Operations using the Official Fetch API

// 1. Get All the Cars and Display the Results in Console
// 2. Add a New Car
// 3. Retrieve the New Car from the REST API
// 4. Replace the New Car with another Car that has a different color.
// 5. Get all of the car from the REST API
// 6. Delete the car you added.
// 7. Get all of the car from the REST API

const getAllCars = () =>
  fetch('http://localhost:3070/cars')
    .then(res => res.json());

const getOneCar = (carId) =>
  fetch('http://localhost:3070/cars/' + encodeURIComponent(carId))
    .then(res => res.json());

const appendCar = car => 
  fetch('http://localhost:3070/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then(res => res.json());

const replaceCar = car => 
  fetch('http://localhost:3070/cars/' + encodeURIComponent(car.id), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then(res => res.json());
  
const deleteCar = (carId) =>
  fetch('http://localhost:3070/cars/' + encodeURIComponent(carId), {
    method: 'DELETE',
  })
    .then(res => res.json());

getAllCars()
  .then(cars => {
    console.log(cars);
  })
  .then(() => {
    return appendCar({ make: 'Ford', model: 'T', year: 1920, color: 'black', price: 400 })
  })
  .then(car => {
    return getOneCar(car.id);
  })
  .then(car => {
    console.log(car);
    car.color = 'purple';
    return replaceCar(car)
      .then(() => {
        return getAllCars();
      })
      .then(cars => {
        console.log(cars);
        return deleteCar(car.id);
      });
  })
  .then(() => {
    return getAllCars();
  })
  .then(cars => {
    console.log(cars);
  });
  

