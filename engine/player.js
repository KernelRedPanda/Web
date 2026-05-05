export class Player {
  constructor(name, role) {
    this.name = name;
    this.role = role;

    // 10 traits (0–100)
    this.traits = {
      timing: rand(),
      shotSelection: rand(),
      powerHitting: rand(),
      footwork: rand(),
      temperament: rand(),

      accuracy: rand(),
      variation: rand(),
      control: rand(),
      swing: rand(),
      stamina: rand()
    };

    this.form = 1;
  }

  // MAIN BATTING ABILITY (0–100)
  getBattingAbility() {
    const t = this.traits;

    const batting =
      (t.timing * 0.25 +
       t.shotSelection * 0.25 +
       t.powerHitting * 0.2 +
       t.footwork * 0.15 +
       t.temperament * 0.15);

    return clamp(batting * this.form);
  }

  // MAIN BOWLING ABILITY (0–100)
  getBowlingAbility() {
    const t = this.traits;

    const bowling =
      (t.accuracy * 0.25 +
       t.variation * 0.2 +
       t.control * 0.2 +
       t.swing * 0.2 +
       t.stamina * 0.15);

    return clamp(bowling * this.form);
  }

  // OVERALL RATING
  getOverall() {
    return Math.round(
      (this.getBattingAbility() + this.getBowlingAbility()) / 2
    );
  }
}

// helpers
function rand() {
  return Math.floor(40 + Math.random() * 40);
}

function clamp(v) {
  return Math.max(0, Math.min(100, v));
}
