import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersAnimationComponent } from './characters-animation.component';

describe('CharactersAnimationComponent', () => {
	let component: CharactersAnimationComponent;
	let fixture: ComponentFixture<CharactersAnimationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CharactersAnimationComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CharactersAnimationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
