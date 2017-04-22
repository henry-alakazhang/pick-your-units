import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import GamePicker from './components/GamePicker';
import GameOptions from './components/GameOptions';

import Game from './Game';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: Game.list[0],
    }

    this.handleGamePick = this.handleGamePick.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleGamePick(e) {
    this.setState({game: e.target.value});
  }

  handleStart(e, opts) {

  }

  render() {
    const styles = {
      container: {
        margin: 'auto',
        width: '90%'
      },
    };

    return (
      <div style={styles.container}>
        <center>
          <h1>Fire Emblem Pick-Your-Unit</h1>
        </center>
        <GamePicker value={this.state.game} handler={this.handleGamePick}/>
        <Col md={3}>
          <GameOptions game={this.state.game} handler={this.handleStart}/>
        </Col>
        <Col md={9}>
        </Col>
      </div>
    );
  }
}

export default App;
