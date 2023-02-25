'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


//Array Destructuring

// let [main, secondary] = restaurant.categories;

//Switiching variables using Destructuring

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.orderFood(0, 1);
// console.log(starter, mainCourse);

//Object Destructuring
// const {
//   name: restaurantName, 
//   location: restaurantLocation,
//   openingHours: restaurantHours,
//   categories: tags
// } = restaurant;
//  console.log(restaurantName, restaurantHours, tags);

// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);

//Spread Oprator
// const arr = [7, 8, 9];
// console.log(1, 2 , ...arr);

//Q - Diffrence between destructure and spread operator
// -> Spread operator gets all the value from array and does not create new variable.

// const clone = [...arr];
// console.log(clone);

//Rest Pattern
function add(...data) {
  let ans = 0;
  for(let i = 0; i < data.length; i++){
    ans += data[i];
  }
  return ans;
}

console.log(add(1,2,3));
const arr = [1,2,3,4];
console.log(add(...arr));

let x = 0;

console.log(x ??= 10); //0
console.log(x ||= 10); //10