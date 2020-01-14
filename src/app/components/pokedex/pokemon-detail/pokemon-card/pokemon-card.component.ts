import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
	selector: 'app-pokemon-card',
	templateUrl: './pokemon-card.component.html',
	styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
	private pokemonSelected: Pokemon;

	constructor(
		private pokedexService: PokedexService,
		private routerData: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.routerData.params.subscribe((params: Params) => {
			this.pokemonSelected = this.pokedexService.getPokemon(params['id']);
			console.log(this.pokemonSelected);
		});
	}

	colorBar(num: number): string {
		const statusValue: number = num;
		return `hsl(${statusValue}, 100%, 50%)`;
	}
}
