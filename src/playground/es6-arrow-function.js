// // const square = function (x) {
// //   return x *x ;
// // };

// // console.log(square(8));

// // // const squareArrow = (x) => {
// // //   return x * x;
// // // };

// // const squareArrow = x => x * x;

// console.log(squareArrow(8));

const fullName = "Charlie Billadeau";

const getFirstName = fullName => {
  return fullName.split(' ')[0];
}

console.log(getFirstName(fullName));

const getFirstNameShort = fullName => fullName.split(' ')[0];

console.log(getFirstNameShort(fullName));

// arguments object with arrow functions - no longer bound with arrow functions
// this keyword - no longer bound

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// // doesn't work
// console.log(add(55, 1));

// const user = {
//   name: "Charlie",
//   cities: ["Saint Paul", "Minneapolis", "Hopkins"],
//   printPlacesLived: function () {
//     console.log(this.name);
//     console.log(this.cities);

//     this.cities.forEach(function (city) {
//       console.log(this.name + " has lived in " + city)
//     });
//   }
// };

// user.printPlacesLived();
// undefined!!!!!!!

// instead...
// const user = {
//   name: "Charlie",
//   cities: ["Saint Paul", "Minneapolis", "Williamstown"],
//   printPlacesLived() {
//     const cityMessages = this.cities.map(city => user.name + ' has lived in ' + city);
//   return cityMessages;
//   }
// };

// console.log(user.printPlacesLived());


const multiplier = {
  numbers: [1, 2, 6, 8],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply())