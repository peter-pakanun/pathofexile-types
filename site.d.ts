import { Item } from "./item";

//== Below is types pathofexile.com API use for its endpoints ==/

/**
 * pathofexile.com API response for `/character-window/get-characters`
 */
export type Site_getCharactersResponse = Array<Site_Character>;

/**
 * pathofexile.com API response for `/character-window/get-character`
 */
export interface Site_Character {
  /** The character's Ascendancy class index */
  ascendancyClass: number;

  /** The character's class */
  class: string;

  /** The character's class ID */
  classId: number;

  /** The character's experience */
  experience: number;

  /** The character's current league */
  league: string;

  /** The character's level */
  level: number;

  /** The character's name */
  name: string;

  /** Whether the character able to be pinned */
  pinnable: boolean;
}

export enum Site_StashTabType {
  Normal = "NormalStash",
  Currency = "CurrencyStash",
  Map = "MapStash",
  Premium = "PremiumStash",
  Quad = "QuadStash",
  Flask = "FlaskStash",
  Gem = "GemStash",
  Essence = "EssenceStash",
  DivinationCard = "DivinationCardStash",
  Unique = "UniqueStash",
  Fragment = "FragmentStash",
  Blight = "BlightStash",
  Delve = "DelveStash",
  Metamorph = "MetamorphStash",
  Delirium = "DeliriumStash",
}

/**
 * pathofexile.com API response for /character-window/get-stash-items
 */
export interface Site_StashTab {
  /** Name of the stash tab */
  n: string;
  /** tabIndex */
  i: number;
  /** ID of the tab, a 10 digit hexadecimal string */
  id: string;
  type: Site_StashTabType;
  selected: boolean;
  colour: {
    r: number;
    g: number;
    b: number;
  };
  srcL: string;
  srcC: string;
  srcR: string;
}

/**
 * pathofexile.com API response for /character-window/get-stash-items
 */
export interface Site_getStashItemsResponse {
  /** Total number of tabs the account has */
  numTabs: number;

  /** Array of tabs, only present if the tabs parameter is equal to 1 */
  tabs?: Array<Site_StashTab>;

  /** Array of items in the requested stash */
  items?: Array<Item>;

  /** Whether the tab layout is quad */
  quadLayout?: boolean;

  /** Only present if the tab is a currency tab */
  currencyLayout?: {
    sections: Array<string>;
    layout: {
      [key: string]: {
        x: number;
        y: number;
        w: number;
        h: number;
        section: number;
      };
    };
  };

  /** Only present if the tab is a flask tab */
  flaskLayout?: {
    filters: Array<string>;
    layout: {
      [key: string]: {
        filter: string;
        section: number;
      };
    };
    scale: number;
    sections: Array<{
      min: number;
      max: number;
    }>;
  };

  /** Only present if the tab is a gem tab */
  gemLayout?: {
    filters: Array<string>;
    layout: {
      [key: string]: {
        filter: string;
        section: number;
      };
    };
    scale: number;
    sections: Array<{
      min: number;
      max: number;
    }>;
  };

  /** Only present if the tab is an essence tab */
  essenceLayout?: {
    [key: string]: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };

  /** Only present if the tab is a divination card tab */
  divinationLayout?: {
    cards: Array<{
      id: string;
      name: string;
    }>;
    padx: number;
    pady: number;
    w: number;
    h: number;
    scale: number;
  };

  /** Only present if the tab is a fragment tab */
  fragmentLayout?: {
    layout: {
      [key: string]: {
        h: number;
        w: number;
        x: number;
        y: number;
        section: string;
        scale: number;
      };
    };
    sections: Array<string>;
  };

  /** Only present if the tab is a blight tab */
  blightLayout?: {
    [key: string]: {
      x: number;
      y: number;
      w: number;
      h: number;
      scale: number;
    };
  };

  /** Only present if the tab is a delve tab */
  delveLayout?: {
    [key: string]: {
      x: number;
      y: number;
      w: number;
      h: number;
      scale: number;
      hidden?: boolean;
    };
  };

  /** Only present if the tab is a metamorph tab */
  metamorphLayout?: {
    layout: {
      [key: string]: {
        x: number;
        y: number;
        w: number;
        h: number;
        section?: string;
        scale: number;
      };
    };
    sections: Array<string>;
  };

  /** Only present if the tab is a delirium tab */
  deliriumLayout?: {
    [key: string]: {
      x: number;
      y: number;
      w: number;
      h: number;
      scale: number;
      hidden?: boolean;
    };
  };

  /** Only present if the tab is a unique tab, not implemented by GGG yet */
  uniqueLayout?: object;

  /** Only present if the tab is a map tab, not implemented by GGG yet */
  mapLayout?: object;
}
