import { TestBed, inject } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: PokedexService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		});
	});

	it('should check if the test is correctly config', inject(
		[PokedexService, HttpClientModule],
		(service: PokedexService) => {
			expect(service.testConection()).toBe('it works!');
		}
	));

	it('the service works correctly', inject(
		[PokedexService],
		(service: PokedexService) => {
			expect(service).toBeTruthy();
		}
	));

	it('', inject([PokedexService], (service: PokedexService) => {
		expect(service.getPokemonList()).toBeTruthy();
	}));
});
