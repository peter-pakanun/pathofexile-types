import { Account } from "./account";

export interface LadderEntry {
  rank: number;
  dead?: boolean;
  retired?: boolean;
  ineligible?: boolean;
  public?: boolean;
  character: {
    /**
     * a unique 64 digit hexadecimal string
     */
    id: string;
    name: string;
    level: number;
    class: string;
    /**
     * time taken to complete the league objective in seconds
     */
    time?: number;
    /**
     * count of league objective completions
     */
    score?: number;
    /**
     * the values of this depend on the league objective
     */
    progress?: {
      [key: string]: unknown;
    };
    experience?: number;
    /**
     * deepest Delve depth completed
     */
    depth?: {
      default?: number;
      solo?: number;
    };
    account: Account;
  };
}

export interface EventLadderEntry {
  rank: number;
  ineligible?: boolean;
  /**
   * time taken to complete the league objective in seconds
   */
  time?: number;
  private_league: {
    name: string;
    /**
     * a url link to a Path of Exile Private League
     */
    url: string;
  };
}
