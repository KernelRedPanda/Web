function random() {
  return Math.random();
}

function simulateBall(batsman, bowler) {
  const bat = batsman.batting * batsman.form;
  const bowl = bowler.bowling;

  const diff = bat - bowl;

  const r = random();

  if (r < 0.05 + (bowl - bat) / 200) return "W";
  if (r < 0.25) return 0;
  if (r < 0.45) return 1;
  if (r < 0.65) return 2;
  if (r < 0.8) return 3;
  if (r < 0.95) return 4;
  return 6;
}

export function simulateInnings(team) {
  let runs = 0;
  let wickets = 0;
  let striker = 0;
  let nonStriker = 1;

  for (let over = 0; over < 20; over++) {
    const bowler = team.getBowler(over);

    for (let ball = 0; ball < 6; ball++) {
      if (wickets >= 10) break;

      const batsman = team.getBatsman(striker);
      const result = simulateBall(batsman, bowler);

      if (result === "W") {
        wickets++;
        striker = wickets + 1;
      } else {
        runs += result;

        if (result % 2 === 1) {
          [striker, nonStriker] = [nonStriker, striker];
        }
      }
    }

    // swap strike end of over
    [striker, nonStriker] = [nonStriker, striker];
  }

  return { runs, wickets };
}

export function simulateMatch(teamA, teamB) {
  const first = simulateInnings(teamA);
  const second = simulateInnings(teamB);

  let winner;

  if (second.runs > first.runs) {
    winner = teamB.name;
  } else if (second.runs < first.runs) {
    winner = teamA.name;
  } else {
    winner = "Tie";
  }

  return {
    teamA: first,
    teamB: second,
    winner
  };
}





