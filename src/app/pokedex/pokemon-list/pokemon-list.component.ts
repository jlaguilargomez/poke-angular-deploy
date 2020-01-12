import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../../interface/pokemon.interface';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
	public searchPokemonName: string;

	constructor(private router: Router, private pokedexService: PokedexService) {}

	private pokemonList: Pokemon[] = this.pokedexService.getPokemonList();

	renderPokemon(index) {
		this.router.navigate(['pokedex', index + 1]);
	}

	ngOnInit() {}
}
