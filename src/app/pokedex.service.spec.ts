import { TestBed, inject } from '@angular/core/testing';

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
});
