import React, { Component } from 'react';
import { Row, Col, Button, Alert } from 'react-bootstrap';

import GamePicker from './components/GamePicker';
import GameOptions from './components/GameOptions';

import Picker from './Picker';

import Game from './Game';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: Game.list[0],
      numPicks: 12,
      options: {
        avatar: true,
        supports: false,
        children: false,
        reclasses: false,
      },
      picking: false,
      picks: [],
    }

    this.handleGamePick = this.handleGamePick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleGamePick(e) {
    this.setState({game: e.target.value});
  }

  handleOptionChange(e, opt) {
    let options = this.state.options;
    options[opt] = e.target.checked;
    this.setState({options:options});
  }

  handleNumChange(e) {
    this.setState({numPicks: e.target.value});
  }

  handleStart() {
    this.setState({picking: true});
    const picker = new Picker(this.state.game, this.state.numPicks, this.state.options);
    picker.generatePicks().then((res) => {
      this.setState({
        picking: false,
        picks: res
      });
    });
  }

  render() {
    const styles = {
      container: {
        margin: 'auto',
        width: '90%'
      },
    };

    return (
      <Row style={styles.container}>
        <center>
          <h1>Fire Emblem Pick-Your-Unit</h1>
        </center>
        <Col md={4}>
          <GamePicker
            value={this.state.game}
            handler={this.handleGamePick}
          />
          <GameOptions
            game={this.state.game}
            options={this.state.options}
            handleOptionChange={this.handleOptionChange}
            numPicks={this.state.numPicks}
            handleNumChange={this.handleNumChange}
          />
          <Row>
            <p />
            {Game[this.state.game].disabled &&
              (
                <Alert bsStyle="danger">
                  This game is not available yet. Reason cited:
                  <br />
                  <li>{Game[this.state.game].disabled}</li>
                </Alert>
              )
            }
            <Button
              bsSize="large"
              bsStyle="primary"
              disabled={Game[this.state.game].disabled !== undefined}
              onClick={this.handleStart}
            >
              Pick My Units!
            </Button>
          </Row>
        </Col>
        <Col md={8}>
        </Col>
      </Row>
    );
  }
}

export default App;
