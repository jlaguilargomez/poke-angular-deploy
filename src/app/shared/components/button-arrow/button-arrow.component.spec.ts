import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonArrowComponent } from './button-arrow.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ButtonArrowComponent', () => {
	let component: ButtonArrowComponent;
	let fixture: ComponentFixture<ButtonArrowComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
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
