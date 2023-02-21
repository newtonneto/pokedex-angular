import { Component, OnInit } from '@angular/core';
import { PokemonReference } from 'src/app/dto/pokemon-reference';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private allPokemonsBackup: PokemonReference[] = [];
  public getAllPokemons: PokemonReference[] = [];
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (response) => {
        this.allPokemonsBackup = response.results;
        this.getAllPokemons = response.results;
      },
      error: (_) => {
        this.apiError = true;
      },
    });
  }

  public getSearchValue(value: string): void {
    const filter = this.allPokemonsBackup.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
