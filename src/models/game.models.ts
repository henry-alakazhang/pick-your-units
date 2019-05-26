export enum GameName {
  FE1 = "fe1",
  FE2 = "fe2",
  //   FE3,
  //   FE4,
  //   FE5,
  //   FE6,
  //   FE7,
  //   FE8,
  //   FE9,
  //   FE10,
  //   FE11,
  //   FE12,
  //   FE13,
  //   FE14,
  //   FE15,
}

export interface Game<Ch extends string, Cl extends string> {
  readonly short: GameName;
  readonly characters: { [name in Ch]: Character<Ch, Cl> };
  readonly classes: { [name in Cl]: Class<Cl> };
  /** "Free" units that are always included */
  readonly free: ReadonlyArray<Ch>;
  /** Route splits */
  readonly routes?: ReadonlyArray<[string, string]>;
  readonly avatar?: keyof Ch;
  readonly flags?: {
    readonly pairings?: true;
    readonly friends?: true;
    readonly onlypairs?: true;
    readonly children?: true;
    readonly classes?: true;
    readonly troll?: true;
  };
  /** Determine which classes a unit can inherit from their parents */
  readonly inheritClasses?: (
    game: Game<Ch, Cl>,
    picks: any,
    to: Cl
  ) => ReadonlyArray<Cl>;
  /** If the game is disabled, the reason */
  readonly disabled?: string;
}

interface BaseCharacter<Ch> {
  readonly exclude?: ReadonlyArray<Ch>;
  readonly pairings?: ReadonlyArray<Ch>;
  readonly friends?: ReadonlyArray<Ch>;
  readonly stat?: {
    STR: boolean;
    MAG: boolean;
  };
  readonly parent?: Ch;
}

type NoClassChangeCharacter<Ch, Cl> = {
  readonly class: Cl;
} & BaseCharacter<Ch>;

type ClassChangeCharacter<Ch, Cl> = {
  readonly class: ReadonlyArray<Cl>;
  readonly base: Cl;
} & BaseCharacter<Ch>;

export type Character<Ch, Cl> =
  | ClassChangeCharacter<Ch, Cl>
  | NoClassChangeCharacter<Ch, Cl>;

export interface Class<Cl> {
  readonly weapons: ReadonlyArray<string>;
  readonly promo?: Cl | ReadonlyArray<Cl>;
  readonly stat?: {
    STR: boolean;
    MAG: boolean;
  };
}
