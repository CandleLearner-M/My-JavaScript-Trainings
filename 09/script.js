// 1. ARRAY DESTRUCTURING
const scores = [8, 9, 6, 4, 10];
// Task 1A: Destructure first and second elements into variables 'first' and 'second', then swap their values without using a temporary variable
// Expected output: first = 9, second = 8

let [first, second] = scores;
[second, first] = [first, second];
console.log(first, second);

// Task 1B: Skip the third element and get the fourth element as 'fourth', and the last element as 'last' regardless of array length
// Expected output: fourth = 4, last = 10

// ! function returnFourthLast(array) {
// !   const newARR = [];
// !  for (let i = 0; i < array.length; i++) {
// !   if (i === 3) {
// !       newARR.push(array[i]);
// !    }
// !     if (i === array.length - 1) {
// !       newARR.push(array[i]);
// !     }
// !  }

// !   return newARR;
// !}

// ! const [fourth, last] = returnFourthLast(scores);
// ! console.log(fourth,last)

const [, , , fourth, last] = [...scores.slice(0, 4), scores[scores.length - 1]];
console.log(fourth, last);

// Task 1C: Use rest pattern to get all elements except the first one into 'remainingScores'
// Then calculate their sum using reduce() method
// Expected output: remainingScores = [9, 6, 4, 10], sum = 29

