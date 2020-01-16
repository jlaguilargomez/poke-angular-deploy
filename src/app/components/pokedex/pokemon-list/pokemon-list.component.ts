import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from '../../../models/pokemon.interface';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
	public searchPokemonName: string;
	public pokemonList: Pokemon[] = this.pokedexService.getPokemonList();

	constructor(private pokedexService: PokedexService) {}

	ngOnInit() {}
}
