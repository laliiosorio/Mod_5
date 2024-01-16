import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Models/pokemon.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../Services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;
  panelOpenState = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name');

    if (!name) {
      this.router.navigateByUrl('/');
      return;
    }

    this.pokemonService.getPokemonDetail(name).subscribe(
      (data) => {
        if (!data) {
          this.router.navigateByUrl('/');
          return;
        }

        this.pokemon = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.router.navigateByUrl('/');
      }
    );
  }
}
