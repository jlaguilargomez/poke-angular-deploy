import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('PokemonCardComponent', () => {
	const fakeActivatedRoute = {
		snapshot: { data: {} },
	} as ActivatedRoute;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PokemonCardComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
			],
			imports: [HttpClientModule],
		}).compileComponents();
	});

	it('Component PokemonCardComponent works!', () => {
		const fixture = TestBed.createComponent(PokemonCardComponent);
		const component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});

	it('colorBackground method should return a color', () => {
		//setup
		const fixture = TestBed.createComponent(PokemonCardComponent);
		const component = fixture.debugElement.componentInstance;
		const expectedResult = '';
		//exercise

		//verify
		expect();
	});
});
