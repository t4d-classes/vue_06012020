
const firstName = 'Eric';
const height = 69;
const isNicePerson = true;

console.log(typeof firstName);
console.log(typeof height);
console.log(typeof isNicePerson);

const person = {
  firstName: 'Eric',
  height: 69,
  isNicePerson: true,
  address: {
    city: 'Amherst',
    state: 'VA',
  },
};

console.log(person);

person.firstName = 'Amy'; // allowed

person = {
  firstName: 'Amy'
};  // not allowed
