import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public searchPokemon(value: string): void {
    this.emmitSearch.emit(value);
  }
}
