import { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";

import { gameList } from "../Games";

export class GamePicker extends Component<{
  game: string;
  handler: (event: any) => void;
}> {
  render() {
    return (
      <Row>
        <Col>
          <h2>Pick your game</h2>
          <Form>
            <Form.Group>
              <Form.Control
                as="select"
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
