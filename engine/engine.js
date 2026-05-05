import { Player } from './player.js';
import { Team } from './team.js';
import { simulateMatch } from './match.js';

// sample players
const playersA = Array.from({ length: 11 }, (_, i) =>
  new Player(`PlayerA${i}`, "all", 60 + Math.random()*20, 50, 50)
);

const playersB = Array.from({ length: 11 }, (_, i) =>
  new Player(`PlayerB${i}`, "all", 55 + Math.random()*25, 55, 50)
);

const teamA = new Team("Rajpur Royals", playersA);
const teamB = new Team("Delhi Dynamoes", playersB);

const result = simulateMatch(teamA, teamB);

console.log(result);
