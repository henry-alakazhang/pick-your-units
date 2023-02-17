export interface Class {
  /** Available weapons */
  readonly weapons: string[];
  /** Promotion (if applicable) */
  readonly promo?: string | readonly string[];
  /** Stats required for effective use */
  readonly stat?: { STR?: boolean; MAG?: boolean };
}

export interface Character {
  /** Possible base classes */
  readonly class: string | readonly string[];
  /**
   * Default class for no-class-change runs.
   * Only needed for reclass-heavy games where everyone can be everything (eg. 3H, Engage),
   * because of the dodgy way in which they are implemented (one root class)
   */
  readonly defaultClass?: string;
  /** Whether characters have good bases/growths for a stat */
  readonly stat?: { STR?: boolean; MAG?: boolean };
  /** Other characters available for S-rank */
  readonly pairings?: string[];
  /** Other characters available for A+ rank */
  readonly friends?: string[];
  /** Required units to make a character recruitable */
  readonly include?: string[];
  /** Route-exclusive characters that cannot be used together */
  readonly exclude?: string[];
  /**
   * Fictional faction that you might feel bad picking out of.
   * Only used for 3H classes at the moment, to do in-class-only runs
   */
  readonly faction?: string;
  /**
   * Weapon affinities for characters.
   * 3H only
   */
  readonly weapons?: {
    readonly strengths: readonly string[];
    readonly weaknesses: readonly string[];
  };
}

export type ChildCharacter = Character & {
  readonly parent: string;
};

export interface Game {
  /** Short name (fe1, fe2, etc) */
  readonly short: string;
  readonly defaultPicks: number;
  readonly classes: { [name: string]: Class };
  readonly characters: { [name: string]: Character };
  readonly children?: { [name: string]: ChildCharacter };
  readonly inheritClasses?: (
    game: Game,
    picks: { pairings: any },
    to: string
  ) => string[];
  /** Free/force-deployed units (usually lords) */
  readonly free: ReadonlyArray<string>;
  readonly routes?: ReadonlyArray<[string, string]>;
  /**
   * The name of a customiseable avatar, if applicable
   * Note: Alear (Engage) is not a classic avatar because you can't pick their boon/bane
   */
  readonly avatar?: string;
  /**
   * Base faction for the game (when faction-only is on, will only pick units that match).
   * 3H only
   */
  readonly faction?: string;
  /** File extension used for character images. Uses PNG if undefined */
  readonly imgExtension?: string;
  readonly flags: {
    /** Whether pairings and inherited classes exist */
    readonly pairings?: boolean;
    /** Whether friends and inherited classes exist (fates only) */
    readonly friends?: boolean;
    /** Whether you can choose to only pick pairings */
    readonly onlypairs?: boolean;
    /** Whether child units exist */
    readonly children?: boolean;
    /** Whether class changing exists */
    readonly classes?: boolean;
    /** Whether you can pick shit classes */
    readonly troll?: boolean;
    /** Whether emblems exist or not */
    readonly emblems?: boolean;
  };
  /**
   * Criteria for a class to be considered shit.
   * Displayed to the user (not used for logic)
   */
  readonly trollCriteria?: string[];
  /** The reason the game is disabled (if it is) - `undefined` means the game is enabled */
  readonly disabled?: string;
}
