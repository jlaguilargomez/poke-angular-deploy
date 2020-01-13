import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { Pokemon, PokemonTest } from '../interface/pokemon.interface';
import { PokedexService } from './pokedex.service';
import { HttpClientModule } from '@angular/common/http';

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
	describe('loadPokemonList correctly', () => {
		beforeEach(done => {
			pokedexService.loadPokemonList(1, 151).subscribe(() => {
				done();
			});
		});

		it('should get the pokemonList', () => {
			let response: Pokemon[] = pokedexService.getPokemonList();
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
			let response: any = pokedexService.getPokemon(0);
			let err: any = pokedexService.getPokemon(-1);

			// Remove the parameters created with Math.random variable
			delete response.moves;
			delete response.coord;

			expect(response).toEqual(getPokemonResponse);
			expect(err).toBeUndefined();
		});
	});
});
