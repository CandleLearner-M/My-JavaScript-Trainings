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
// 1. Destructure name and mainDrink
const {{name}, mainDrink} = cafe;
// 2. Try to destructure dessert with a default value of 'Cake'
const {dessert = 'Cake'} = cafe;

const {special: todaySpecial = 'No Special'} = cafe;

// Write your solution below