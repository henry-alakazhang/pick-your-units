import React, { Component } from 'react';
import { Row, FormGroup, Checkbox } from 'react-bootstrap';

import Game from '../Game';

class GamePicker extends Component {
  render() {
    const styles =  {
    }

    return (
      <Row>
        <h3>Options</h3>
        {!Game[this.props.game].flags &&
          "No options available"
        }
        {Game[this.props.game].flags &&
          <form>
            <FormGroup>
              {Object.keys(Game[this.props.game].flags).map((flag) =>
                <Checkbox checked key={flag}>
                  Pick {flag}
                </Checkbox>
              )}
            </FormGroup>
          </form>
        }
      </Row>
    );
  }
}

export default GamePicker;
