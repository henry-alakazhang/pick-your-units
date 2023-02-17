export interface Class {
  /** Available weapons */
  readonly weapons: string[];
  /** Promotion (if applicable) */
  readonly promo?: string | readonly string[];
  /** Stats required for effective use */
  readonly stat?: { STR?: boolean; MAG?: boolean };
}

export type Character<G extends GameMetaType> = {
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
} & (G["Pairings"] extends true ? {
  /** Other characters available for S-rank */
  readonly pairings: string[]
} : {})

export type ChildCharacter<G extends GameMetaType> = Character<G> & {
  readonly parent: string;
};

/**
 * A template meta-type for game configuration.
 * These "fields" are used as values by TypeScript to enforce conditions on Game objects.
 * Each game should define its own Game with appropriate fields so types are extra-validated.
 * 
 * There are two main purposes for this:
 * 
 * The first is validation of key/value types, like character and class names.
 * By assigning a type which contains all of the possible character/class/etc names, we can validate
 * that all references (eg. promotion names, pairing names) have valid values,
 * and that we haven't made any typos or mucked up the data anywhere.
 * 
 * The second is consistent validation of "optional" types in various fields.
 * eg. `Character.pairings` is optional because not all games have pairings.
 * However, games that have pairings should ALWAYS have `Character.pairings`.
 * By setting `Pairings: true`, we can enforce all Characters for games with pairings... have pairings.
 * This also has the side effect of making the types way smarter when using a generic `Game` object.
 */
export interface GameMetaType {
  readonly Pairings: boolean;
}

/** A generically useable `GameMetaType` for unsupported games */
export interface UnsupportedGame extends GameMetaType {
  readonly Pairings: false;
}

export interface Game<G extends GameMetaType> {
  /** Short name (fe1, fe2, etc) */
  readonly short: string;
  readonly defaultPicks: number;
  readonly classes: { [name: string]: Class };
  readonly characters: { [name: string]: Character<G> };
  readonly children?: { [name: string]: ChildCharacter<G> };
  readonly inheritClasses?: (
    game: Game<G>,
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
    readonly pairings?: G["Pairings"] extends true ? boolean : never;
    /** Whether friends and inherited classes exist (fates only) */
    readonly friends?: boolean;
    /** Whether you can choose to only pick pairings */
    readonly onlypairs?: G["Pairings"] extends true ? boolean : never;
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
