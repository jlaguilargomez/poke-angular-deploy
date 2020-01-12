import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokedexService } from './pokedex.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, OnDestroy {
	private pokemonLoaded = false;
	private subscription: Subscription;

	constructor(private pokedexService: PokedexService) {}

	ngOnInit() {
		this.subscription = this.pokedexService
			.loadPokemonList(151)
			.subscribe(() => {
				setTimeout(() => {
					this.pokemonLoaded = true;
				}, 200);
			});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
