import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Pokemon } from 'src/app/dto/pokemon';
import { PokemonSpecie } from 'src/app/dto/pokemon-specie';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  private urlSpecie: string = 'https://pokeapi.co/api/v2/pokemon-species/';

  public pokemon: Pokemon = {} as Pokemon;
  public specie: PokemonSpecie = {} as PokemonSpecie;
  public isLoaded: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const pokemon = this.pokeApiService.apiGetPokemon(
      `${this.urlPokemon}${id}`
    );
    const specie = this.pokeApiService.apiGetSpecie(`${this.urlSpecie}${id}`);

    return forkJoin([pokemon, specie]).subscribe(
      (response) => {
        this.pokemon = response[0];
        this.specie = response[1];
        this.isLoaded = true;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }
}
