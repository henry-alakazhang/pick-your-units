import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";

import { Games } from "../Games";

export class GameOptions extends Component {
  render() {
    const optionStuff = {
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
      troll: {
        display: "Allow 'troll' classes",
        disabled: !this.props.options["classes"],
      },
      balanced: {
        display: "Balance weapon types",
        disabled: false,
      },
      factions: {
        display: "Pick units from other factions",
        disabled: false,
      },
      emblems: {
        display: "Pick Emblems for units (TODO)",
        disabled: true,
      },
    };

    const styles = {
      spinner: {
        width: 70,
      },
    };

    return (
      <Row style={styles.container}>
        <Col>
          <h3>Options</h3>
          <Form>
            <Form.Group>
              {Object.keys(Games[this.props.game].flags).map(flag => (
                <Form.Check
                  disabled={optionStuff[flag].disabled}
                  checked={this.props.options[flag]}
                  key={flag}
                  onChange={e => {
                    this.props.handleOptionChange(e, flag);
                  }}
                  id={flag}
                  label={`${optionStuff[flag].display}${
                    flag === "troll" ? "*" : ""
                  }`}
                />
              ))}
              <Form.Check
                checked={this.props.options["balanced"]}
                onChange={e => {
                  this.props.handleOptionChange(e, "balanced");
                }}
                id="balanced"
                label={optionStuff["balanced"].display}
              />
            </Form.Group>
          </Form>
          {Games[this.props.game].trollCriteria && (
            <div>
              * Criteria for a troll pick:
              <ul>
                {Games[this.props.game].trollCriteria.map(criteria => (
                  <li>{criteria}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <Form inline>
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
