import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PokeApiPage } from '../dto/poke-api-page';
import { Pokemon } from '../dto/pokemon';
import { PokemonSpecie } from '../dto/pokemon-specie';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<PokeApiPage> {
    return this.http.get<PokeApiPage>(this.url).pipe(
      tap((response) =>
        response.results.map((result) => {
          this.apiGetPokemon(result.url).subscribe((pokemon) => {
            result.status = pokemon;
          });
        })
      )
    );
  }

  public apiGetPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url).pipe(map((pokemon) => pokemon));
  }

  public apiGetSpecie(url: string): Observable<PokemonSpecie> {
    return this.http.get<PokemonSpecie>(url).pipe(map((pokemon) => pokemon));
  }
}
