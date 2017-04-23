import React, { Component } from 'react';
import { Row, Table } from 'react-bootstrap';

import Game from '../Game';

class CharacterList extends Component {
  render() {
    const game = Game[this.props.game];

    return (
      <Row>
        <h2> Your picks: </h2>
        <Table>
          <tbody>
            {this.props.picks.characters.map((char) =>
            (<tr key={char}>
              <td width="140">
                <img
                  src={require("../../images/" + game.short + "/" + char.toLowerCase() + ".png")}
                  alt={char}
                />
              </td>
              <td>{char}</td>
              <td></td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    );
  }
}

export default CharacterList;
