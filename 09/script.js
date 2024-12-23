"use strict";
/**
 * Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK �
 */

// const checkDogs = (dogsJulia = [], dogsKate = []) => {
//   // Creating a new array for Julia with the first and two last dogs removed
//   const dogsJuliaFixed = dogsJulia.slice();
//   dogsJuliaFixed.splice(0, 1);
//   dogsJuliaFixed.splice(-2);

//   console.log(dogsJuliaFixed);
//   // Creating an array merging the julia corrected array and Kate's dogs array
//   const allDogs = dogsJuliaFixed.concat(dogsKate);
//   console.log(allDogs);
//   // for each dog log if it is an adult or not
//   allDogs.forEach((dog, index) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${index + 1} is an adult of ${dog} years`);
//     } else {
//       console.log(
//         `Dog number ${index + 1} is still a puppy 🐶 of ${dog} years`
//       );
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7, 5], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
/////////////////////////////////////////////////
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  //! .SLICE() method: create a copy of the entire array (Equivalent to [...arr]) or just some of 
  // create a shallow copya
  console.log(arr.slice())
  // create a copy of a part (from the second to the before last)
  console.log(arr.slice(1, -1));
  // create a copy of one element to the end of the array
  console.log(arr.slice(2))

  //! SPLICE() method: + mutate the original array
  //                  + delete elements arr.splice(startDeleteElement, HowManyElementsToDelete);

  arr.splice(0, 4);
  console.log(arr);
  
  //! REVERSE() method: reverses the order of the array (Mutate the original one)
  
  console.log(arr2.reverse())
  //! .concat() method: concatenate or merge two arrays (equivalent to [...arr1, ...arr2]) (Create a copy, not mutate the original)
  
  console.log(concatenatedArray);
  console.log(arr2);
  const arr2 = ['j', 'i', 'h', 'g'].reverse();
  const letters = arr.concat(arr2);
  
  //! .join() method: joins the array into a string with the desired separation (creates a copy, and not mutate the original)
  const alphabets =  letters.join('  #  ');
  console.log(alphabets);
  
  function closure () {
    let counter = 0;
    const closure1 = function () {
      let counter1 = 1;
      const closure2 = function () {
        console.log(counter, counter1);
      }
      return closure2;
  }
  return closure1();
}

console.dir(closure());

for (let i = 0; i < arr.length; i++) {
  console.log(arr.at(i));
}

// Displaying each movement on the movement container
const displayMovementFirstTry = function ({ movements }) {
  movements.forEach((movement, index) => {
    // Creating the movement div
    const movementDiv = document.createElement('div');
    movementDiv.className = 'movements__row';
    // Creating the movement value div
    const movementValue = document.createElement('div');
    movementValue.className = 'movements__value';
    movementValue.textContent = `${movement}€`;
    // Creating the movement type div
    const movementType = document.createElement('div');
    movementType.className = 'movements__type';
    // Checking if the movement is a withdrew or a deposit and acting on each
    if (movement > 0) {
      movementType.classList.add('movements__type--deposit');
      movementType.textContent = `${index + 1} DEPOSIT`;
    } else {
      movementType.classList.add('movements__type--withdrawal');
      movementType.textContent = `${index + 1} WITHDRAWAL`;
    }

    // Appending the div value and movement type to movement div
    movementDiv.append(movementType, movementValue);
    // Appending the movement div to the movements container
    containerMovements.appendChild(movementDiv);
  });
};
displayMovementFirstTry(account1);


*/

// const euroToUsd = 1.1;

// const movementsInUsd = movements.map((movement) =>
//   Math.round(movement * euroToUsd)
// );
// console.log(movementsInUsd);

// const movementsUsd = [];

// for (const movement of movements) {
//   movementsUsd.push(Math.round(movement * euroToUsd));
// }

// console.log(movementsUsd);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const withdrawal = movements.filter((movement) => movement < 0);
// console.log(withdrawal);

// const globalBalance = movements.reduce(
//   (acc, currentNumber) => acc + currentNumber,
//   0
// );
// console.log(globalBalance);
// const maxMovement = movements.reduce((acc, currMov) =>
//   acc > currMov ? acc : currMov
// );

// console.log(maxMovement)
//   const arr = [1, -2, 4, 0, -9]
// const min = arr.reduce((acc, num) => acc < num? acc: num);
// console.log(min); // Output: -9

/**
   * Coding Challenge #2
  Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
  dog ages to human ages and calculate the average age of the dogs in their study.
  Your tasks:
  Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
  ages ('ages'), and does the following things in order:
  1. Calculate the dog age in human years using the following formula: if the dog is 
  <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
  humanAge = 16 + dogAge * 4
  2. Exclude all dogs that are less than 18 human years old (which is the same as 
  keeping dogs that are at least 18 years old)
  3. Calculate the average human age of all adult dogs (you should already know 
  from other challenges how we calculate averages �)
  4. Run the function for both test datasets
  Test data:
  § Data 1: [5, 2, 4, 1, 15, 8, 3]
  § Data 2: [16, 6, 10, 5, 6, 1, 4]
  GOOD LUCK �
  
  
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
  const euroToUsd = 1.1;
  
  const usdBalance = movements
  
    const averageAge = dogsArr
      .map((age) => (age > 2 ? age * 4 + 16 : age * 2))
      .filter((age) => age >= 18)
      .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
  
    console.log(averageAge);
  };
  
  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
  
  console.log(usdBalance)
  // Calculate the average age of human ages of the dogs
  const calcAverageHumanAge = function (dogsArr = []) {
    // calculate each dog human age
  const humanAge = dogsArr.map((dogAge) =>
    dogAge > 2 ? dogAge * 4 + 16 : dogAge * 2
  );
  console.log(humanAge);
  // exclude the non adult dogs
  const humanAdultDogs = humanAge.filter((dogAge) => dogAge >= 18);
  console.log(humanAdultDogs);
  // Calduclate the average
  // const averageAge = humanAdultDogs.reduce((acc, age) => acc + age, 0) / humanAdultDogs.length;
  // const averageAge =
  //   humanAdultDogs.reduce((acc, age, index, arr) => {
  //     if (index === arr.length - 1) {
  //       return (acc + age) / arr.length;
  //     } else {
    //       return acc + age;
  //     }
  //   }, 0);

  //        const averageAge = humanAdultDogs.reduce(
    //          (acc, age) => acc + age / humanAdultDogs.length,
  //    0
  //  );
  
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
  const lastMovIndex = movements.findLastIndex(mov => Math.abs(mov) > 2000);
  console.log(`You last large movement was ${movements.length - lastMovIndex} movements ago`)
  console.log(movements.at(lastMovIndex));
    
    */

