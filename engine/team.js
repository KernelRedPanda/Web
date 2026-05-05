export class Team {
  constructor(name, players) {
    this.name = name;
    this.players = players;
  }

  getBatsman(index) {
    return this.players[index];
  }

  getBowler(over) {
    // simple rotation
    return this.players[6 + (over % 5)];
  }
}
