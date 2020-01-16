class Person {
  constructor(name = 'Anon', age = 0) {
    console.log('test');
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'hi, I am ' + this.name + '!';
    return `hi, I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
};

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
};

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.homeLocation) {
      return greeting +=r ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Charlie Billadeau', 27, 'Minnesota');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());