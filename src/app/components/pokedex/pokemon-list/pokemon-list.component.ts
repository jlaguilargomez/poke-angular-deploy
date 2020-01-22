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
	public selectedType = 'all';
	public displayTagBox = false;
	public searchPokemonName: string;
	public pokemonList: Pokemon[] = this.pokedexService.getPokemonList();

	constructor(
		private pokedexService: PokedexService,
		private router: Router
	) {}

	public renderPokemon(name) {
		this.pokedexService.cardLoaded.subscribe(() => {
			this.router.navigate(['pokedex', name], { fragment: 'card' });
		});
	}

	public changeTagBoxStatus(): void {
		this.displayTagBox = !this.displayTagBox;
	}

	public filterPokemonsByType(type: string) {
		const pokemonFilteredByType: Pokemon[] = this.pokemonList.filter(
			// pokemon => pokemon.type[0] === type
			(pokemon: Pokemon): boolean => {
				return pokemon.type.some((val: string) => val === type);
			}
		);
		return type === 'all' ? this.pokemonList : pokemonFilteredByType;
	}

	public getTypeSelected(type: string): void {
		this.selectedType = type;
	}

	public getDropDownInteraction(status: boolean): void {
		this.displayTagBox = status;
	}

	ngOnInit() {}
}
