const scores = [10, [20, 30]];

/* 
1. Destructure this array to get:
   - firstScore (from the main array)
   - lowScore and highScore (from the nested array)
2. Add a default value of 0 for highScore
*/

const [firstScore, [lowScore, highScore = 0]] = scores;
console.log()
// Write your solution below