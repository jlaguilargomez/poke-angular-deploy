import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../pokedex.service';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { ActivatedRoute, Params } from '@angular/router';

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

	ngOnInit() {
		this.routerData.params.subscribe((params: Params) => {
			this.pokemonSelected = this.pokedexService.getPokemon(params['id'] - 1);
		});
	}

	colorBackground(pokemonType) {
		switch (true) {
			case pokemonType === 'grass' || pokemonType === 'bug':
				return '#74c646';
			case pokemonType === 'fire' || pokemonType === 'fighting':
				return '#c67946';
			case pokemonType === 'rock' ||
				pokemonType === 'normal' ||
				pokemonType === 'ground':
				return '#c9c090';
			case pokemonType === 'water' ||
				pokemonType === 'ice' ||
				pokemonType === 'flying':
				return '#62b8c7';
			case pokemonType === 'dragon' || pokemonType === 'ghost':
				return '#b8bcd9';
			case pokemonType === 'dark' || pokemonType === 'steel':
				return '#8d8a90';
			case pokemonType === 'psychic' ||
				pokemonType === 'fairy' ||
				pokemonType === 'poison':
				return '#f264c4';
			case pokemonType === 'electric':
				return '#e3d528';
			default:
				return 'grey';
		}
	}

	colorBar(num) {
		switch (true) {
			case num < 16:
				return '#d6522a';
			case num >= 16 && num < 32:
				return '#d6822a';
			case num >= 32 && num < 48:
				return '#d6b12a';
			case num >= 48 && num < 64:
				return '#c0c42a';
			case num >= 64 && num <= 80:
				return '#aad62a';
			case num >= 80 && num <= 96:
				return '#99d62b';
			case num >= 96 && num <= 112:
				return '#87d52c';
			case num >= 112 && num <= 128:
				return '#62d52d';
			case num >= 128 && num <= 144:
				return '#34d52e';
			case num >= 144 && num <= 160:
				return '#30d55d';
			// Extra Case
			case num > 160:
				return '#00ff84';
			default:
				return 'grey';
		}
	}
}
