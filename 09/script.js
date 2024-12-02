const cafe = {
  name: 'Coffee Corner',
  mainDrink: 'Coffee',
  // Note: dessert and special are not defined in the object
};

/* 
1. Destructure name and mainDrink
2. Try to destructure dessert with a default value of 'Cake'
3. Get special and rename it to todaySpecial with a default value of 'No Special'
*/

const {{name}, mainDrink} = cafe;

const {dessert = 'Cake'} = cafe;

const {special: }

// Write your solution below