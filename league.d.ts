export interface LeagueRule {
  /**
   * e.g. `Hardcore`, `NoParties` (SSF)
   */
  id: string;

  name: string;

  description?: string;
}

export interface League {
  /**
   * The league name
   */
  id: string;
  realm?: "pc" | "xbox" | "sony";

  description?: string;

  category?: {
    /**
     * the league category, e.g. `Affliction`
     */
    id: string;

    /** always `true` if present */
    active?: boolean;
  };

  rules?: LeagueRule[];

  /**
   * date time (ISO8601)
   */
  registerAt?: string;

  /** always `true` if present */
  event?: boolean;

  /**
   * a url link to a Path of Exile forum thread
   */
  url?: string;

  /**
   * date time (ISO8601)
   */
  startAt?: string;

  /**
   * date time (ISO8601)
   */
  endAt?: string;

  /** always `true` if present */
  timedEvent?: boolean;

  /** always `true` if present */
  scoreEvent?: boolean;

  /** always `true` if present */
  delveEvent?: boolean;

  /** always `true` if present */
  ancestorEvent?: boolean;

  /** always `true` if present */
  leagueEvent?: boolean;
}
