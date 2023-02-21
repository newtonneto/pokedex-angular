export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  sprites: Sprites;
  stats: Stat[];
}

interface Type {
  slot: number;
  type: PokemonType;
}

interface PokemonType {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: OtherSprites;
}

interface OtherSprites {
  dream_world: DreamWorld;
  home: Home;
  official_artwork: OfficialArtwork;
}

interface DreamWorld {
  front_default: string;
}

interface Home {
  front_default: string;
}

interface OfficialArtwork {
  front_default: string;
}

interface Stat {
  base_stat: number;
  stat: StatDetail;
}

interface StatDetail {
  name: string;
}
