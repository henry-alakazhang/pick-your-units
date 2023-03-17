import { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import { Game } from "../data/data.types";

import { Games } from "../Games";
import { typedObjectKeys } from "../util";

export type GameConfig = Game<any>["flags"] & {
  balanced?: boolean;
};

export class GameOptions extends Component<
  {
    options: GameConfig;
    game: string;
    numPicks: number;
    included: string[];
    handleOptionChange: (option: string, value: boolean) => void;
    handleNumChange: (newNumber: number) => void;
    handleIncludeChange: (units: string[]) => void;
  },
  {}
> {
  render() {
    const game = Games[this.props.game];

    const optionStuff: {
      [k in keyof GameConfig]: { display: string; disabled: boolean };
    } = {
      pairings: {
        display: "Pick pairings",
        disabled: false,
      },
      friends: {
        display: "Pick A+ supports",
        disabled: false,
      },
      onlypairs: {
        display: "Only pick couples",
        disabled: !this.props.options["pairings"],
      },
      children: {
        display: "Pick child units",
        disabled: !this.props.options["pairings"],
      },
      classes: {
        display: "Pick classes",
        disabled: false,
      },
      emblems: {
        display: "Pick Emblems",
        disabled: false,
      },
      troll: {
        display: "Allow 'troll' classes",
        disabled:
          !this.props.options["classes"] && !this.props.options["emblems"],
      },
      balanced: {
        display: "Balance weapon types",
        disabled: false,
      },
      factions: {
        display: "Pick units from other factions",
        disabled: false,
      },
      dlc: {
        display: "Include paid DLC content",
        disabled: false,
      }
    };

    const availableOptions = typedObjectKeys(optionStuff).filter(
      // `balanced` is not a flag on a game - it can always be set
      o => o === "balanced" || !!game.flags[o]
    );

    const styles = {
      spinner: {
        width: 70,
      },
    };

    const characterOptions = Object.keys(Games[this.props.game].characters)
      .filter(
        // TODO: include these as locked picks in the multiselect
        char =>
          // either no avatar or not the avatar
          (!game.avatar || !char.includes(game.avatar)) &&
          // and not a free unit
          !game.free.includes(char)
      )
      .map(char => ({
        value: char,
        label: char,
      }));

    const includedOptions = this.props.included.map(char => ({
      value: char,
      label: char,
    }));

    return (
      <Row>
        <Col>
          <h3>Options</h3>
          <Form style={{ marginBottom: 4 }}>
            <Form.Group>
              {availableOptions.map(flag => (
                <Form.Check
                  disabled={optionStuff[flag]?.disabled}
                  checked={this.props.options[flag]}
                  key={flag}
                  id={flag}
                  label={`${optionStuff[flag]?.display}${
                    flag === "troll" ? "*" : ""
                  }`}
                  onChange={e => {
                    this.props.handleOptionChange(
                      flag,
                      !this.props.options[flag]
                    );
                  }}
                />
              ))}
            </Form.Group>
          </Form>
          {Games[this.props.game].trollCriteria && (
            <div style={{ fontSize: 12 }}>
              * Criteria for a troll pick:
              <ul>
                {Games[this.props.game].trollCriteria?.map(criteria => (
                  <li>{criteria}</li>
                ))}
              </ul>
            </div>
          )}
          <div style={{ marginBottom: 12 }}>
            <Form>
              <Form.Group>
                <Form.Label>No. of units to pick: </Form.Label>
                <Form.Control
                  style={styles.spinner}
                  type="number"
                  value={this.props.numPicks}
                  min={2}
                  max={Object.keys(Games[this.props.game].characters).length}
                  onChange={e =>
                    this.props.handleNumChange(parseInt(e.target.value, 10))
                  }
                />
              </Form.Group>
            </Form>
          </div>
          <div>
            <Form.Group>
              <Form.Label>Always include:</Form.Label>
              <Select
                value={includedOptions}
                options={characterOptions}
                isMulti={true}
                onChange={e => {
                  this.props.handleIncludeChange(e.map(({ value }) => value));
                }}
              ></Select>
            </Form.Group>
          </div>
        </Col>
      </Row>
    );
  }
}
