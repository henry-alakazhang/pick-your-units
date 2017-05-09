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
        disabled: !this.props.options['pairings'],
      },
      children: {
        display: "Pick child units",
        disabled: !this.props.options['pairings'],
      },
      classes: {
        display: "Pick classes",
        disabled: false,
      },
      troll: {
        display: "Allow 'troll' classes",
        disabled: !this.props.options['classes']
      },
      balanced: {
        display: "Balance weapon types",
        disabled: false,
      },
    }

    return (
      <Row>
        <h3>Options</h3>
        <form>
          <FormGroup>
            {Object.keys(Game[this.props.game].flags).map((flag) =>
              <Checkbox
                disabled={optionStuff[flag].disabled}
                checked={this.props.options[flag]}
                key={flag}
                onChange={(e) => {
                  this.props.handleOptionChange(e, flag);
                }}
              >
                { optionStuff[flag].display }
              </Checkbox>
            )}
            <Checkbox
              checked={this.props.options['balanced']}
              onChange={(e) => {
                this.props.handleOptionChange(e, 'balanced');
              }}
            >
              { optionStuff['balanced'].display }
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
