// let a = null 
// let b = 'test'
// let c =4

// const d = (a,b,c) 
// console.log(d)

// const test = [1,3,4,'test']

// if(1 in test) console.log('true');

// todo : a voir 
// instanceof   *


// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding property to constructor function
// Person.prototype.gender = 'male';

// // prototype value of Person
// console.log(Person.prototype);

// // inheriting the property from prototype
// console.log(person1.gender);
// console.log(person2.gender);


// const a = (...args) =>{
//   console.log(args)
// }

// a({a:2,b:3},'test',2,2)

// javascript closure example

// outer function
// function greet(a) {

//     // variable defined outside the inner function
//     let name = 'John';

//     // inner function
//     function displayName() {

//         // accessing name variable
//         return 'Hi' + ' ' + name + a;
      
//     }

//     return displayName;
// }

// const g1 = greet("a");
// console.log(g1); // returns the function definition
// console.log(g1()); // returns the value