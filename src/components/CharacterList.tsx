import { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Table } from "react-bootstrap";
import { AnyGame } from "../data/data.types";

import { Games } from "../Games";
import { CharacterPick, CompletedPicks } from "../Picker";

export class CharacterList extends Component<
  { game: string; picks: CompletedPicks<any> },
  {}
> {
  constructor(props) {
    super(props);
    this.getDisplayName = this.getDisplayName.bind(this);
  }

  getDisplayName(char: CharacterPick<AnyGame>) {
    const game = Games[this.props.game];
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

  getClassDisplay(char: CharacterPick<AnyGame>) {
    const game = Games[this.props.game];
    const charClass = game.classes[char.class];

    let classSubtitle = "";
    if (char.classWeaponPool !== undefined && "weaponPools" in charClass) {
      if (charClass.subtitleWeapon === "last") {
        // just use the last one
        classSubtitle =
          charClass.weaponPools[char.classWeaponPool][
            charClass.weaponPools[char.classWeaponPool].length - 1
          ];
      } else {
        // use all of them (also default)
        classSubtitle = charClass.weaponPools[char.classWeaponPool].join("/");
      }
      classSubtitle = `(${classSubtitle})`;
    }

    return (
      <td>
        {char.class} {classSubtitle}
      </td>
    );
  }

  render() {
    const game = Games[this.props.game];
    const picks = this.props.picks.characters;

    const imgExtension = game.imgExtension || "png";

    const createDoubleRow = (
      char1: CharacterPick<AnyGame>,
      char2: CharacterPick<AnyGame>
    ): JSX.Element => {
      return (
        <tr style={{ fontSize: "14px" }} key={char1.name}>
          <td width={80}>
            <img
              src={require("../../images/" +
                game.short +
                "/" +
                char1.name.toLowerCase() +
                ".png")}
              alt={char1.name}
            />
          </td>
          {this.getDisplayName(char1)}
          {this.getClassDisplay(char1)}
          {char2.name && (
            <td width={80}>
              <img
                src={require("../../images/" +
                  game.short +
                  "/" +
                  char2.name.toLowerCase() +
                  "." +
                  imgExtension)}
                alt={char2.name}
              />
            </td>
          )}
          {this.getDisplayName(char2)}
          {this.getClassDisplay(char2)}
        </tr>
      );
    };

    let tableRows: JSX.Element[] = [];

    if (this.props.picks.options["onlypairs"]) {
      for (let i = 0; i < picks.length; i += 2) {
        tableRows.push(createDoubleRow(picks[i], picks[i + 1]));
      }
    } else if (this.props.picks.options["emblems"]) {
      for (let i = 0; i < picks.length; i++) {
        const char = picks[i];
        const emblemName = this.props.picks.emblems[char.name];
        // treat each characters emblems as their pair for display purposes
        // i'm going to regret this when they add pairings AND emblems (holy blood) to fire emblem: shadows of jugdral pt 1: genealogy of the holy war.
        const emblem: CharacterPick<AnyGame> = {
          name: emblemName ?? "", // no emblem is left empty so it doesn't try to `require()` the image.
          class: emblemName ? "" : "(no emblem)",
        };
        tableRows.push(createDoubleRow(char, emblem));
      }
    } else {
      for (let i = 0; i < picks.length; i++) {
        const char = picks[i];
        tableRows.push(
          <tr key={char.name}>
            {/* Setting low width here push the name flush with the portrait */}
            <td width={1}>
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
            {this.getClassDisplay(char)}
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
