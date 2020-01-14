import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [LandingComponent],
		}).compileComponents();
	});

	it('Component Header works!', () => {
		const fixture = TestBed.createComponent(LandingComponent);
		const component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
