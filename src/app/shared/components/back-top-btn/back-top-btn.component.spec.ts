import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTopBtnComponent } from './back-top-btn.component';

describe('BackTopBtnComponent', () => {
	let component: BackTopBtnComponent;
	let fixture: ComponentFixture<BackTopBtnComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BackTopBtnComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BackTopBtnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should move to the top of the page', () => {
		component.backToTop();
		expect(window.pageYOffset).toBe(0);
	});
});
