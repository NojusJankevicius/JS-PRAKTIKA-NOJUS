class Car{
    brand;
    model;
    year;
    color;
    fuelTypes;
    price;
    constructor(brand, model, year, color, fuelTypes, price){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelTypes = fuelTypes;
        this.price = price;
    }

    getFuelType(){
        return this.fuelTypes.join('/')
    }

}


const mashinos =[
  new Car('Audi', 'Nesnaudi', '2015', 'yellow', ['petrol'], 1454),
  new Car('Opel', 'Žopel', '2000', 'yellow', ['diesel', 'gas'], 1454),
  new Car('KIA', 'NOKIA', '2015', 'yellow', ['electric' , 'petrol'], 10000),
  new Car('BMW', 'Žopel', '2000', 'yellow', ['diesel', 'gas'], 1454),
  new Car('Opel', 'Žopel', '2000', 'yellow', ['diesel', 'gas'], 1454),
  new Car('Tesla', 'X-AE-A-12', '2019', 'yellow', ['electric'], 45000),
  new Car('Opel', 'Žopel', '2017', 'yellow', ['petrol', 'gas'], 1454),
  new Car('Opel', 'Žopel', '2000', 'yellow', ['diesel', 'gas'], 1454),
]

console.table(mashinos.map(x => x))

mashinos.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getFuelType()}`));


// 5 užd

let electricCars = [];

// mashinos.forEach(car => {
//     electricCars.push(car.fuelTypes.filter(fuel => fuel === 'electric'));
// })

mashinos.forEach(car => car.fuelTypes.forEach(fuel => fuel == 'electric' ? electricCars.push(car) : null));

console.log('Eletriniai:')
console.log(electricCars);

let newPetrolCars = [];

mashinos.forEach(car => car.year > 2016 && car.fuelTypes.forEach(fuel => fuel == 'petrol' ? newPetrolCars.push(car) : null));

console.log('nauji benzinininiai automobiliai:');
console.log(newPetrolCars);

let audiBetween2012And2016 = [];

mashinos.forEach(car => car.brand == 'Audi' && car.year > 2012 && car.year < 2016 && car.fuelTypes.forEach(fuel => fuel != 'diesel' ? audiBetween2012And2016.push(car) : null));

console.log('audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai:');
console.log(audiBetween2012And2016);

const electricAvg = electricCars.reduce((avg, car, _, {length}) => avg + car.price / length, 0);
console.log(electricAvg);

const newPetrolCarsSum = newPetrolCars.reduce((sum, car) => sum + car.price, 0);
console.log(newPetrolCarsSum);



const mashinosLessInfo = mashinos.map(car => car.brand && car.model && car.price && car.getFuelType());
console.log(mashinosLessInfo)