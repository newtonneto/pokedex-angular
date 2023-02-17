import { PokemonReference } from './pokemon-reference';

export interface PokeApiPage {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonReference[];
}
