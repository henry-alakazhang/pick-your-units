import React, { Component } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";

import GamePicker from "./components/GamePicker";
import GameOptions from "./components/GameOptions";
import CharacterList from "./components/CharacterList";

import Picker from "./Picker";

import Game from "./Game";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: Game.list[0],
      numPicks: 12,
      options: {
        pairings: false,
        friends: false,
        onlypairs: false,
        children: false,
        classes: true,
        balanced: false,
        troll: false
      },
      picking: false,
      picks: null
    };

    this.handleGamePick = this.handleGamePick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleGamePick(e) {
    // update other stuff
    this.setState({
      game: e.target.value,
      // default to 12 for games without a setting
      numPicks: Game[e.target.value].defaultPicks || 12,
      picks: null,
      options: {
        pairings: false,
        friends: false,
        onlypairs: false,
        children: false,
        classes: true,
        balanced: false,
        troll: false
      }
    });
  }

  handleOptionChange(e, opt) {
    const cascade = {
      pairings: ["onlypairs", "children"],
      classes: ["troll"]
    };
    let options = this.state.options;
    options[opt] = e.target.checked;
    // cascade and remove invalid options
    if (!e.target.checked && cascade[opt]) {
      for (const opt2 of cascade[opt]) options[opt2] = false;
    }
    this.setState({ options: options });
  }

  handleNumChange(e) {
    this.setState({ numPicks: e.target.value });
  }

  handleStart() {
    this.setState({ picking: true, picks: null });
    const picker = new Picker(
      this.state.game,
      this.state.numPicks,
      this.state.options
    );
    picker.generatePicks().then(res => {
      this.setState({
        picking: false,
        picks: res
      });
    });
  }

  render() {
    const styles = {
      container: {
        margin: "auto",
        width: "90%"
      }
    };

    return (
      <Row style={styles.container}>
        <center>
          <h1>Fire Emblem Pick-Your-Unit</h1>
        </center>
        <Col md={3}>
          <GamePicker value={this.state.game} handler={this.handleGamePick} />
          <GameOptions
            game={this.state.game}
            options={this.state.options}
            handleOptionChange={this.handleOptionChange}
            numPicks={this.state.numPicks}
            handleNumChange={this.handleNumChange}
          />
          <Row>
            <p />
            {Game[this.state.game].disabled && (
              <Col sm={10}>
                <Alert bsStyle="danger">
                  This game is not available yet. Reason cited:
                  <br />
                  <li>{Game[this.state.game].disabled}</li>
                </Alert>
              </Col>
            )}
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
        <Col md={9}>
          {this.state.picks && (
            <CharacterList picks={this.state.picks} game={this.state.game} />
          )}
        </Col>
      </Row>
    );
  }
}

export default App;
