import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import GameBoard from "./GameBoard";
// import * as serviceWorker from "./serviceWorker";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Header />
        <div className="game-board">
          <GameBoard />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

//===================================================
//TESTING

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentWillMount() {
  //   clearInterval(this.timerID);
  // }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It Is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root2"));

// function Welcome(props) {
//   return <h1>Hello, {props.name + " " + props.last}</h1>;
// }

// function App2() {
//   return (
//     <div>
//       <Welcome name="Nate" last="Daniels" />
//     </div>
//   );
// }

// ReactDOM.render(App2(), document.getElementById("root2"));

// END TESTING
// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
