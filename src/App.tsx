import React, { Component } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";

import { CharacterList } from "./components/CharacterList";
import { GameOptions } from "./components/GameOptions";
import { GamePicker } from "./components/GamePicker";

import "./App.css";
import { AnyGame, Game } from "./data/data.types";
import { gameList, Games } from "./Games";
import { CompletedPicks, Picker } from "./Picker";

export type PickerOptions = Game<any>["flags"] & {
  factions?: boolean;
  balanced?: boolean;
};

export class App extends Component<
  unknown,
  {
    game: string;
    numPicks: number;
    included: string[];
    options: PickerOptions;
    picking: boolean;
    picks?: CompletedPicks<AnyGame>;
  }
> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      game: gameList[0],
      numPicks: Games[gameList[0]].defaultPicks || 12,
      included: [],
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
  }

  handleGamePick(e) {
    // update other stuff
    this.setState({
      game: e.target.value,
      // default to 12 for games without a setting
      numPicks: Games[e.target.value].defaultPicks || 12,
      included: [],
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

  handleOptionChange(opt: string, set: boolean) {
    console.log(opt, set);
    const cascade = {
      pairings: ["onlypairs", "children"],
      classes: ["troll"],
    };
    let options = this.state.options;
    options[opt] = set;
    // cascade and remove invalid options
    if (!set && cascade[opt]) {
      for (const opt2 of cascade[opt]) options[opt2] = false;
    }
    this.setState({ options: options });
  }

  handleNumChange(numPicks: number) {
    this.setState({ numPicks });
  }

  handleIncludeChange(included: string[]) {
    this.setState({ included });
  }

  handleStart() {
    this.setState({ picking: true, picks: undefined });
    const picker = new Picker(
      this.state.game,
      this.state.numPicks,
      this.state.options,
      this.state.included
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
        maxWidth: "1080px",
      },
      listContainer: {
        maxHeight: "calc(100vh - 100px)",
        overflowY: "auto",
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
              <Col md={3} style={styles.sidebar}>
                <div style={styles.sidebarSection}>
                  <GamePicker
                    game={this.state.game}
                    handler={g => this.handleGamePick(g)}
                  />
                </div>
                <div style={styles.sidebarSection}>
                  <GameOptions
                    game={this.state.game}
                    options={this.state.options}
                    numPicks={this.state.numPicks}
                    included={this.state.included}
                    handleOptionChange={(opt, val) =>
                      this.handleOptionChange(opt, val)
                    }
                    handleNumChange={n => this.handleNumChange(n)}
                    handleIncludeChange={inc => this.handleIncludeChange(inc)}
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
                    onClick={() => this.handleStart()}
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
              <Col md={9} style={styles.listContainer}>
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
