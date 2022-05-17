// console.log(__dirname, __filename);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  }
}

module.exports = Person;
