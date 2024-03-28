import type { Account } from "./account";

export interface PvPMatch {
  /**
   * the match's name
   */
  id: string;
  realm?: "pc" | "xbox" | "sony";
  /**
   * date time (ISO8601)
   */
  startAt?: string;
  /**
   * date time (ISO8601)
   */
  endAt?: string;
  /**
   * a url link to a Path of Exile forum thread
   */
  url?: string;
  description: string;
  glickoRatings: boolean;
  /**
   * always `true`
   */
  pvp: boolean;
  style: "Blitz" | "Swiss" | "Arena";
  /**
   * date time (ISO8601)
   */
  registerAt?: string;
  complete?: boolean;
  upcoming?: boolean;
  inProgress?: boolean;
}

export interface PvPLadderTeamMember {
  account: Account;
  character: {
    /**
     * a unique 64 digit hexadecimal string
     */
    id: string;
    name: string;
    level: number;
    class: string;
    league?: string;
    /**
     * count of league objective completions
     */
    score?: number;
  };
  /** always `true` if present */
  public?: boolean;
}

export interface PvPLadderTeamEntry {
  rank: number;
  /**
   * only present if the PvP Match uses Glicko ratings
   */
  rating?: number;
  points?: number;
  games_played?: number;
  cumulative_opponent_points?: number;
  /**
   * date time (ISO8601)
   */
  last_game_time?: string;
  members: PvPLadderTeamMember[];
}
