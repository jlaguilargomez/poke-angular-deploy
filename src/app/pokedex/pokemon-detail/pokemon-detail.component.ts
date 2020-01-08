import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokedexService } from 'src/app/pokedex.service';
import { Pokemon } from 'src/app/interface/pokemon.interface';

@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
	public pokemonSelected: Pokemon;

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
