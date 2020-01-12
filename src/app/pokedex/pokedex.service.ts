import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from '../interface/pokemon.interface';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, forkJoin, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PokedexService {
	private pokemonList: Pokemon[] = [];

	constructor(private http: HttpClient) {}

	private requestPokemons(first: number, last: number): Observable<Pokemon[]> {
		const response: Observable<Pokemon[]> = Observable.create(observer => {
			const observables: Observable<Pokemon>[] = [];
			const handleError = (error: HttpErrorResponse) => {
				observer.error(error);
				return throwError(error);
			};
			for (let i = first; i < last + 1; i++) {
				observables.push(
					this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${i}/`).pipe(
						retry(3),
						catchError(handleError),
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

	public getPokemon(index): Pokemon {
		return this.pokemonList[index];
	}

	testConection() {
		return 'it works!';
	}
}
