import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
	private pokemonSelected: Pokemon;

	constructor(
		private route: ActivatedRoute,
		private pokedexService: PokedexService
	) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			const id = params['id'] - 1;
			this.pokemonSelected = this.pokedexService.getPokemon(id);
		});
	}
}
