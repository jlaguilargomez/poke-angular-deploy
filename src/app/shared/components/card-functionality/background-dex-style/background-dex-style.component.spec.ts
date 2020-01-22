import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundDexStyleComponent } from './background-dex-style.component';

describe('BackgroundDexStyleComponent', () => {
	let component: BackgroundDexStyleComponent;
	let fixture: ComponentFixture<BackgroundDexStyleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BackgroundDexStyleComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BackgroundDexStyleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
