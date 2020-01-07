import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './interface/pokemon.interface';
import { Observable, Subject } from 'rxjs';
import { resolve } from 'url';
import { PokemonDetailComponent } from './pokedex/pokemon-detail/pokemon-detail.component';

@Injectable({
	providedIn: 'root',
})
export class PokedexService {
	promises: Promise<object>[] = [];
	pokemonsLoaded = new Subject<object[]>();
	pokemonList: Pokemon[] = [];

	constructor(private http: HttpClient) {}

	loadPokemons(limit: number) {
		for (let i = 1; i < limit + 1; i++) {
			const promise: any = new Promise(res => {
				this.http
					.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
					.subscribe((item: any) => {
						const newPokemon: Pokemon = {
							id: item.id,
							name:
								item.forms[0].name.charAt(0).toUpperCase() +
								item.forms[0].name.slice(1),
							type: item.types.map(type => type.type.name),
							height: item.height,
							weight: item.weight,
							stats: item.stats.map(stat => {
								return {
									name: stat['stat']['name'],
									base: stat['base_stat'],
								};
							}),
							moves: [
								item.moves[Math.floor(Math.random() * item.moves.length)].move
									.name,
								item.moves[Math.floor(Math.random() * item.moves.length)].move
									.name,
								item.moves[Math.floor(Math.random() * item.moves.length)].move
									.name,
								item.moves[Math.floor(Math.random() * item.moves.length)].move
									.name,
							],
							ability: item.abilities.map(ability => ability.ability.name),
							imagePath: item.sprites.front_default,
							coord: {
								lat: Math.random() * 0.3 + 40.261781,
								long: Math.random() * 0.4 + -3.93223,
							},
						};
						res(newPokemon);
					});
			});
			this.promises.push(promise);
		}
	}
	getPokemons(limit: number) {
		this.loadPokemons(limit);
		Promise.all(this.promises).then((newPokemon: Pokemon[]) => {
			this.pokemonsLoaded.next(newPokemon);
			this.pokemonList = newPokemon;
		});
	}

	getPokemonList() {
		return this.pokemonList;
	}

	getPokemon(index) {
		return this.pokemonList[index];
	}
}
