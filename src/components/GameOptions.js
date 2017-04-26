import React, { Component } from 'react';
import { Row, Form, FormGroup, FormControl, ControlLabel, Checkbox, Tooltip, OverlayTrigger } from 'react-bootstrap';

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
        <form>
          <FormGroup>
            {Object.keys(Game[this.props.game].flags).map((flag) =>
              <Checkbox
                disabled={flag === 'avatar'}
                checked={this.props.options[flag]}
                key={flag}
                onChange={(e) => {
                  this.props.handleOptionChange(e, flag);
                }}
              >
                Pick {flag}
              </Checkbox>
            )}
            {Game[this.props.game].flags.hasOwnProperty('classes') &&
              <Checkbox
                checked={this.props.options['troll']}
                disabled={!this.props.options['classes']}
                onChange={(e) => {
                  this.props.handleOptionChange(e, 'troll');
                }}
              >
                Allow 'troll' classes
              </Checkbox>
            }
            <Checkbox
              checked={this.props.options['balanced']}
              onChange={(e) => {
                this.props.handleOptionChange(e, 'balanced');
              }}
            >
              Balance weapons types
            </Checkbox>
          </FormGroup>
        </form>
        <Form inline>
          <FormGroup>
            <ControlLabel>Pick  </ControlLabel>{' '}
            <FormControl
              style={styles.spinner}
              type="number"
              value={this.props.numPicks}
              min={0}
              max={22}
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
