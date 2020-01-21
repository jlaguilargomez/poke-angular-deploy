import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, forkJoin, throwError, Subject } from 'rxjs';
import { Pokemon, PokemonAPIData } from '../models/pokemon.interface';

@Injectable({
	providedIn: 'root',
})
export class PokedexService {
	private pokemonList: Pokemon[] = [];
	private pokemonColors: { [key: string]: string } = {
		grass: '#76C535',
		bug: '#A1B01E',
		fire: '#EB3D0D',
		fighting: '#84331C',
		rock: '#BAA45B',
		normal: '#C3BCB2',
		ground: '#EEAF9D',
		water: '#2580C9',
		ice: '#97E3F9',
		flying: '#90A2ED',
		dragon: '#7962E6',
		ghost: '#5D5FB0',
		dark: '#4C392C',
		steel: '#BAB9C6',
		psychic: '#EF4983',
		fairy: '#F1AEF2',
		poison: '#934392',
		electric: '#FAB819',
	};
	public cardLoaded = new Subject<boolean>();

	constructor(private http: HttpClient) {}

	private requestPokemons(
		first: number,
		last: number
	): Observable<Pokemon[]> {
		const response: Observable<Pokemon[]> = new Observable(observer => {
			const observables: Observable<Pokemon>[] = [];
			const handleError = (error: HttpErrorResponse) => {
				observer.error(error);
				return throwError(error);
			};
			for (let i = first, len = last; i < len + 1; i++) {
				observables.push(
					this.http
						.get<any>(`https://pokeapi.co/api/v2/pokemon/${i}/`)
						.pipe(
							retry(3),
							catchError(handleError),
							map((responseData: PokemonAPIData) => {
								const newPokemon: Pokemon = {
									id: responseData.id,
									name:
										responseData.forms[0].name
											.charAt(0)
											.toUpperCase() +
										responseData.forms[0].name.slice(1),
									type: responseData.types.map(
										type => type.type.name
									),
									colorType: this.pokemonColors[
										responseData.types[0].type.name
									],
									height: responseData.height / 10,
									weight: responseData.weight / 10,
									stats: responseData.stats.map(stat => {
										return {
											name: stat['stat']['name'],
											base: stat['base_stat'],
										};
									}),
									moves: [
										responseData.moves[
											Math.floor(
												Math.random() *
													responseData.moves.length
											)
										].move.name,
										responseData.moves[
											Math.floor(
												Math.random() *
													responseData.moves.length
											)
										].move.name,
										responseData.moves[
											Math.floor(
												Math.random() *
													responseData.moves.length
											)
										].move.name,
										responseData.moves[
											Math.floor(
												Math.random() *
													responseData.moves.length
											)
										].move.name,
									],
									ability: responseData.abilities.map(
										ability => ability.ability.name
									),
									imagePath:
										responseData.sprites.front_default,
									coord: {
										lat: Math.random() * 0.3 + 40.261781,
										long: Math.random() * 0.4 + -3.93223,
									},
								};
								return newPokemon;
							})
						)
				);
			}
			forkJoin(observables).subscribe(dataSet => {
				this.pokemonList = dataSet;
				observer.next();
			});
		});
		return response;
	}

	public loadPokemonList(first: number, last: number): Observable<Pokemon[]> {
		return this.requestPokemons(first, last);
	}

	public getPokemonList(): Pokemon[] {
		return this.pokemonList;
	}

	public getPokemon(name): Pokemon {
		return this.pokemonList.find(pokemon => pokemon.name === name);
	}

	public get pokemonColorTypes(): { [key: string]: string } {
		return this.pokemonColors;
	}
}
