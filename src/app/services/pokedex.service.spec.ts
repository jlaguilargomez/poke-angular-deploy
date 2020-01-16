import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon, PokemonTest } from 'src/app/models/pokemon.interface';

describe('Service: PokedexService', () => {
	let pokedexService: PokedexService;

	beforeEach((): void => {
		TestBed.configureTestingModule({
			providers: [PokedexService],
			imports: [HttpClientModule],
		});

		pokedexService = TestBed.get(PokedexService);
	});

	it('the service works correctly', () => {
		expect(pokedexService).toBeTruthy();
	});

	// Add test for loadPokemonList() method
	describe('loadPokemonList works correctly', () => {
		beforeEach(done => {
			pokedexService.loadPokemonList(1, 151).subscribe(() => {
				done();
			});
		});

		it('should get the pokemonList', () => {
			const response: Pokemon[] = pokedexService.getPokemonList();
			expect(response.length).toBe(151);
		});

		it('should get an specific pokemon', () => {
			const getPokemonResponse: PokemonTest = {
				id: 1,
				name: 'Bulbasaur',
				type: ['poison', 'grass'],
				height: 0.7,
				weight: 6.9,
				stats: [
					{
						name: 'speed',
						base: 45,
					},
					{
						name: 'special-defense',
						base: 65,
					},
					{
						name: 'special-attack',
						base: 65,
					},
					{
						name: 'defense',
						base: 49,
					},
					{
						name: 'attack',
						base: 49,
					},
					{
						name: 'hp',
						base: 45,
					},
				],
				ability: ['chlorophyll', 'overgrow'],
				imagePath:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
			};
			const response: any = pokedexService.getPokemon('Bulbasaur');

			// Remove the parameters created with Math.random variable
			delete response.moves;
			delete response.coord;
			delete response.colorType;

			expect(response).toEqual(getPokemonResponse);
		});
		it('an invalid index for getPokemon method should return undefined', () => {
			const response = pokedexService.getPokemon('imaginaryPokemon');
			expect(response).toBeUndefined();
		});

		it('checks if the pokemon contains the correct colour depends on the type', (): void => {
			// setup
			const colorSelected = '#EEAF9D';
			// exercise
			const pokemonSelected: any = pokedexService.getPokemon('Geodude');
			// verify
			expect(pokemonSelected.colorType).toEqual(colorSelected);
		});
	});

	describe('loadPokemonList handle error', () => {
		beforeEach(done => {
			pokedexService.loadPokemonList(-3, 151).subscribe(
				() => console.log('This shouldn´t be shown'),
				error => {
					catchError(error);
					done();
				}
			);
		});

		it('should get an empty pokemonList', () => {
			const response: Pokemon[] = pokedexService.getPokemonList();
			expect(response).toEqual([]);
		});

		it('A getPokemon from an empty pokemonList should be undefined', () => {
			const response = pokedexService.getPokemon('imaginaryPokemon');
			expect(response).toBeUndefined();
		});
	});
});
