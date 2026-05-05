export class Player {
  constructor(name, role) {
    this.name = name;
    this.role = role;

    // 🎯 hidden growth system (important for long-term gameplay)
    this.age = randInt(18, 35);
    this.potential = randInt(60, 95); // max ceiling
    this.experience = 0;

    // 📉 form system (-0.2 to +0.2 impact)
    this.form = 0;

    // 🧠 10 core traits (0–100)
    this.traits = {
      // batting
      timing: randTrait(),
      shotSelection: randTrait(),
      powerHitting: randTrait(),
      footwork: randTrait(),
      temperament: randTrait(),

      // bowling
      accuracy: randTrait(),
      variation: randTrait(),
      control: randTrait(),
      swing: randTrait(),
      stamina: randTrait()
    };
  }

  // 🏏 BATSMAN RATING
  getBattingAbility() {
    const t = this.traits;

    let rating =
      (t.timing * 0.25 +
       t.shotSelection * 0.2 +
       t.powerHitting * 0.2 +
       t.footwork * 0.15 +
       t.temperament * 0.2);

    rating *= this.getRoleMultiplier("batting");
    rating += this.form;

    return this.applyCeiling(clamp(rating));
  }

  // 🎯 BOWLER RATING
  getBowlingAbility() {
    const t = this.traits;

    let rating =
      (t.accuracy * 0.25 +
       t.variation * 0.2 +
       t.control * 0.2 +
       t.swing * 0.2 +
       t.stamina * 0.15);

    rating *= this.getRoleMultiplier("bowling");
    rating += this.form;

    return this.applyCeiling(clamp(rating));
  }

  // ⭐ OVERALL RATING (weighted)
  getOverall() {
    const bat = this.getBattingAbility();
    const bowl = this.getBowlingAbility();

    // role bias
    if (this.role === "batsman") return Math.round(bat * 0.7 + bowl * 0.3);
    if (this.role === "bowler") return Math.round(bowl * 0.7 + bat * 0.3);
    if (this.role === "keeper") return Math.round(bat * 0.6 + bowl * 0.4);

    return Math.round((bat + bowl) / 2);
  }

  // 🧩 ROLE SYSTEM
  getRoleMultiplier(type) {
    if (this.role === "batsman" && type === "batting") return 1.12;
    if (this.role === "bowler" && type === "bowling") return 1.12;
    if (this.role === "allrounder") return 1.05;
    if (this.role === "keeper") return 1.03;
    return 1;
  }

  // 📈 EXPERIENCE SYSTEM (future-proof)
  gainExperience(points) {
    this.experience += points;

    // small trait growth chance
    if (Math.random() < 0.3) {
      const keys = Object.keys(this.traits);
      const randomTrait = keys[Math.floor(Math.random() * keys.length)];

      this.traits[randomTrait] = clamp(this.traits[randomTrait] + randInt(0, 2));
    }
  }

  // 📉 aging decay system (important realism)
  applyAgeDecay() {
    if (this.age > 30) {
      const decay = (this.age - 30) * 0.5;

      for (let key in this.traits) {
        this.traits[key] = clamp(this.traits[key] - decay * 0.1);
      }
    }
  }

  // 🧠 ceiling based on potential
  applyCeiling(value) {
    return Math.min(value, this.potential);
  }
}

// ---------------- HELPERS ----------------

function randTrait() {
  return randInt(35, 80);
}

function randInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function clamp(v) {
  return Math.max(0, Math.min(100, v));
}

this.id = crypto.randomUUID();




