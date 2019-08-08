import React, { Component } from "react";
import { Row, Table } from "react-bootstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { Game } from "../Game";

export class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.getDisplayName = this.getDisplayName.bind(this);
  }

  getDisplayName(char) {
    const game = Game[this.props.game];
    const picks = this.props.picks;

    let name = "";
    let pair = "";
    let extra = "";
    // ! notation for kids
    if (game.children && game.children[char.name]) {
      name += picks.pairings[game.children[char.name].parent] + "!";
    }

    // actual name
    name += char.name;

    // pairing if applicable
    if (
      picks.options["pairings"] &&
      !picks.options["onlypairs"] &&
      char.showPair
    ) {
      pair = "(S " + this.props.picks.pairings[char.name] + ")";
    } else if (picks.options["friends"] && char.showFriend) {
      pair = "(A+ " + this.props.picks.friends[char.name] + ")";
    }

    // boon/bane for avatar
    if (char.stats) {
      extra += "+" + char.stats.boon + " -" + char.stats.bane + " ";
    }

    return (
      <td>
        <p>
          {name}
          <br />
          {pair}
        </p>
        <p>{extra}</p>
      </td>
    );
  }

  render() {
    const game = Game[this.props.game];
    const picks = this.props.picks.characters;

    // portrait width:
    let width = 0;
    if (game.short === "fe1" || game.short === "fe2" || game.short === "fe3") {
      width = 50;
    } else if (game.short === "fe4" || game.short === "fe5") {
      width = 75;
    } else if (
      game.short === "fe6" ||
      game.short === "fe7" ||
      game.short === "fe8" ||
      game.short === "fe15"
    ) {
      width = 100;
    } else if (
      game.short === "fe9" ||
      game.short === "fe10" ||
      game.short === "fe13" ||
      game.short === "fe14"
    ) {
      width = 120;
    }
    const imgExtension = game.imgExtension || "png";

    let tableRows = [];

    if (this.props.picks.options["onlypairs"]) {
      for (let i = 0; i < picks.length; i += 2) {
        const char1 = picks[i];
        const char2 = picks[i + 1];
        // const char1display ;
        // const char2display ;
        tableRows.push(
          <tr style={{ fontSize: "14px" }} key={char1.name}>
            <td width={80}>
              <img
                width={80}
                src={require("../../images/" +
                  game.short +
                  "/" +
                  char1.name.toLowerCase() +
                  ".png")}
                alt={char1.name}
              />
            </td>
            {this.getDisplayName(char1)}
            <td>{char1.class}</td>
            <td width={80}>
              <img
                width={80}
                src={require("../../images/" +
                  game.short +
                  "/" +
                  char2.name.toLowerCase() +
                  "." +
                  imgExtension)}
                alt={char2.name}
              />
            </td>
            {this.getDisplayName(char2)}
            <td>{char2.class}</td>
          </tr>
        );
      }
    } else {
      for (let i = 0; i < picks.length; i++) {
        const char = picks[i];
        tableRows.push(
          <tr key={char.name}>
            <td width={width}>
              <img
                src={require("../../images/" +
                  game.short +
                  "/" +
                  char.name.toLowerCase() +
                  "." +
                  imgExtension)}
                alt={char.name}
              />
            </td>
            {this.getDisplayName(char)}
            <td>{char.class}</td>
          </tr>
        );
      }
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
            {tableRows}
          </ReactCSSTransitionGroup>
        </Table>
      </Row>
    );
  }
}
