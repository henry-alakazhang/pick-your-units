import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";

import { gameList } from "../Games";

export class GamePicker extends Component<{
  game: string;
  handler: (event: any) => void;
}> {
  render() {
    const styles = {
      gameInput: {
        width: "auto",
      },
    };

    return (
      <Row>
        <Col>
          <h2>Pick your game</h2>
          <Form>
            <Form.Group>
              <Form.Control
                as="select"
                style={styles.gameInput}
                value={this.props.game}
                onChange={this.props.handler}
              >
                {gameList.map(game => (
                  <option key={game}>{game}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}
