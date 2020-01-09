import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonCardComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PokemonCardComponent],
			imports: [HttpClientModule],
		}).compileComponents();
	});

	it('Component PokemonCardComponent works!', () => {
		let fixture = TestBed.createComponent(PokemonCardComponent);
		let component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
