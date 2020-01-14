import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokedexService } from 'src/app/services/pokedex.service';

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
			this.pokemonSelected = this.pokedexService.getPokemon(params['id']);
		});
	}
}
