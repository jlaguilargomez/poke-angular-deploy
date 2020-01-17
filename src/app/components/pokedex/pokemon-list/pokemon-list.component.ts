import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from '../../../models/pokemon.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
	public searchPokemonName: string;
	public pokemonList: Pokemon[] = this.pokedexService.getPokemonList();

	constructor(
		private pokedexService: PokedexService,
		private router: Router
	) {}

	renderPokemon(name) {
		this.router.navigate(['pokedex', name]);
		this.pokedexService.cardLoaded.subscribe(() => {
			this.router.navigate(['pokedex', name], { fragment: 'card' });
		});
	}

	ngOnInit() {}
}
