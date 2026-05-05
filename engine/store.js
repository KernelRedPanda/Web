export const PlayerStore = {
  players: [],

  add(player) {
    this.players.push(player);
  },

  getById(id) {
    return this.players.find(p => p.id === id);
  }
};
