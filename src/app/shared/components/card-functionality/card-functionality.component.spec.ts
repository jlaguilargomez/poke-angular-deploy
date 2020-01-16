import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFunctionalityComponent } from './card-functionality.component';
import { BackgroundDexStyleComponent } from './background-dex-style/background-dex-style.component';

describe('CardFunctionalityComponent', () => {
	let component: CardFunctionalityComponent;
	let fixture: ComponentFixture<CardFunctionalityComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CardFunctionalityComponent,
				BackgroundDexStyleComponent,
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardFunctionalityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
