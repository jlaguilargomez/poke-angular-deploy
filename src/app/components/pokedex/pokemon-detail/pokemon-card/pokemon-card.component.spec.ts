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

	it('must check if the method works', () => {});
});