// Coding Challenge #4

/*
    This time, Julia and Kate are studying the activity levels of different dog breeds.

  YOUR TASKS:
  1. Store the average weight of a "Husky" in a variable "huskyWeight".
  2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable).
  3. Create an array "allActivities" of all the activities of all the dog breeds.
  4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
  5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
  6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
  7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

  BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

*/

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

/*
    This time, Julia and Kate are studying the activity levels of different dog breeds.

  YOUR TASKS:
  1. Store the average weight of a "Husky" in a variable "huskyWeight".
  2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable).
  3. Create an array "allActivities" of all the activities of all the dog breeds.
  4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
  5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
  6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
  7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

  BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

  */
/*

  // Store the average weight of a 'Husky' in a variable 'huskyWeight'
  const huskyWeight = breeds.find((dog) => dog.breed === "Husky").averageWeight;
  console.log(huskyWeight);

  // Find the name of the only breed that likes both 'running' and 'fetch' and store it in a variable called 'dogBothActivities'

  const dogBothActivities = breeds.find(
    (breed) =>
      breed.activities.includes("running") && breed.activities.includes("fetch")
  ).breed;
  // console.log(dogBothActivities);

  // create an array 'allActivities' of all the activites of all the dog breeds

  const allActivities = breeds.flatMap((breed) => breed.activities);
  // console.log(allActivities);

  // Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.

  const uniqueActivities = [...new Set(allActivities)];
  // console.log(uniqueActivities);

  // Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
  const swimmingAdjacent = [
    ...new Set(
      breeds
        .filter((breed) => breed.activities.includes("swimming"))
        .flatMap((breed) => breed.activities)
        .filter((activity) => activity !== "swimming")
    ),
];
console.log(swimmingAdjacent);

// Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

if (breeds.every((breed) => breed.averageWeight >= 10)) {
  console.log(true);
} else {
  console.log(false);
}

console.log(breeds.every((breed) => breed.averageWeight >= 10) ? true : false);

//   7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

console.log(
  breeds.some((breed) => breed.activities.length >= 3) ? true : false
);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsGrouped = Object.groupBy(movements, mov => mov > 0 ? 'diposit': 'withdrawal');
console.log(movementsGrouped)


const breedFetcher = Math.max(...breeds
.filter((breed) => breed.activities.includes("fetch"))
.map((breed) => breed.averageWeight));
console.log(breedFetcher);
*/

// Bonus: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
// Grouping by

/**Coding Challenge #5

Julia and Kate are still studying dogs. This time they are trying to figure out if the dogs in their area are eating too much or too little food.

Formula for calculating recommended food portion:
recommendedFood = weight ** 0.75 * 28.
(The result is in grams of food, and the weight needs to be in kg.)

Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.

Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion.

Your Tasks:

Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array; simply loop over the array (we never did this before, so think about how you can do this without creating a new array).
 */

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. looping over the dogs array, calculating the recommended portion property and add it to the existing
// Object
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28);
});

// Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
  console.log(`sarahDog is eating too little`);
} else if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
  console.log(`sarahDog is eating too much`);
} else {
  console.log(`sarahDog is eating well`);
}

// Create an array of all owners of the dogs that eats to much and another one for the ones who eats a bit
const ownersCategorised = Object.groupBy(dogs, (dog) => {
  if (dog.curFood > dog.recommendedFood * 1.1) {
    return "ownerOfDogWhoEatTooMuch";
  } else {
    return "ownerOfDogWhoEatTooLittle";
  }
});
console.log(ownersCategorised);

const ownerOfDogWhoEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

const ownerOfDogWhoEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

console.log(ownerOfDogWhoEatTooLittle);
console.log(ownerOfDogWhoEatTooMuch);

console.log(
  `${ownerOfDogWhoEatTooLittle.join(" and ")}! dogs are eating too little`
);
console.log(
  `${ownerOfDogWhoEatTooMuch.join(" and ")}! dogs are eating too much`
);

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

const okayAmountChecker = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.every(okayAmountChecker));

// 7.
const okayDogs = dogs.filter(okayAmountChecker);
console.log(okayDogs);

// 8.
const groupedDogs = Object.groupBy(dogs, (dog) => {
  if (dog.curFood < dog.recommendedFood) return "too-little";
  if (dog.curFood > dog.recommendedFood) return "too-much";
  else return "exact";
});

console.log(groupedDogs);

// 9.

const dogsGroupedByOwnersNum = Object.groupBy(dogs, (dog) => dog.owners.length);
console.log(dogsGroupedByOwnersNum);

// 10.
const sortedByRecommandedPortion = dogs.toSorted(
  (dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood
);
console.log(sortedByRecommandedPortion)
