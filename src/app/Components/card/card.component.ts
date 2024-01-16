import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() pokemon: any = {};
  randomImageUrl: string = `https://img.pokemondb.net/artwork/large/${this.pokemon.name}.jpg`;

  constructor() {}
}
