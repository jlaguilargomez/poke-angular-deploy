import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FooterComponent],
		}).compileComponents();
	});

	it('Component Footer works!', () => {
		let fixture = TestBed.createComponent(FooterComponent);
		let component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
