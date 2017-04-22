import React, { Component } from 'react';
import { Row, FormGroup, FormControl } from 'react-bootstrap';

import Game from '../Game';

class GamePicker extends Component {
  render() {
    const styles =  {
      gameInput: {
        width: 'auto'
      }
    }

    return (
      <Row>
        <h2> Pick your game </h2>
        <form>
          <FormGroup>
            <FormControl
              componentClass='select'
              style={styles.gameInput}
              value={this.props.game}
              onChange={this.props.handler}
            >
              {Game.list.map((game) => (
                <option key={game}>
                  {game}
                </option>
              ))}
            </FormControl>
          </FormGroup>
        </form>
      </Row>
    );
  }
}

export default GamePicker;
