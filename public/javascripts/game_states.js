var GameStates = {
  PLACE_SHIPS: "PLACE_SHIPS",
  SHOOT: "SHOOT",
  WAITING_FOR_OPPONENT: "WAITING_FOR_OPPONENT",
  WAITING_FOR_OPPONENT_SHIPS: "WAITING_FOR_OPPONENT_SHIPS",
  SHIPS_PLACED: "SHIPS_PLACED",
  WAIT_FOR_OPPONENT_SHOT: "WAIT_FOR_OPPONENT_SHOT"
};


if(typeof module !== "undefined"){
  module.exports = GameStates;
}
