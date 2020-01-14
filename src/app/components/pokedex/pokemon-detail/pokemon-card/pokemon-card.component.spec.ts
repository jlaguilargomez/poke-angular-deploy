import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('PokemonCardComponent', () => {
	const fakeActivatedRoute = {
		snapshot: { data: {} },
	} as ActivatedRoute;

	let component: PokemonCardComponent;
	let fixture: ComponentFixture<PokemonCardComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PokemonCardComponent],
			providers: [
				PokemonCardComponent,
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
			],
			imports: [HttpClientModule],
		});

		fixture = TestBed.createComponent(PokemonCardComponent);
		component = fixture.componentInstance;
	});

	it('Component PokemonCardComponent works!', () => {
		expect(component).toBeDefined();
	});

	it('.colorBackground // must check if the selected color corresponds to the pokemon type selected (dragon = #7962E6)', () => {
		//setup
		const selectedColor = '#7962E6'; //color type dragon
		//exercise
		const result = component.colorBackground('dragon');
		//verify
		expect(result).toBe(selectedColor);
	});

	it('.colorBackground // must check if the selected color corresponds to the pokemon type selected (psychic = #EF4983)', () => {
		//setup
		const selectedColor = '#EF4983'; //color type dragon
		//exercise
		const result = component.colorBackground('psychic');
		//verify
		expect(result).toBe(selectedColor);
	});

	it('.colorBackground // must check if the selected color corresponds to the pokemon type selected (psychic = #EF4983)', () => {
		//setup
		//exercise
		//verify
	});
});
