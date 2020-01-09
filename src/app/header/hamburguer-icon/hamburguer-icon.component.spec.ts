import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerIconComponent } from './hamburguer-icon.component';

describe('HamburguerIconComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HamburguerIconComponent],
		}).compileComponents();
	});

	it('Component HamburguerIcon works!', () => {
		const fixture = TestBed.createComponent(HamburguerIconComponent);
		const component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
