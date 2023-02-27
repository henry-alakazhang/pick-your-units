import React, { ChangeEvent, Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
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
    handleOptionChange: (event: any, value: string) => void;
    handleNumChange: (event: any) => void;
  },
  {}
> {
  render() {
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
    };

    const availableOptions = typedObjectKeys(optionStuff).filter(
      // `balanced` is not a flag on a game - it can always be set
      o => o === "balanced" || !!Games[this.props.game].flags[o]
    );

    const styles = {
      spinner: {
        width: 70,
      },
    };

    return (
      <Row>
        <Col>
          <h3>Options</h3>
          <Form>
            <Form.Group>
              {availableOptions.map(flag => (
                <Form.Check
                  disabled={optionStuff[flag]?.disabled}
                  checked={this.props.options[flag]}
                  key={flag}
                  onChange={e => {
                    this.props.handleOptionChange(e, flag);
                  }}
                  id={flag}
                  label={`${optionStuff[flag]?.display}${
                    flag === "troll" ? "*" : ""
                  }`}
                />
              ))}
            </Form.Group>
          </Form>
          {Games[this.props.game].trollCriteria && (
            <div>
              * Criteria for a troll pick:
              <ul>
                {Games[this.props.game].trollCriteria?.map(criteria => (
                  <li>{criteria}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <Form>
              <Form.Group>
                <Form.Label>Units to pick: </Form.Label>
                <Form.Control
                  style={styles.spinner}
                  type="number"
                  value={this.props.numPicks}
                  min={2}
                  max={Object.keys(Games[this.props.game].characters).length}
                  onChange={this.props.handleNumChange}
                />
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}
