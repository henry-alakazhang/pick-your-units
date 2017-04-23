import React, { Component } from 'react';
import { Row, Form, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

import Game from '../Game';

class GameOptions extends Component {
  render() {
    const styles =  {
      spinner: {
        width: 70
      }
    }

    return (
      <Row>
        <h3>Options</h3>
        {Game[this.props.game].flags &&
          <form>
            <FormGroup>
              {Object.keys(Game[this.props.game].flags).map((flag) =>
                <Checkbox
                  checked={this.props.options[flag]}
                  key={flag}
                  onChange={(e) => {
                    this.props.handleOptionChange(e, flag);
                  }}
                >
                  Pick {flag}
                </Checkbox>
              )}
            </FormGroup>
          </form>
        }
        <Form inline>
          <FormGroup>
            <ControlLabel>Pick  </ControlLabel>{' '}
            <FormControl
              style={styles.spinner}
              type="number"
              value={this.props.numPicks}
              onChange={this.props.handleNumChange}
            />
            {' '}<ControlLabel>  units</ControlLabel>
          </FormGroup>
        </Form>
      </Row>
    );
  }
}

export default GameOptions;
