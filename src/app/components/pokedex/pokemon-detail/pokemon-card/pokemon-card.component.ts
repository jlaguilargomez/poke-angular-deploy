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
	public pokemonSelected: Pokemon;
	public detail = false;

	constructor(
		private pokedexService: PokedexService,
		private routerData: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.routerData.params.subscribe((params: Params) => {
			this.detail = false;
			this.pokemonSelected = this.pokedexService.getPokemon(params['id']);
		});
	}

	public colorBar(num: number): string {
		const statusValue: number = num;
		return `hsl(${statusValue}, 100%, 50%)`;
	}

	public transformBaseStat(base: number) {
		return base / 1.5;
	}

	public get pokemonColorType(): string {
		return this.pokemonSelected.colorType;
	}

	public getTypeColor(type: string): string {
		const pokemonColors: { [key: string]: string } = this.pokedexService
			.pokemonColorTypes;
		return pokemonColors[type];
	}

	public changeData() {
		this.detail = this.detail ? false : true;
	}
}
