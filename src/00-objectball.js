//1.Object
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

//2.Building functions

function numPointsScored(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].points;
    }
  }
} //gets player points

function shoeSize(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].shoe;
    }
  }
} //gets player shoe size

function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
} //returns team color

function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
} //returns both team name

function playerNumbers(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map((player) => player.number);
    }
  }
} //returns player number

function playerStats(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
} //returns players info/stats

function bigShoeRebounds() {
  let game = gameObject();
  let largestShoe = 0;
  let rebounds = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].shoe > largestShoe) {
        largestShoe = game[team].players[player].shoe;
        rebounds = game[team].players[player].rebounds;
      }
    }
  }
  return rebounds;
} //finds player with largest shoe size and returns their rebounds

//3. Bonus Questions
function mostPointsScored() {
  let game = gameObject();
  let mostPoints = 0;
  let bestPlayer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].points > mostPoints) {
        mostPoints = game[team].players[player].points;
        bestPlayer = player;
      }
    }
  }
  return bestPlayer;
} //returns player with most points

function winningTeam() {
  let game = gameObject();
  let homePoints = Object.values(game.home.players).reduce(
    (sum, player) => sum + player.points,
    0
  );
  let awayPoints = Object.values(game.away.players).reduce(
    (sum, player) => sum + player.points,
    0
  );

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
} //returns team with the most points

function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
} //returns player with the longest name

function doesLongNameStealATon() {
  let game = gameObject();
  let longestName = playerWithLongestName();
  let maxSteals = 0;
  let longNameSteals = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].steals > maxSteals) {
        maxSteals = game[team].players[player].steals;
      }
      if (player === longestName) {
        longNameSteals = game[team].players[player].steals;
      }
    }
  }
  return longNameSteals === maxSteals;
} //returns true if the player with the longest name had the most steals.

console.log(gameObject());
