'use strict';

let counter = 0;

const outer = () => {

  let t = 2;

  setTimeout(function changeToFour() {
    document.querySelector('#app').textContent = counter++;
    t = 4;
  }, 2000);

  return function outputToConsole() {
    document.querySelector('#app').textContent = counter++;
    console.log(t);


  };

};

document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('#app').textContent = counter++;
  const inner = outer();
  
  inner();
  
  setTimeout(function callInnerAgain() {
    inner();
  }, 4000);
  
});


