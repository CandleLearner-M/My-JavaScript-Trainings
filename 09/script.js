const forecast = [20, 18];

/* 
1. Destructure this array into three variables: 
   - todayTemp
   - tomorrowTemp
   - nextDayTemp
2. Since nextDayTemp isn't in the array, make it default to 'No data'
*/

// Write your solution below

// 1.2. Destructuring the array into three variables with default values

const [todayTemp = 'No data', tomorrowTemp = 'No data', nextDayTemp = 'No data'] = forecast;


