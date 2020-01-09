import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [LandingComponent],
		}).compileComponents();
	});

	it('Component Header works!', () => {
		let fixture = TestBed.createComponent(LandingComponent);
		let component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
