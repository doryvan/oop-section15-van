// Parent class
class Shape {
    constructor(name){
        this.name = name;
    }
    }
    logName(){
        console.log('Shape Name: '+ this.name)
    }
// Sub class
class Rectangle extends Shape {
    constructor(name,width,height){
        super(name);

        this.width = width;
        this.height = height;

    }
}
class Circle extends Shape {
    constructor(name,radius){
        super(name);

        this.radius = radius;
    }
    logName(){
        console.log("Circle Name: ")
    }
    }
const rect = new Rectangle ('Rect 1', 20,20);
console.log(rect);
rect.logName();

class App {
    constructor() {
      this.serverName = 'localhost';
  
      document
        .querySelector('button')
        .addEventListener('click', this.getServerName.bind(this));
    }
  
    getServerName() {
      console.log(this);
    }
  }
  
  const app = new App();
class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get firstName() {
      return this.capitalizeFirst(this._firstName);
    }
  
    set firstName(value) {
      this._firstName = this.capitalizeFirst(value);
    }
  
    get lastName() {
      return this.capitalizeFirst(this._lastName);
    }
  
    set lastName(value) {
      this._lastName = this.capitalizeFirst(value);
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    capitalizeFirst(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
  
  const person1 = new Person('john', 'doe');
  console.log(person1.firstName);
  console.log(person1.lastName);
  
  person1.firstName = 'joe';
  person1.lastName = 'smith';
  console.log(person1.fullName);
  console.log(person1);


function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    },
  });

  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value;
    },
  });

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
  });
}

Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// Object Literal
const PersonObj = {
  _firstName: 'jane',
  _lastName: 'doe',

  get firstName() {
    return Person.prototype.capitalizeFirst(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return Person.prototype.capitalizeFirst(this._lastName);
  },

  set lastName(value) {
    this._lastName = value;
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);

const person2 = Object.create(PersonObj);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);

class Wallet {
    #balance = 0;
    #transactions = [];
  
    deposit(amount) {
      this.#processDeposit(amount);
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.#balance) {
        console.log('Not enough funds');
        return;
      }
  
      this.#processWithdraw(amount);
      this.#balance -= amount;
    }
  
    #processDeposit(amount) {
      console.log(`Depositing ${amount}`);
  
      this.#transactions.push({
        type: 'deposit',
        amount,
      });
    }
  
    #processWithdraw(amount) {
      console.log(`Withdrawing ${amount}`);
  
      this.#transactions.push({
        type: 'withdraw',
        amount,
      });
    }
  
    get balance() {
      return this.#balance;
    }
  
    get transactions() {
      return this.#transactions;
    }
  }
  
  const wallet = new Wallet();
  wallet.deposit(500);
  wallet.withdraw(100);
  console.log(wallet.balance);
  

Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

Object.defineProperty(rectObj, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'New Name';
delete rectObj.name;

console.log(rectObj);

for (let [key, value] of Object.entries(rectObj)) {
  console.log(`${key}: ${value}`);
}

console.log(Object.getOwnPropertyDescriptors(rectObj));


const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
  };
  
  Object.seal(rectObj);
  
  let descriptors = Object.getOwnPropertyDescriptors(rectObj);
  // console.log(descriptors);
  
  //  Can not add and remove properties
  rectObj.color = 'red';
  delete rectObj.name;
  
  // Can change values
  rectObj.width = 20;
  
  // console.log(rectObj);
  
  const circleObj = {
    name: 'Circle 1',
    radius: 30,
  };
  
  Object.freeze(circleObj);
  
  descriptors = Object.getOwnPropertyDescriptors(circleObj);
  

  circleObj.color = 'blue';
  delete circleObj.name;
  circleObj.name = 'New Name';
  
  console.log(descriptors);
  
 
  console.log('rectObj is sealed?', Object.isSealed(rectObj));
  console.log('rectObj is frozen?', Object.isFrozen(rectObj));
  console.log('circleObj is sealed?', Object.isSealed(circleObj));
  console.log('circleObj is frozen?', Object.isSealed(circleObj));