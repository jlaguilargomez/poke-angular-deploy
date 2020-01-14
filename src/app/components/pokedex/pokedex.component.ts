import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, OnDestroy {
	public status = 'requesting';
	private subscription: Subscription;

	constructor(private pokedexService: PokedexService) {}

	ngOnInit() {
		this.subscription = this.pokedexService
			.loadPokemonList(1, 151)
			.subscribe(
				() => {
					setTimeout(() => {
						this.status = 'loaded';
					}, 200);
				},
				error => {
					this.status = 'error';
				}
			);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
