import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../../Models/pokemon-list.interface';
import { PokemonService } from '../../Services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  pokemonList: PokemonList[] = [];
  displayedColumns: string[] = ['image', 'name'];
  viewMode: 'card' | 'table' = 'card';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonList(0, 20)
      .subscribe((data) => (this.pokemonList = data.results));
  }

  changeViewMode(): void {
    this.viewMode = this.viewMode === 'card' ? 'table' : 'card';
  }
}
