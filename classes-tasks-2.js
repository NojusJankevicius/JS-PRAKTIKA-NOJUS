console.groupCollapsed("1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY");
{
  // ... code

  class Player {
    constructor(name, age, height, weight) {
      // complete function
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      // complete function

      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      // complete function
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      // complete function

      return `${this.name} weighs ${this.weight}kg`;
    }
  }
  const p1 = new Player("David Jones", 25, 175, 75);

  console.log({
    "David Jones is age 25": p1.getAge(),
    "David Jones is 175cm": p1.getHeight(),
    "David Jones weighs 75kg": p1.getWeight(),
  });
}
console.groupEnd();

console.groupCollapsed("2. - https://edabit.com/challenge/yxKoCKemzacK6PECM");
{
  class Calculator {
    // Write functions to add(), subtract(), multiply() and divide()
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    add(x, y) {
      this.x = x;
      this.y = y;
      return x + y;
    }
    subtract(x, y) {
      this.x = x;
      this.y = y;
      return x - y;
    }
    multiply(x, y) {
      this.x = x;
      this.y = y;
      return x * y;
    }
    divide(x, y) {
      this.x = x;
      this.y = y;
      return x / y;
    }
  }

  var calculator = new Calculator();

  console.log(calculator.add(10, 5)); // ➞ 15
  console.log(calculator.subtract(10, 5)); // ➞ 5
  console.log(calculator.multiply(10, 5)); // ➞ 50
  console.log(calculator.divide(10, 5)); // ➞ 2
}
console.groupEnd();

console.groupCollapsed("3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS");
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = this.firstname + " " + this.lastname;
      this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }
  }

  emp1 = new Employee("John", "Smith");
  console.log(emp1.fullname); //➞ "John Smith"

  emp2 = new Employee("Mary", "Sue");
  console.log(emp2.email); //➞ "mary.sue@company.com"

  emp3 = new Employee("Antony", "Walker");
  console.log(emp3.firstname); //➞ "Antony"
}
console.groupEnd();

console.groupCollapsed("4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu");
{
  // {other person name} is {older than / younger than / the same age as} me.
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (other.age > this.age) {
        return `${other.name} is older than me.`;
      } else if (other.age < this.age) {
        return `${other.name} is younger than me.`;
      } else if (this.age === other.age) {
        return `${other.name} is the same age as me.`;
      }
    }
  }

  p1 = new Person("Samuel", 24);
  p2 = new Person("Joel", 36);
  p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2)); // ➞ "Joel is older than me."

  console.log(p2.compareAge(p1)); // ➞ "Samuel is younger than me."

  console.log(p1.compareAge(p3)); // ➞ "Lily is the same age as me."
}
console.groupEnd();

console.groupCollapsed("5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ");
{
  class Circle {
    constructor(r) {
      this.r = r;
    }
    getArea() {
      return Math.PI * this.r ** 2;
    }
    getPerimeter() {
      return 2 * Math.PI * this.r;
    }
  }

  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
}
console.groupEnd();

console.groupCollapsed("6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b");
{
  class Name {
    constructor(fname, lname) {
      this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = this.fname + " " + this.lname;
      this.initials = this.fname.slice(0, 1) + "." + this.lname.slice(0, 1);
    }
  }

  a1 = new Name("john", "SMITH");

  console.log(a1.fname); //➞ "John"
  console.log(a1.lname); //➞ "Smith"
  console.log(a1.fullname); //➞ "John Smith"
  console.log(a1.initials); //➞ "J.S"
}
console.groupEnd();

console.groupCollapsed("7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke");
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  function sweetestIcecream(arr) {
    let taste = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10,
    };
    return Math.max(
      ...arr.map((ice) => {
        return taste[ice.flavor] + ice.numSprinkles;
      })
    );
  }

  ice1 = new IceCream("Chocolate", 13); // value of 23
  ice2 = new IceCream("Vanilla", 0); // value of 5
  ice3 = new IceCream("Strawberry", 7); // value of 17
  ice4 = new IceCream("Plain", 18); // value of 18
  ice5 = new IceCream("ChocolateChip", 3); // value of 8

  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5])); //➞ 23

  console.log(sweetestIcecream([ice3, ice1])); //➞ 23

  console.log(sweetestIcecream([ice3, ice5])); //➞ 17
}
console.groupEnd();

console.groupCollapsed("8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi");
{
  class OnesThreesNines {
    constructor(x) {
      this.x = x;
      this.ones = Math.floor(x / 1);
      this.threes = Math.floor(x / 3);
      this.nines = Math.floor(x / 9);
    }
  }

  let n1 = new OnesThreesNines(5);
  console.log(n1.nines); //➞ 0
  console.log(n1.ones); //➞ 5
  console.log(n1.threes); //➞ 1
}
console.groupEnd();

console.groupCollapsed("9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp");
{
  class User {
    static userCount = 0;
    constructor(username) {
      (this.username = username), User.userCount++;
    }
  }

  u1 = new User("johnsmith10");
  console.log(User.userCount); //➞ 1

  u2 = new User("marysue1989");
  console.log(User.userCount); //➞ 2

  u3 = new User("milan_rodrick");
  console.log(User.userCount); //➞ 3
}
console.groupEnd();

console.groupCollapsed("10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn");
{
  function Book(title, author) {
    this.title = title;
    this.author = author;
    // Write your properties and methods here
    this.getTitle = function () {
      return "Title: " + this.title;
    };
    this.getAuthor = function () {
      return "Author: " + this.author;
    };
  }
  // Instantiate your Book constructor here
  PP = new Book("Pride and Prejudice", "Jane Austen");
  H = new Book("Hamlet", "William Shakespeare");
  WP = new Book("War and Peace", "Leo Tolstoy");

  console.log(PP.title); //➞ "Harry Potter"
  console.log(PP.author); //➞ "J.K. Rowling"
  console.log(PP.getTitle()); //➞ "Title: Harry Potter"
  console.log(PP.getAuthor()); //➞ "Author: J.K. Rowling"
}
console.groupEnd();
