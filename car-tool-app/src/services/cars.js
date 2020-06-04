
export const getAllCars = () =>
  fetch('http://localhost:3070/cars')
    .then(res => res.json());

export const getOneCar = (carId) =>
  fetch('http://localhost:3070/cars/' + encodeURIComponent(carId))
    .then(res => res.json());

export const appendCar = car => 
  fetch('http://localhost:3070/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then(res => res.json());

export const replaceCar = car => 
  fetch('http://localhost:3070/cars/' + encodeURIComponent(car.id), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then(res => res.json());

export const deleteCar = (carId) =>
  fetch('http://localhost:3070/cars/' + encodeURIComponent(carId), {
    method: 'DELETE',
  })
    .then(res => res.json());
