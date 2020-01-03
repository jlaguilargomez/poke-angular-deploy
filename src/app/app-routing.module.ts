import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonDetailComponent } from './pokedex/pokemon-detail/pokemon-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' }, //this must be changed !!
  { path: 'landing', component: LandingComponent },
  {
    path: 'pokedex',
    component: PokedexComponent,
    children: [
      { path: '', component: PokemonDetailComponent },
      { path: ':id', component: PokemonDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
