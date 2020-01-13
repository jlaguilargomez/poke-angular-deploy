import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-pokemon-card',
	templateUrl: './pokemon-card.component.html',
	styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
	private pokemonSelected: Pokemon;
	private pokemonColors: {} = {
		grass: '#76C535',
		bug: '#A1B01E',
		fire: '#EB3D0D',
		fighting: '#84331C',
		rock: '#BAA45B',
		normal: '#C3BCB2',
		ground: '#EEAF9D',
		water: '#2580C9',
		ice: '#97E3F9',
		flying: '#90A2ED',
		dragon: '#7962E6',
		ghost: '#5D5FB0',
		dark: '#4C392C',
		steel: '#BAB9C6',
		psychic: '#EF4983',
		fairy: '#F1AEF2',
		poison: '#934392',
		electric: '#FAB819',
	};

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
		return this.pokemonColors[pokemonType];
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
