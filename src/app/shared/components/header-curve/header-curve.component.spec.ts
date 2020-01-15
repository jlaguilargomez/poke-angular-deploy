import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCurveComponent } from './header-curve.component';

describe('HeaderCurveComponent', () => {
	let component: HeaderCurveComponent;
	let fixture: ComponentFixture<HeaderCurveComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderCurveComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderCurveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
