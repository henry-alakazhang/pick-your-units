import React, { Component } from 'react';
import { Row, Table } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Game from '../Game';

class CharacterList extends Component {
  render() {
    const game = Game[this.props.game];

    // portrait width:
    let width = 0;
    if (game.short === 'fe1' || game.short === 'fe2' || game.short === 'fe3') {
      width = 50;
    } else if (game.short === 'fe4' || game.short === 'fe5') {
      width = 75;
    } else if (game.short === 'fe6' || game.short === 'fe7' || game.short === 'fe8') {
      width = 100;
    } else if (game.short === 'fe9' || game.short === 'fe10') {
      width = 125;
    } else if (game.short === 'fe13' || game.short === 'fe14') {
      width = 150;
    }

    return (
      <Row>
        <h2> Your picks: </h2>
        <Table>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            component="tbody"
          >
            {this.props.picks.characters.map((char) =>
            (<tr key={char.name}>
              <td width={width}>
                <img
                  src={require("../../images/" + game.short + "/" + char.name.toLowerCase() + ".png")}
                  alt={char.name}
                />
              </td>
              <td>{char.name}</td>
              <td>{char.class}</td>
            </tr>
            ))}
          </ReactCSSTransitionGroup>
        </Table>
      </Row>
    );
  }
}

export default CharacterList;
