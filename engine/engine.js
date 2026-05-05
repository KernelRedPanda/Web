import { Player } from './player.js';
import { Team } from './team.js';
import { simulateMatch } from './match.js';

// 🎯 create smarter players with roles
function createPlayer(name) {
  const roles = ["batsman", "bowler", "allrounder", "keeper"];
  const role = roles[Math.floor(Math.random() * roles.length)];

  return new Player(name, role);
}

// 🧠 build squad
const playersA = Array.from({ length: 11 }, (_, i) =>
  createPlayer(`Rajpur P${i + 1}`)
);

const playersB = Array.from({ length: 11 }, (_, i) =>
  createPlayer(`Delhi P${i + 1}`)
);

// 🏏 create teams
const teamA = new Team("Rajpur Royals", playersA);
const teamB = new Team("Delhi Dynamoes", playersB);

// ⚔️ simulate match
const result = simulateMatch(teamA, teamB);

// 📊 better output
console.log("🏏 MATCH RESULT");
console.log("=================");
console.log(teamA.name, result.teamA);
console.log(teamB.name, result.teamB);
console.log("🏆 Winner:", result.winner);
