import type { DisplayMode, FrameType } from "./enum";
import type { PassiveGroup, PassiveNode } from "./passive";

export interface ItemSocket {
  group: number;
  attr?: "S" | "D" | "I" | "G" | "A" | "DV";
  sColour?: "R" | "G" | "B" | "W" | "A" | "DV";
}

export interface ItemProperty {
  name: string;
  values: Array<
    [
      string,
      /**
       * value type
       */
      number
    ]
  >;
  displayMode?: DisplayMode;
  /**
   * (double) rounded to 2 decimal places
   */
  progress?: number;
  /**
   * (uint)
   */
  type?: number;
  suffix?: string;
}

export interface CrucibleNode {
  skill?: number; // mod hash
  tier?: number; // mod tier
  icon?: string;
  allocated?: boolean;
  isNotable?: boolean;
  isReward?: boolean;
  stats?: string[]; // stat descriptions
  reminderText?: string[];
  orbit?: number; // the column this node occupies
  orbitIndex?: number; // the node's position within the column
  out: string[]; // node identifiers of nodes this one connects to
  in: string[]; // node identifiers of nodes connected to this one
}

export interface Item {
  verified: boolean;
  w: number;
  h: number;
  icon: string;
  /** always `true` if present */
  support?: boolean;
  stackSize?: number;
  maxStackSize?: number;
  stackSizeText?: string;
  league?: string;
  /**
   * a unique 64 digit hexadecimal string
   */
  id?: string;
  /**
   * property values will always be `true` if present
   */
  influences?: {
    elder?: boolean;
    shaper?: boolean;
    searing?: boolean;
    tangled?: boolean;
    abyssJewel?: boolean;
    delve?: boolean;
    fractured?: boolean;
    synthesised?: boolean;

    /** @deprecated */
    crusader?: boolean;
    /** @deprecated */
    redeemer?: boolean;
    /** @deprecated */
    hunter?: boolean;
    /** @deprecated */
    warlord?: boolean;
  };
  sockets?: ItemSocket[];
  socketedItems?: Item[];
  name: string;
  typeLine: string;
  baseType: string;
  rarity?: "Normal" | "Magic" | "Rare" | "Unique";
  identified: boolean;
  itemLevel?: number;
  /** @deprecated */
  ilvl: number;
  /**
   * user-generated text
   */
  note?: string;
  /**
   * user-generated text
   */
  forum_note?: string;
  /** always `true` if present */
  lockedToCharacter?: boolean;
  /** always `true` if present */
  lockedToAccount?: boolean;
  /** always `true` if present */
  duplicated?: boolean;
  /** always `true` if present */
  split?: boolean;
  /** always `true` if present */
  corrupted?: boolean;
  /** always `true` if present */
  unmodifiable?: boolean;
  /** always `true` if present */
  cisRaceReward?: boolean;
  /** always `true` if present */
  seaRaceReward?: boolean;
  /** always `true` if present */
  thRaceReward?: boolean;
  properties?: Array<ItemProperty>;
  notableProperties?: Array<ItemProperty>;
  requirements?: Array<ItemProperty>;
  additionalProperties?: Array<ItemProperty>;
  nextLevelRequirements?: Array<ItemProperty>;
  talismanTier?: number;
  rewards?: {
    label: string;
    /**
     * the key is a string representing the type of reward. The value is the amount
     */
    rewards: {
      [key: string]: number;
    };
  }[];
  secDescrText?: string;
  utilityMods?: string[];
  logbookMods?: {
    /**
     * area name
     */
    name: string;
    faction: {
      id: "Faction1" | "Faction2" | "Faction3" | "Faction4";
      name: string;
    };
    mods: string[];
  }[];
  enchantMods?: string[];
  scourgeMods?: string[];
  implicitMods?: string[];
  ultimatumMods?: {
    /**
     * text used to display ultimatum icons
     */
    type: string;
    tier: number;
  }[];
  explicitMods?: string[];
  craftedMods?: string[];
  fracturedMods?: string[];
  /**
   * only allocated mods are included
   */
  crucibleMods?: string[];
  cosmeticMods?: string[];
  /**
   * random video identifier
   */
  veiledMods?: string[];
  /** always `true` if present */
  veiled?: boolean;
  descrText?: string;
  flavourText?: string[];
  flavourTextParsed?: string[] | {};
  /**
   * user-generated text
   */
  flavourTextNote?: string;
  prophecyText?: string;
  /** always `true` if present */
  isRelic?: boolean;
  foilVariation?: number;
  /** always `true` if present */
  replica?: boolean;
  /** always `true` if present */
  foreseeing?: boolean;
  incubatedItem?: {
    name: string;
    /**
     * monster level required to progress
     */
    level: number;
    progress: number;
    total: number;
  };
  scourged?: {
    /**
     * 1-3 for items, 1-10 for maps
     */
    tier: number;
    /**
     * monster level required to progress
     */
    level?: number;
    progress?: number;
    total?: number;
  };
  crucible?: {
    layout: string;
    /**
     * dictionary of `CrucibleNode`
     * the key is the string value of the node index
     */
    nodes: {
      [key: string]: CrucibleNode;
    };
  };
  /** always `true` if present */
  ruthless?: boolean;
  frameType?: FrameType;
  artFilename?: string;
  hybrid?: {
    isVaalGem?: boolean;
    baseTypeName: string;
    properties?: ItemProperty[];
    explicitMods?: string[];
    secDescrText?: string;
  };
  /**
   * only present in the Public Stash API
   * @see https://www.pathofexile.com/developer/docs/reference#publicstashes
   */
  extended?: {
    category?: string;
    subcategories?: string[];
    prefixes?: number;
    suffixes?: number;
  };
  x?: number;
  y?: number;
  inventoryId?: string;
  socket?: number;
  colour?: "S" | "D" | "I" | "G";
}

export interface ItemJewelData {
  type: string;
  radius?: number;
  radiusMin?: number;
  radiusVisual?: string;
  /**
   * only present on cluster jewels
   */
  subgraph?: {
    /**
     * the key is the string value of the group id
     */
    groups: {
      [key: string]: PassiveGroup;
    };
    nodes: {
      [key: string]: PassiveNode;
    };
  };
}

export interface ItemFilter {
  id: string;
  filter_name: string;
  realm: "pc" | "xbox" | "sony";
  description: string;
  version: string;
  type: "Normal" | "Ruthless";
  /** always `true` if present */
  public?: boolean;
  /** not present when listing all filters */
  filter?: string;
  /** not present when listing all filters */
  validation?: {
    valid: boolean;
    /** game version */
    version?: string;
    /** date time (ISO8601) */
    validated?: string;
  };
}
