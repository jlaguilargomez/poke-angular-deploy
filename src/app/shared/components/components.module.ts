import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';
import { BackgroundDexStyleComponent } from './background-dex-style/background-dex-style.component';
import { HeaderCurveComponent } from './header-curve/header-curve.component';
import { CardMemberComponent } from './card-member/card-member.component';
import { BackTopBtnComponent } from './back-top-btn/back-top-btn.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	imports: [BrowserModule],
	exports: [
		ButtonArrowComponent,
		BackgroundDexStyleComponent,
		HeaderCurveComponent,
		CardMemberComponent,
		BackTopBtnComponent,
	],
	declarations: [
		ButtonArrowComponent,
		BackgroundDexStyleComponent,
		HeaderCurveComponent,
		CardMemberComponent,
		BackTopBtnComponent,
	],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
