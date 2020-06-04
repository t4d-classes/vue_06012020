'use strict';

// setTimeout(() => {
//     console.log('a');
//     setTimeout(() => {
//         console.log('b');
//         setTimeout(() => {
//             console.log('c');
//         }, 500);
//     }, 1000);
// }, 2000);

const allDone = () => {
  console.log('all done');
};

setTimeout(() => {
  console.log('a');
}, 2000);

setTimeout(() => {
  console.log('b');
}, 500);

setTimeout(() => {
  console.log('c');
}, 1000);

// Lab Exercise:

// Run the allDone after all three setTimeouts have expired, and their code has executed.
// Rules:
// 1. All three setTimeout's have to be initiated in the first task.
// 2. You cannot change the delay values (view them as random) and you cannot wrap the allDone in a setTimeout which is larger than all of the others
// 3. You cannot use promises...






