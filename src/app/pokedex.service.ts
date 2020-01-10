import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './interface/pokemon.interface';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PokedexService {
	pokemonsLoaded = new Subject<object[]>();
	public pokemonList: Pokemon[] = [];

	constructor(private http: HttpClient) {}

	private requestPokemons(limit: number) {
		const pokeObservable = Observable.create(observer => {
			for (let i = 1; i < limit + 1; i++) {
				this.http
					// Pendiente el tipado
					.get<any>(`https://pokeapi.co/api/v2/pokemon/${i}/`)
					.pipe(
						map(responseData => {
							const newPokemon: Pokemon = {
								id: responseData.id,
								name:
									responseData.forms[0].name.charAt(0).toUpperCase() +
									responseData.forms[0].name.slice(1),
								type: responseData.types.map(type => type.type.name),
								height: responseData.height,
								weight: responseData.weight,
								stats: responseData.stats.map(stat => {
									return {
										name: stat['stat']['name'],
										base: stat['base_stat'],
									};
								}),
								moves: [
									responseData.moves[
										Math.floor(Math.random() * responseData.moves.length)
									].move.name,
									responseData.moves[
										Math.floor(Math.random() * responseData.moves.length)
									].move.name,
									responseData.moves[
										Math.floor(Math.random() * responseData.moves.length)
									].move.name,
									responseData.moves[
										Math.floor(Math.random() * responseData.moves.length)
									].move.name,
								],
								ability: responseData.abilities.map(
									ability => ability.ability.name
								),
								imagePath: responseData.sprites.front_default,
								coord: {
									lat: Math.random() * 0.3 + 40.261781,
									long: Math.random() * 0.4 + -3.93223,
								},
							};
							return newPokemon;
						})
					)
					.subscribe(newPokemon => {
						this.pokemonList.push(newPokemon);
						if (this.pokemonList.length === limit) {
							observer.next(
								this.pokemonList.sort((pokemonA, pokemonB) =>
									pokemonA.id > pokemonB.id ? 1 : -1
								)
							);
						}
					});
			}
		});
		return pokeObservable;
	}

	public getPokemonList(id: number) {
		return this.requestPokemons(id);
	}

	getPokemon(index) {
		return this.pokemonList[index];
	}

	testConection() {
		return 'it works!';
	}
}
