import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonDetailComponent } from './components/pokedex/pokemon-detail/pokemon-detail.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'pokedex', pathMatch: 'full' }, // git  this must be changed !!
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
	imports: [
		RouterModule.forRoot(appRoutes, {
			onSameUrlNavigation: 'reload',
			anchorScrolling: 'enabled',
			enableTracing: false,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
