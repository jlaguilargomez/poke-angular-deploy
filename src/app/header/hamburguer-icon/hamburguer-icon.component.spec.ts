import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerIconComponent } from './hamburguer-icon.component';

describe('HamburguerIconComponent', () => {
	let component: HamburguerIconComponent;
	let fixture: ComponentFixture<HamburguerIconComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HamburguerIconComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HamburguerIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// it('should create', () => {
	// 	expect(component).toBeTruthy();
	// });
});
