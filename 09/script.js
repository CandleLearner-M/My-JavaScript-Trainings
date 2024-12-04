// 1. Create a function called 'createTeams' that takes a team name and unlimited number of player names
// 2. The function should return an object with:
//    - teamName
//    - players (array of all players)
//    - numberOfPlayers
// 3. Test your function with different numbers of players

// Write your solution here

function createTeams(teamName, ...players) {
  return {
    teamName: teamName,
    players: players,
    numberOfPlayers: players.length,
  };
}

// Test Case 1: Team with 3 players
console.log(createTeams("Warriors", "John", "Mike", "Sarah"));

// Test Case 2: Team with just 1 player
console.log(createTeams("Eagles", "Solo Player"));

// Test Case 3: Team with 5 players
console.log(createTeams("Dragons", "Alex", "Emma", "Tom", "Lisa", "Mark"));
