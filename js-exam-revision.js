const people = [
  {
    name: "Trydmantė",
    surname: "Krapštelytė",
    age: 19,
    height: 1.7,
    weight: 85,
    sex: "female",
  },
  {
    name: "Ovidijus",
    surname: "Uosiūnas",
    age: 26,
    height: 1.98,
    weight: 50,
    sex: "male",
  },
  {
    name: "Makaras",
    surname: "Orlovas",
    age: 17,
    height: 1.59,
    weight: 90,
    sex: "male",
  },
  {
    name: "Elžbieta",
    surname: "Kuligula",
    age: 64,
    height: 1.73,
    weight: 186,
    sex: "female",
  },
  {
    name: "Gertrūda",
    surname: "Navarotė",
    age: 66,
    height: 1.77,
    weight: 68,
    sex: "female",
  },
];
//   - Atspausdinti kiekvieną elementą
const everyPerson = people.forEach((person) => console.log(person));

//   - Atspausdinti kiekvieno elemento pilną vardą
const PeopleFullname = people.forEach((person) =>
  console.log(person.name + " " + person.surname)
);
//   - Atspausdinti kiekvieno elemento kūno masės indeksą
const calcKMI = (weight, height) =>
  Math.round((100 * weight) / height ** 2) / 100;
people.forEach(({ weight, height }) => console.log(calcKMI(weight, height)));

//   - kurių vardas ilgesnis nei 6 simboliai
console.log("loooong names:");
console.log(people.filter((person) => person.name.length > 7));

//   - kurių svoris didesnis nei 80kg
console.log("fatties:");
console.log(people.filter((person) => person.weight > 80));

//   - kurie aukštesni nei 185cm
console.log("Tall people:");
console.log(people.filter((person) => person.height > 1.8));

//   - ūgius
console.log(
  "ūgius: ",
  people.map((person) => person.height)
);

//   - svorius
console.log(
  "svorius: ",
  people.map((person) => person.weight)
);

//   - ūgius, svorius ir amžius : [{height, weight, age}, ...]
console.log("ūgius, svorius ir amžius: ");
console.table(
  people.map(({ weight, height, age }) => ({ weight, height, age }))
);

//   - KMI indeksus
console.log("KMI indeksus: ");
console.table(people.map(({ weight, height }) => calcKMI(weight, height)));

//   - KMI indeksus ir amžius
console.log("KMI indeksus ir amžius: ");
console.table(
  people.map(({ weight, height, age }) => ({
    age,
    KMI: calcKMI(weight, height),
  }))
);

//   - svorių vidurkį
console.log(
  "weight avg: ",
  people.reduce((avg, person) => avg + person.weight, 0 / people.length)
);

//   - ūgio vidurkį
console.log(
  "height avg: ",
  people.reduce((avg, person) => avg + person.height, 0 / people.length)
);

class Person {
  name;
  surname;
  age;
  height;
  weight;
  sex;

  constructor({ name, surname, age, height, weight, sex }) {
    (this.name = name),
      (this.surname = surname),
      (this.age = age),
      (this.height = height),
      (this.weight = weight),
      (this.sex = sex);
  }

  get BMI() {
    return Math.round(100 * this.weight / this.height ** 2) / 100;
  }
  get toString() {
    const {name, surname, ...rest} = this;
    const restValue = Object.entries(rest)
    .filter(([_, value]) => typeof value !== 'function')
    .reduce((restValue, [name, val]) => restValue + `\n\t${name}: ${val}`, '');
  return `${name} ${surname}:` + restValue;
  }
}

const newZhmones = people.map((x) => new Person(x));

console.table(newZhmones);
newZhmones.forEach(x => console.log(`${x.name}: ${x.BMI} KMI`));
newZhmones.forEach(x => console.log(x.toString));

const WomenYoungerThan20WeightLessThan70 = newZhmones.filter(
  (person) => person.sex == "female" && person.age < 20 && person.weight > 70
);
console.log(
  "Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg",
  WomenYoungerThan20WeightLessThan70
);

const MenOlderthan25AndLowKMI = newZhmones.filter(
  (person) => person.sex == "male" && person.age > 25 && person.BMI < 18,
  5
);
console.log(
  "Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5",
  MenOlderthan25AndLowKMI
);

const obeseChildren = newZhmones.filter(
  (person) => person.age < 18 && person.BMI > 30
);
console.log("Atrinkti vaikus, su antsvoriu (KMI > 30)", obeseChildren);

const fatSeniors = [];
newZhmones.filter((person) => {
  if (person.sex == "female" && person.age > 63 && person.BMI > 30) {
    fatSeniors.push(person);
  }
  if (person.sex == "male" && person.age > 64 && person.BMI > 30) {
    fatSeniors.push(person);
  }
});
console.log("Atrinkti pensininkus, su antsvoriu (KMI > 30)", fatSeniors);

// const outsideBMIScope = zhmones.filter(person => 25 < person.getBMI() < 18.5 );
const outsideBMIScope = [];
newZhmones.filter((person) => {
  if (person.BMI < 18.5) {
    return outsideBMIScope.push(person);
  }
  if (person.BMI > 25) {
    outsideBMIScope.push(person);
  }
});
console.log(
  "Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]",
  outsideBMIScope
);
