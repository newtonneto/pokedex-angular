import { Component, OnInit } from '@angular/core';
import { PokemonReference } from 'src/app/dto/pokemon-reference';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: PokemonReference[] = [];

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((response) => {
      this.getAllPokemons = response.results;
    });
  }
}
