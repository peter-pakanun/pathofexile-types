export interface Guild {
  id: number;
  name: string;
  tag: string;
}

export interface Account {
  name: string;
  realm?: "pc" | "xbox" | "sony";
  guild?: Guild;
  challenges?: {
    /**
     * the challenge set
     */
    set: string;
    completed: number;
    max: number;
  };
  twitch?: {
    name: string;
    stream?: {
      name: string;
      image: string;
      status: string;
    };
  };
}

// LeagueAccount;
// atlas_passives	?object	deprecated
// ↳ hashes	array of uint
// atlas_passive_trees	array of object
// ↳ name	string
// ↳ hashes	array of uint

export interface LeagueAccount {
  /**
   * @deprecated use `atlas_passive_trees` instead
   */
  atlas_passives?: {
    hashes: number[];
  };
  atlas_passive_trees?: {
    name: string;
    hashes: number[];
  };
}
