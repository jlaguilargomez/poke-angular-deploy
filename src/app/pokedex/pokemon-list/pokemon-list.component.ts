import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
	@Input() pokemonList: object[];

	public searchPokemonName: string;

	constructor(private router: Router) {}

	renderPokemon(index) {
		this.router.navigate(['pokedex', index + 1]);
	}

	ngOnInit() {}
}
