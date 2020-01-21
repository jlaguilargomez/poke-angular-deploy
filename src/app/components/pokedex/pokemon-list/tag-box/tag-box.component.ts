import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
	selector: 'app-tag-box',
	templateUrl: './tag-box.component.html',
	styleUrls: ['./tag-box.component.scss'],
})
export class TagBoxComponent implements OnInit {
	@Output() typeSelected = new EventEmitter();
	@Output() turnDropDownOff = new EventEmitter();
	@Input() renderingType = '';

	public pokemonColors: { [key: string]: string };
	public pokemonTypes: Array<string>;

	constructor(private pokedexService: PokedexService) {
		this.pokemonColors = pokedexService.pokemonColorTypes;
	}

	public setTypeOfPokemon(type: string): void {
		this.typeSelected.emit(type);
		this.turnDropDownOff.emit(false);
	}

	public getColor(type: string): string {
		return this.pokemonColors[type];
	}

	public ngOnInit(): void {
		this.pokemonTypes = Object.keys(this.pokedexService.pokemonColorTypes);
	}
}
