import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonArrowComponent } from './button-arrow.component';

describe('ButtonArrowComponent', () => {
	let component: ButtonArrowComponent;
	let fixture: ComponentFixture<ButtonArrowComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ButtonArrowComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonArrowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
