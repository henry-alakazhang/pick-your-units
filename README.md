# Pick Your Units

An automatic Fire Emblem PMU picker by NinjaCaterpie.

Access it via this link:
https://henry-alakazhang.github.io/pick-your-units/

Images downloaded from fireemblemwiki, serenesforest and/or the engage datamine spreadsheet. Credit to all involved.

## Local Development

`npm install`  
`npm start` to run the local server: access it at localhost:3000.

## Feature Backlog

- Explicitly exclude certain units or emblems
- Add DLC character support (for 3H and presumably Engage)
- Add DLC class support (for Awakening, Fates, presumably Engage)

## Changelog

### V2.3.0 (March 2023)

- Implemented DLC emblems

### V2.2.0 (March 2023)

- Added a selector for forcing certain units

### V2.1.0 (March 20223)

- Implemented Emblem picking for Emblems

#### V2.1.1

- Adjusted algorithm for picking emblems to be smarter
- Adjusted some STR/MAG splits for Engage characters using actual statistics

### V2.0.0 (February 2022)

- Massive internal overhaul (migration to TypeScript), including several bugfixes:
  - Fixed a number of (possible crash-causing?) incorrect base classes for Engage:
    - Fixed Clanne, Louis, Fogado, Merrin, Jean, Anna
  - Adjusted the default picks for a number of games to be more accurate to endgame deploy limits\
    - Fixed Shamir to be recruitable in Crimson Flower

### V1.4.0 (February 2022)

- Added Engage support

### V1.3.0 (August 2019)

- Added Three Houses support
- Fixed a few potential crashes

### V1.2.0 (May 2019)

- Added Thracia 776 support
- Improved table UI a bit so things don't line-break as much
- Adjusted a few default pick counts to be more accurate to the games
  - FE1 to 14
  - Awakening to 14
  - Fates to 14
- Reduced bundle size by minifying some sprites

#### V1.2.1

- Fixed a bug where Eyrios wasn't counted as a Thracia Route A unit.

### V1.1.0 (May 2019)

- Added Shadows of Valentia support
- Added support for differing default party size
- Fixed some bugs picked up by Typescript
  - Fixed a bug where Chrom couldn't be paired with anyone except Sumia and Robin
  - Fixed a bug where Sumia couldn't be paired with Robin
  - Fixed a typo in Libra's class name
- Fixed a bug where A+ supports wouldn't be picked unless "Pick pairings" was also enabled

### V1.0 (May 2017)

- Initial release
