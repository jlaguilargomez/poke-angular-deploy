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

	it('Component PokemonCardComponent works!', (): void => {
		expect(component).toBeDefined();
	});

	it('colorBar // it must return the correct HSL colour depends on the number passed as argument', (): void => {
		//setup
		const expectedResult: string = 'hsl(120, 100%, 50%)';
		//exercise
		const result: string = component.colorBar(120);
		//verify
		expect(result).toEqual(expectedResult);
	});
});
