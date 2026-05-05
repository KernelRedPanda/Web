import { Player } from './player.js';
import { Team } from './team.js';
import { simulateMatch } from './match.js';

// Create demo teams
function createTeam(name) {
  const players = Array.from({ length: 11 }, (_, i) =>
    new Player(
      `${name} Player ${i+1}`,
      "all",
      50 + Math.random() * 40,
      50 + Math.random() * 40,
      50
    )
  );
  return new Team(name, players);
}

const teamA = createTeam("Rajpur Royals");
const teamB = createTeam("Delhi Dynamoes");

// Hook button
const btn = document.getElementById("simulateMatchBtn");

if (btn) {
  btn.addEventListener("click", () => {
    const result = simulateMatch(teamA, teamB);
    displayResult(result);
  });
}

// Render result
function displayResult(result) {
  const container = document.getElementById("matchResult");

  container.innerHTML = `
    <div class="match-card">
      <div>
        <div class="match-teams">
          Rajpur Royals vs Delhi Dynamoes
        </div>
        <div style="font-size:0.8rem;color:gray;margin-top:4px;">
          Simulated match result
        </div>
      </div>
      <div style="text-align:right;">
        <div style="color:#c9a227;font-weight:600;">
          ${result.teamA.runs}/${result.teamA.wickets}
          -
          ${result.teamB.runs}/${result.teamB.wickets}
        </div>
        <div style="margin-top:4px;">
          Winner: ${result.winner}
        </div>
      </div>
    </div>
  `;
}