const [, ...remainingScores] = scores;
console.log(remainingScores);
const sum = remainingScores.reduce(
  (accumulator, currentValue) => (accumulator += currentValue),
  0
);
console.log(sum);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },
  numGuests: 0,
  orderDelivery: function ({
    time = "20:00",
    address,
    mainIndex = 0,
    starterIndex = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// 2. OBJECT DESTRUCTURING
// Task 2A: From restaurant object:
// - Destructure 'name' and 'openingHours'
// - Rename 'categories' to 'tags' with default value ['Fast Food']
// - Create an object containing these properties
// Expected output: { name: 'Classico Italiano', openingHours: {...}, tags: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] }

const { name, openingHours, categories: tags = ["fast Food"] } = restaurant;
const newObj = {
  name,
  openingHours,
  tags,
};
console.log(name, openingHours, newObj);

// Task 2B: From openingHours:
// - Destructure and rename 'fri' to 'friday'
// - Destructure 'sat' as 'weekend' with default value { open: 10, close: 20 }
// Expected output: friday: {open: 11, close: 23}, weekend: {open: 0, close: 24}

// const {
//   openingHours: { fri: friday, sat: weekend = { open: 10, close: 20 } },
// } = restaurant;

// console.log(friday, weekend);

// Task 2C: From the friday object:
// - Destructure 'open' and 'close'
// - Calculate 'early' (open - 1) and 'late' (close + 1)
// Expected output: early = 10, late = 24

// const { open: early, close: late } = {
//   open: friday.open - 1,
//   close: friday.close + 1,
// };
// console.log(early, late);

// 3. THE SPREAD OPERATOR
// Task 3A: Create array newArr = [1, 2, ...scores]
// Expected output: [1, 2, 8, 9, 6, 4, 10]

const newScores = [1, 2, ...scores];

// Task 3B: Create new object newRestaurant with:
// - All restaurant properties
// - foundedIn: 1995
// - signatureDish: The first item from mainMenu
// Expected output: {...restaurant, foundedIn: 1995, signatureDish: 'Pizza'}

const newRestaurant = {
  ...restaurant,
  foundedIn: 1995,
  signatureDish: restaurant.mainMenu[0],
};
console.log(newRestaurant);

// Task 3C: Create array allMenus:
// - Combine starterMenu and mainMenu
// - Sort alphabetically
// Expected output: ['Bruschetta', 'Caprese Salad', 'Focaccia', 'Garlic Bread', 'Pasta', 'Pizza', 'Risotto']

const allMenus = [...newRestaurant.starterMenu, ...newRestaurant.mainMenu];
allMenus.sort();
console.log(allMenus);
// 4. REST PATTERN AND PARAMETERS
// Task 4A: Create function sumEven(...numbers):
// - Sums only even numbers from the parameters
// - Returns 0 if no even numbers found
// Example: sumEven(1, 2, 3, 4, 5, 6) should return 12 (2 + 4 + 6)

function sumEven(...numbers) {
  const sum = numbers.reduce(
    (acc, currentValue) => (currentValue % 2 == 0 ? acc + currentValue : acc),
    0
  );

  return sum;
}
console.log(sumEven());

// Task 4B: From categories array:
// - Destructure first element into 'main'
// - Rest into 'otherTags'
// - Join them into string with commas
// Expected output: "Italian, Pizzeria, Vegetarian, Organic"

const [main, ...otherTags] = restaurant.categories;
const categoriesPhrase = `${main}, ${otherTags.join(", ")}`;
console.log(categoriesPhrase);

// Task 4C: From openingHours:
// - Destructure thu and fri as 'weekdays'
// - Rest as 'weekend'
// Expected output: weekdays: {thu: {...}, fri: {...}}, weekend: {sat: {...}}

// 1. what I need to is that creating an object called weekDays with fri and thur, but create also an object with satu called
// weekend, the issue with my code is that the second part is correct, but I am unpacking sat to be weekend, and what I
// want is that sat would be inside another the weekend object, not to be it (weekend:{sat: {}})
// 2. Fun fact:) I was trying to write code with the most clever way, by trying to build a new method that never was, and I never knew about
// while I am actually solving the problem not trying to make it as perfect as possible, so even the answer was in front of me
// that previous quote helped me too much to recognize what I was doing, the main goal is to solve the problem, not to give it the perfect solution
// perfection comes by solving a lot of them then your next solution would be more perfect than the first one, but trying to be always perfect
// would waste you the time you will be instead become perfect on it. Now it is your turn to help me grow and improve by reflecting on my solution and giving me how we could do it better
const { sat, ...weekdays } = restaurant.openingHours;
const weekend = { sat };
console.log(weekdays, weekend);

// 5. SHORT-CIRCUITING (&& AND ||)
// Task 5A: Create function getGuestCount:
// - Use || to set default value 10 for numGuests
// - Return "No guests!" if numGuests is falsy
// - Return actual number if truthy
// Expected outputs: "No guests!" (when 0), "10" (when null/undefined)

// creating the needed function: would take a numberOfGuest as an argument, and retuns 'No Guests' when numberOfGuest is falsy, "10" when null or undifined (nullish value) but since the ?? that checks exactly the nullish values isn't allowed, I got to be working

// function that takes a numberOfGuests and prevent it from being falsy by returning either the number if it is actually a number, "No guests" if falsy but not nullish, and a default value of 10 if nullish
const getGuestCount = function (numberOfGuests) {
  // Case 1: returns "No Guests!" when the numberOfGuests input is falsy but not nullish
  if (
    !numberOfGuests &&
    numberOfGuests !== null &&
    numberOfGuests !== undefined
  ) {
    return "No Guests!";
  }
  // Case 2: returns the actual value of numberOfGuests is number if not and it is null or undefined, return 10 as a default value
  return numberOfGuests || 10;
};
console.log(getGuestCount(0)); // "10" ❌ (should be "No guests!")
console.log(getGuestCount(null)); // "10" ✅
console.log(getGuestCount(undefined)); // "10" ✅
console.log(getGuestCount(5)); // "No guests!" ❌ (should be 5)
// Task 5B: Handle reservation object:
// - Check if reservation exists
// - If exists, check reservation.status === 'confirmed'
// - If confirmed, log reservation.table
// Expected output: Should safely handle null reservation

// Task 5C: Fix numGuests handling:
// - Use ?? for default value 10
// - Create nextReservation with default 'Not scheduled'
// Expected output: numGuests should be 0 (not 10), nextReservation should be 'Not scheduled'

// 6. LOGICAL ASSIGNMENT OPERATORS
// Task 6A: Menu assignment:
// - Use ||= to assign ['Pizza', 'Pasta'] to menu
// - Only if restaurant.name starts with 'C'
// Expected output: menu = ['Pizza', 'Pasta'] (only if condition met)

// Task 6B: Owner privacy:
// - Use &&= to assign 'ANONYMOUS' to owner
// - Log "Owner privacy set" when assignment occurs
// Expected output: owner should remain '' (empty string)

// Task 6C: Guest tracking:
// - Use ??= to set guestCount to 10
// - Create menuCount ??= mainMenu.length
// Expected output: guestCount should stay 0, menuCount should be 3
