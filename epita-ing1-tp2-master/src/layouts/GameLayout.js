import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1"
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

handleClickListener(id){
  let c = JSON.parse(JSON.stringify(this.state.cells));
  c[id] = this.state.currentPlayer;
  this.setState({cells: c});
  this.setState({currentPlayer: this.state.currentPlayer === "player 1" ? "player 2" : "player 1"});
}
 render() {
    return (
      <div
        style={gameLayoutStyle}
        onClick={() => this.setState({ currentPlayer: "toto" })}
      >
        <GameInfo />
        <Board onClickCell={(id) => this.handleClickListener(id)} />
      </div>
    );
  }
}

export default GameLayout;
