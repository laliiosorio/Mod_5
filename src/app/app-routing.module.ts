import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './Components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetailComponent,
  },
  {
    path: '**',
    component: PokemonListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
