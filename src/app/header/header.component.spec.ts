import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HamburguerIconComponent } from './hamburguer-icon/hamburguer-icon.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let hamburguerIcon: HamburguerIconComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	// beforeEach(async(() => {
	//   TestBed.configureTestingModule({
	//     declarations: [HeaderComponent],
	//   }).compileComponents();
	// }));

	// beforeEach(() => {
	//   fixture = TestBed.createComponent(HeaderComponent);
	//   component = fixture.componentInstance;
	//   fixture.detectChanges();
	// });

	// it('should create', () => {
	//   expect(component).toBeTruthy();
	// });

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderComponent, HamburguerIconComponent],
		}).compileComponents();
	});

	it('test testing', () => {
		let fixture = TestBed.createComponent(HeaderComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});
});
