import { fe1, fe2, fe3, fe4, fe5 } from "./data/snes";
import { fe6, fe7, fe8 } from "./data/gba";
import { fe9, fe10 } from "./data/tellius";
import { fe11, fe12 } from "./data/ds";
import { fe13 } from "./data/awakening";
import { fe14br, fe14cq, fe14rev } from "./data/fates";
import { fe15alm, fe15celica } from "./data/valentia";
import { fe16church, fe16deer, fe16lions, fe16eagles } from "./data/3h.js";
import { fe17 } from "./data/engage";

/**
 * TS interface for personal reference
 *
 * TODO port some things to TS
 *
  export interface BaseGame {
    // in the form fe1, fe2 etc.
    readonly short: string;
    readonly classes: { string: Class };
    readonly children?: ReadonlyArray<string>;
    readonly free: ReadonlyArray<string>;
    readonly routes?: ReadonlyArray<[string, string]>;
    readonly avatar?: string;
    readonly flags: {
      // whether pairings and inherited classes exist
      readonly pairings?: true;
      // whether friends and inherited classes exist (fates only)
      readonly friends?: true;
      // whether you can choose to only pick pairings
      readonly onlypairs?: true;
      // whether child units exist
      readonly children?: true;
      // whether class changing exists
      readonly classes?: true;
      // whether you can pick shit classes
      readonly troll?: true;
      // whether emblems exist or not
      readonly emblems?: true;
    };
    readonly disabled?: string;
  }
 */

export const gameList = [
  "Fire Emblem",
  "Gaiden",
  "Mystery of the Emblem",
  "Genealogy of the Holy War",
  "Thracia 776",
  "The Binding Blade",
  "The Blazing Blade",
  "The Sacred Stones",
  "Path of Radiance",
  "Radiant Dawn",
  "Shadow Dragon",
  "New Mystery of the Emblem",
  "Awakening",
  "Fates: Birthright",
  "Fates: Conquest",
  "Fates: Revelation",
  "Shadows of Valentia (Alm)",
  "Shadows of Valentia (Celica)",
  "Three Houses (Black Eagles)",
  "Three Houses (Blue Lions)",
  "Three Houses (Golden Deer)",
  "Three Houses (Church of Seiros)",
  "Engage",
];

export const Game = {
  "Fire Emblem": fe1,
  Gaiden: fe2,
  "Mystery of the Emblem": fe3,
  "Genealogy of the Holy War": fe4,
  "Thracia 776": fe5,
  "The Binding Blade": fe6,
  "The Blazing Blade": fe7,
  "The Sacred Stones": fe8,
  "Path of Radiance": fe9,
  "Radiant Dawn": fe10,
  "Shadow Dragon": fe11,
  "New Mystery of the Emblem": fe12,
  Awakening: fe13,
  "Fates: Birthright": fe14br,
  "Fates: Conquest": fe14cq,
  "Fates: Revelation": fe14rev,
  "Shadows of Valentia (Alm)": fe15alm,
  "Shadows of Valentia (Celica)": fe15celica,
  "Three Houses (Black Eagles)": fe16eagles,
  "Three Houses (Blue Lions)": fe16lions,
  "Three Houses (Golden Deer)": fe16deer,
  "Three Houses (Church of Seiros)": fe16church,
  "Engage": fe17,
};
