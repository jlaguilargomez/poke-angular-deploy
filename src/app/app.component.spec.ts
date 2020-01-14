import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ButtonArrowComponent } from './shared/components/button-arrow/button-arrow.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent, ButtonArrowComponent],
		}).compileComponents();
	}));

	// it('should create the app', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.debugElement.componentInstance;
	// 	expect(app).toBeTruthy();
	// });
});
