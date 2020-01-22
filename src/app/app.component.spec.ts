import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ButtonArrowComponent } from './shared/components/button-arrow/button-arrow.component';
import { HeaderCurveComponent } from './shared/components/header-curve/header-curve.component';
import { CardMemberComponent } from './shared/components/card-member/card-member.component';
import { CardFunctionalityComponent } from './shared/components/card-functionality/card-functionality.component';
import { BackgroundDexStyleComponent } from './shared/components/card-functionality/background-dex-style/background-dex-style.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				ButtonArrowComponent,
				BackgroundDexStyleComponent,
				HeaderCurveComponent,
				CardMemberComponent,
				CardFunctionalityComponent,
			],
		}).compileComponents();
	}));

	// it('should create the app', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.debugElement.componentInstance;
	// 	expect(app).toBeTruthy();
	// });
});
