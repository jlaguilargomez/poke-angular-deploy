import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../interface/pokemon.interface';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
	pokemons: Pokemon[];

	pokemonLoaded = false;

	constructor(private pokedexService: PokedexService) {}

	ngOnInit() {
		this.pokedexService.loadPokemonList(151).subscribe(dataSet => {
			this.pokemons = dataSet;
			setTimeout(() => {
				this.pokemonLoaded = true;
			}, 200);
		});
	}
}
