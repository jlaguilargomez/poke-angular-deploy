import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerIconComponent } from './hamburguer-icon.component';

describe('HamburguerIconComponent', () => {
	let component: HamburguerIconComponent;
	let fixture: ComponentFixture<HamburguerIconComponent>;

	beforeEach((): void => {
		TestBed.configureTestingModule({
			declarations: [HamburguerIconComponent],
		});
		fixture = TestBed.createComponent(HamburguerIconComponent);
		component = fixture.componentInstance;
	});

	it('Component HamburguerIcon works!', (): void => {
		expect(component).toBeDefined();
	});
});
