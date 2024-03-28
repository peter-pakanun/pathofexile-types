import type { Item } from "./item";

export interface PublicStashChange {
  /**
   * a unique 64 digit hexadecimal string
   */
  id: string;
  public: boolean;
  accountName?: string;
  /**
   * the name of the stash
   */
  stash?: string;
  /**
   * not included by default. Requires extra permissions
   * @deprecated
   */
  lastCharacterName?: string;
  stashType: string;
  /**
   * the league's name
   */
  league?: string;
  // items: Item[];
}

export interface StashTab {
  /**
   * a 10 digit hexadecimal string
   */
  id: string;
  /**
   * a 10 digit hexadecimal string
   */
  parent?: string;
  name: string;
  type: string;
  index?: number;
  metadata?: {
    /** always `true` if present */
    public?: boolean;
    /** always `true` if present */
    folder?: boolean;
    /**
     * 6 digit hex colour
     */
    colour?: string;
  };
  children?: StashTab[];
  items?: Item[];
}
