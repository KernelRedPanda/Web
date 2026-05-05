export class Player {
  constructor(name, role, batting, bowling, fielding) {
    this.name = name;
    this.role = role;

    this.batting = batting;   // 0–100
    this.bowling = bowling;   // 0–100
    this.fielding = fielding; // 0–100

    this.form = 1; // dynamic multiplier (0.8–1.2)
  }
}
