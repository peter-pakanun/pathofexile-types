export enum DisplayMode {
  /**
   * Name should be followed by values
   */
  NAME_THEN_VALUE = 0,
  /**
   * Values should be followed by name
   */
  VALUE_THEN_NAME = 1,
  /**
   * Progress bar
   */
  PROGRESS_BAR = 2,
  /**
   * Values should be inserted into the string by index
   */
  INSERT_VALUE_BY_INDEX = 3,
  /**
   * Separator
   */
  SEPARATOR = 4,
}

export enum FrameType {
  Normal = 0,
  Magic = 1,
  Rare = 2,
  Unique = 3,
  Gem = 4,
  Currency = 5,
  DivinationCard = 6,
  Quest = 7,
  Prophecy = 8,
  Foil = 9,
  SupporterFoil = 10,
  Necropolis = 11,
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