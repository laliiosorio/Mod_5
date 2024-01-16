import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonAll, PokemonList } from '../Models/pokemon-list.interface';
import { Observable } from 'rxjs';
import { Pokemon } from '../Models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }


  getPokemonList(offset: number, limit: number) {
    return this.http.get<PokemonAll>(`https://pokeapi.co/api/v2/pokemon?limit=${50}`);
  }

  getPokemonDetail(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
