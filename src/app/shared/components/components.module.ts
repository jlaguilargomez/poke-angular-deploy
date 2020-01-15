import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';
import { BackgroundDexStyleComponent } from './background-dex-style/background-dex-style.component';
import { HeaderCurveComponent } from './header-curve/header-curve.component';
import { CardMemberComponent } from './card-member/card-member.component';

@NgModule({
	imports: [],
	exports: [
		ButtonArrowComponent,
		BackgroundDexStyleComponent,
		HeaderCurveComponent,
		CardMemberComponent,
	],
	declarations: [
		ButtonArrowComponent,
		BackgroundDexStyleComponent,
		HeaderCurveComponent,
		CardMemberComponent,
	],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
