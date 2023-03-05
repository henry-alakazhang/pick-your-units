import React, { Component } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";

import { GamePicker } from "./components/GamePicker";
import { GameOptions } from "./components/GameOptions";
import { CharacterList } from "./components/CharacterList";

import { CompletedPicks, Picker } from "./Picker";
import { gameList, Games } from "./Games";
import "./App.css";
import { Game } from "./data/data.types";

export type PickerOptions = Game<any>["flags"] & {
  factions?: boolean;
  balanced?: boolean;
};

export class App extends Component<
  unknown,
  {
    game: string;
    numPicks: number;
    options: PickerOptions;
    picking: boolean;
    picks?: CompletedPicks;
  }
> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      game: gameList[0],
      numPicks: Games[gameList[0]].defaultPicks || 12,
      options: {
        pairings: false,
        friends: false,
        onlypairs: false,
        children: false,
        classes: true,
        balanced: false,
        troll: false,
        emblems: false,
      },
      picking: false,
      picks: undefined,
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
      numPicks: Games[e.target.value].defaultPicks || 12,
      picks: undefined,
      options: {
        pairings: false,
        friends: false,
        onlypairs: false,
        children: false,
        classes: true,
        balanced: false,
        troll: false,
        factions: false,
        emblems: false,
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
    this.setState({ picking: true, picks: undefined });
    const picker = new Picker(
      this.state.game,
      this.state.numPicks,
      this.state.options
    );
    picker.generatePicks().then(res => {
      this.setState({
        picking: false,
        picks: res,
      });
    });
  }

  render() {
    const styles: { [k: string]: React.CSSProperties } = {
      container: {
        margin: "20px",
        maxWidth: "900px",
      },
      sidebar: {
        textAlign: "left",
      },
      sidebarSection: {
        marginBottom: "12px",
      },
      credits: {
        fontSize: "12px",
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
                  game={this.state.game}
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
                <div style={styles.sidebarSection}>
                  {Games[this.state.game].disabled && (
                    <Alert variant="danger">
                      This game is not available yet. Reason cited:
                      <br />
                      <li>{Games[this.state.game].disabled}</li>
                    </Alert>
                  )}
                  <Button
                    size="lg"
                    variant="primary"
                    disabled={Games[this.state.game].disabled !== undefined}
                    onClick={this.handleStart}
                  >
                    Pick My Units!
                  </Button>
                </div>
                <div style={styles.credits}>
                  Made with{" "}
                  <span role="img" aria-label="boom">
                    💥
                  </span>{" "}
                  by NinjaCaterpie.
                  <br />
                  Source available{" "}
                  <a href="https://github.com/henry-alakazhang/pick-your-units">
                    here
                  </a>
                  .
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
