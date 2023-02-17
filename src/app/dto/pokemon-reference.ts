import { Pokemon } from './pokemon';

export interface PokemonReference {
  name: string;
  url: string;
  status?: Pokemon;
}
