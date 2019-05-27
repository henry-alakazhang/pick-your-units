export enum GameName {
  FE1 = "fe1",
  FE2 = "fe2",
  FE3 = "fe3",
  FE4 = "fe4",
  FE5 = "fe5",
  FE6 = "fe6",
  FE7 = "fe7",
  FE8 = "fe8",
  FE9 = "fe9",
  FE10 = "fe10",
  FE11 = "fe11",
  FE12 = "fe12",
  FE13 = "fe13",
  FE14 = "fe14",
  FE15 = "fe15",
}

export interface BaseGame<Ch extends string, Cl extends string> {
  readonly short: GameName;
  readonly classes: { [name in Cl]: Class<Cl> };
  readonly children?: ReadonlyArray<Ch>;
  /** "Free" units that are always included */
  readonly free: ReadonlyArray<Ch>;
  /** Route splits */
  readonly routes?: ReadonlyArray<[string, string]>;
  readonly avatar?: string;
  readonly flags: {
    readonly pairings?: true;
    readonly friends?: true;
    readonly onlypairs?: true;
    readonly children?: true;
    readonly classes?: true;
    readonly troll?: true;
  };
  /** If the game is disabled, the reason */
  readonly disabled?: string;
}

export type Game<Ch extends string, Cl extends string> = BaseGame<Ch, Cl> & {
  readonly characters: { [name in Ch]: NoClassChangeCharacter<Ch, Cl> };
};

export type ClassChangeGame<Ch extends string, Cl extends string> = BaseGame<
  Ch,
  Cl
> & {
  readonly characters: { [name in Ch]: ClassChangeCharacter<Ch, Cl> };
  /** Determine which classes a unit can inherit from their parents */
  readonly inheritClasses?: (
    game: ClassChangeGame<Ch, Cl>,
    picks: any,
    to: Ch
  ) => ReadonlyArray<Cl>;
};

/**
 * Determines whether a game allows class changes or not
 */
export function gameSupportsClassChanges<Ch extends string, Cl extends string>(
  e: Game<Ch, Cl> | ClassChangeGame<Ch, Cl>
): e is ClassChangeGame<Ch, Cl> {
  return e.flags.classes !== undefined;
}

interface BaseCharacter<Ch> {
  readonly include?: ReadonlyArray<Ch>;
  readonly exclude?: ReadonlyArray<Ch>;
  readonly pairings?: ReadonlyArray<Ch>;
  readonly friends?: ReadonlyArray<Ch>;
  readonly stat?: {
    STR?: boolean;
    MAG?: boolean;
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

export interface Class<Cl> {
  readonly weapons: ReadonlyArray<string>;
  readonly promo?: ReadonlyArray<Cl>;
  readonly stat?: {
    STR?: boolean;
    MAG?: boolean;
  };
}
