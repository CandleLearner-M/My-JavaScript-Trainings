const team = ['John', 'Mary', ['Bob', 'Alice'], 'Tom', 'Lisa'];

/* 
Using destructuring:
1. Get only the first team member
2. Skip the second team member
3. Get both members from the nested array
4. Skip Tom and get Lisa
*/

// 1.Geting the first team member
const [firstTeamMember, ,[nestedArrayMember1, nestedArrayMember2], ] = team;
console.log(firstTeamMember);
