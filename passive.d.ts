export interface PassiveGroup {
  x: number;
  y: number;
  orbits: number[];
  /** always `true` if present */
  isProxy?: boolean;
  /**
   * identifier of the placeholder node
   */
  proxy?: string;
  /**
   * the node identifiers associated with this group
   */
  nodes: string[];
}

type OilName =
  | "ClearOil"
  | "SepiaOil"
  | "AmberOil"
  | "VerdantOil"
  | "TealOil"
  | "AzureOil"
  | "IndigoOil"
  | "VioletOil"
  | "CrimsonOil"
  | "BlackOil"
  | "OpalescentOil"
  | "SilverOil"
  | "GoldenOil";

export interface PassiveNode {
  /**
   * skill hash
   */
  skill?: number;
  name?: string;
  icon?: string;
  /** always `true` if present */
  isKeystone?: boolean;
  /** always `true` if present */
  isNotable?: boolean;
  /** always `true` if present */
  isMastery?: boolean;
  /**
   * inactive mastery image
   */
  inactiveIcon?: string;
  /**
   * active mastery image
   */
  activeIcon?: string;
  /**
   * active mastery or tattoo background image
   */
  activeEffectImage?: string;
  masteryEffects?: {
    /**
     * effect hash
     */
    effect: number;
    /**
     * stat descriptions
     */
    stats: string[];
    reminderText?: string[];
  }[];
  /** always `true` if present */
  isBlighted?: boolean;
  /** always `true` if present */
  isTattoo?: boolean;
  /** always `true` if present */
  isProxy?: boolean;
  /** always `true` if present */
  isJewelSocket?: boolean;
  /**
   * cluster jewel information
   */
  expansionJewel?: {
    size?: number;
    index?: number;
    /**
     * the proxy node identifier
     */
    proxy?: number;
    /**
     * the parent node identifier
     */
    parent?: number;
  };
  /**
   * components required for Blight crafting this node.
   * each string is one of `ClearOil`, `SepiaOil`, `AmberOil`, `VerdantOil`,
   * `TealOil`, `AzureOil`, `IndigoOil`, `VioletOil`, `CrimsonOil`,
   * `BlackOil`, `OpalescentOil`, `SilverOil`, or `GoldenOil`
   */
  recipe?: OilName[];
  /**
   * sum of stats on this node that grant strength
   */
  grantedStrength?: number;
  /**
   * sum of stats on this node that grant dexterity
   */
  grantedDexterity?: number;
  /**
   * sum of stats on this node that grant intelligence
   */
  grantedIntelligence?: number;
  ascendancyName?: string;
  /** always `true` if present */
  isAscendancyStart?: boolean;
  /** always `true` if present */
  isMultipleChoice?: boolean;
  /** always `true` if present */
  isMultipleChoiceOption?: boolean;
  grantedPassivePoints?: number;
  /**
   * stat descriptions
   */
  stats?: string[];
  reminderText?: string[];
  flavourText?: string[];
  classStartIndex?: number;
  /**
   * the key value to look up in the groups table
   */
  group?: string;
  /**
   * the orbit this node occupies within it's group
   */
  orbit?: number;
  /**
   * the index of this node in the group's orbit
   */
  orbitIndex?: number;
  /**
   * node identifiers of nodes this one connects to
   */
  out?: string[];
  /**
   * node identifiers of nodes connected to this one
   */
  in?: string[];
}
