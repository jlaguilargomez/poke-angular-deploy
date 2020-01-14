import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { Pokemon, PokemonTest } from '../../models/pokemon.interface';
import { PokedexService } from '../../services/pokedex.service';
import { HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

describe('Service: PokedexService', () => {
	let pokedexService: PokedexService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PokedexService],
			imports: [HttpClientModule],
		});

		pokedexService = TestBed.get(PokedexService);
	});

	it('the test is correctly config', () => {
		expect(pokedexService.testConection()).toBe('it works!');
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
				height: 7,
				weight: 69,
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
			const response: any = pokedexService.getPokemon(0);

			// Remove the parameters created with Math.random variable
			delete response.moves;
			delete response.coord;

			expect(response).toEqual(getPokemonResponse);
		});
		it('an invalid index for getPokemon method should return undefined', () => {
			const response = pokedexService.getPokemon(-1);
			expect(response).toBeUndefined();
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
			const response = pokedexService.getPokemon(0);
			expect(response).toBeUndefined();
		});
	});
});
