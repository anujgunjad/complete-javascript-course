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

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1st 

const [player1, player2] = game.players;
console.log("Player 1", player1);
console.log("Player 2", player2);

// 2nd

const [gk, ...fieldPlayers] = player1;
console.log("gk", gk);
console.log("fieldPlayers", fieldPlayers);

//3rd

const allPlayers = [...player1, ...player2];
console.log("allPlayers", allPlayers);

//4th

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log("Final Player", players1Final);

//5th

const {team1, x: draw, team2} = game.odds;
console.log("team1: ", team1, "draw: ", x, "team2: ", team2);

