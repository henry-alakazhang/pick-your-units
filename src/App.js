import React, { Component } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";

import GamePicker from "./components/GamePicker";
import GameOptions from "./components/GameOptions";
import CharacterList from "./components/CharacterList";

import Picker from "./Picker";

import { list, games } from "./models/game-data.models";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: list[0],
      numPicks: 12,
      options: {
        pairings: false,
        friends: false,
        onlypairs: false,
        children: false,
        classes: true,
        balanced: false,
        troll: false,
      },
      picking: false,
      picks: null,
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
      numPicks: games[e.target.value].defaultPicks || 12,
      picks: null,
      options: {
        pairings: false,
        friends: false,
        onlypairs: false,
        children: false,
        classes: true,
        balanced: false,
        troll: false,
      },
    });
  }

  handleOptionChange(e, opt) {
    const cascade = {
      pairings: ["onlypairs", "children"],
      classes: ["troll"],
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
      games[this.state.game],
      this.state.numPicks,
      this.state.options
    );
    const picks = picker.generatePicks();
    Promise.resolve(picks).then(picks => {
      this.setState({
        picking: false,
        picks,
      });
    });
  }

  render() {
    const styles = {
      container: {
        margin: "20px",
        maxWidth: "900px",
      },
      sidebar: {
        textAlign: "left",
      },
      sidebarSection: {
        marginBottom: "8px",
      },
    };

    return (
      <div>
        <center>
          <h1>Fire Emblem Pick-Your-Unit</h1>
          <div style={styles.container}>
            <Row>
              <Col md={4} style={styles.sidebar}>
                <GamePicker
                  value={this.state.game}
                  handler={this.handleGamePick}
                />
                <div style={styles.sidebarSection}>
                  <GameOptions
                    game={this.state.game}
                    options={this.state.options}
                    handleOptionChange={this.handleOptionChange}
                    numPicks={this.state.numPicks}
                    handleNumChange={this.handleNumChange}
                  />
                </div>
                <div>
                  {games[this.state.game].disabled && (
                    <Col sm={10}>
                      <Alert variant="danger">
                        This game is not available yet. Reason cited:
                        <br />
                        <li>{games[this.state.game].disabled}</li>
                      </Alert>
                    </Col>
                  )}
                  <Button
                    size="large"
                    variant="primary"
                    disabled={games[this.state.game].disabled !== undefined}
                    onClick={this.handleStart}
                  >
                    Pick My Units!
                  </Button>
                </div>
              </Col>
              <Col md={8}>
                {this.state.picks && (
                  <CharacterList
                    picks={this.state.picks}
                    game={this.state.game}
                  />
                )}
              </Col>
            </Row>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
