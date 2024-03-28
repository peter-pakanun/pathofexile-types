import type { Item, ItemJewelData } from "./item";
import type { PassiveNode } from "./passive";

type Bandit = "Kraityn" | "Alira" | "Oak" | "Eramir";
type MajotPantheon = "TheBrineKing" | "Arakaali" | "Solaris" | "Lunaris";
type MinorPantheon =
  | "Abberath"
  | "Gruthkul"
  | "Yugul"
  | "Shakari"
  | "Tukohama"
  | "Ralakesh"
  | "Garukhan"
  | "Ryslatha";

export interface Character {
  /**
   * unique 64 digit hexadecimal string
   */
  id: string;
  name: string;
  realm?: "pc" | "xbox" | "sony";
  class: string;
  league?: string;
  level: number;
  experience: number;
  /** always `true` if present */
  ruthless?: boolean;
  /** always `true` if present */
  expired?: boolean;
  /** always `true` if present */
  deleted?: boolean;
  /** always `true` if present */
  current?: boolean;
  equipment?: Item[];
  inventory?: Item[];
  /**
   * items stored in the Primalist's Rucksack
   */
  rucksack?: Item[];
  jewels?: Item[];
  passives?: {
    hashes: number[];
    hashes_ex: number[];
    /**
     * dictionary of int
     * the key is the string value of the mastery node skill hash and the value is the selected effect hash
     */
    mastery_effects: {
      [key: string]: number;
    };
    /**
     * dictionary of `PassiveNode`
     * the key is the string value of the node identifier being replaced
     */
    skill_overrides: {
      [key: string]: PassiveNode;
    };
    bandit_choice?: Bandit[];
    pantheon_major?: MajotPantheon[];
    pantheon_minor?: MinorPantheon[];
    /**
     * dictionary of `ItemJewelData`
     * the key is the string value of the x property of an item from the jewels array in this request
     */
    jewel_data?: {
      [key: string]: ItemJewelData;
    };
    alternate_ascendancy?: "Warden" | "Warlock" | "Primalist";
  };
  metadata?: {
    /**
     * game version for the character's realm
     */
    version?: string;
  };
}
