import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HamburguerIconComponent } from './hamburguer-icon/hamburguer-icon.component';

describe('HeaderComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderComponent, HamburguerIconComponent],
		}).compileComponents();
	});

	it('Component Header works!', () => {
		let fixture = TestBed.createComponent(HeaderComponent);
		let component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
