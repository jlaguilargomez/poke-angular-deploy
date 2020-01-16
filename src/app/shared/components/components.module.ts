import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';
import { BackgroundDexStyleComponent } from './card-functionality/background-dex-style/background-dex-style.component';
import { HeaderCurveComponent } from './header-curve/header-curve.component';
import { CardMemberComponent } from './card-member/card-member.component';
import { CardFunctionalityComponent } from './card-functionality/card-functionality.component';
import { CharactersAnimationComponent } from './characters-animation/characters-animation.component';

@NgModule({
	imports: [],
	exports: [
		ButtonArrowComponent,
		BackgroundDexStyleComponent,
		HeaderCurveComponent,
		CardMemberComponent,
		CardFunctionalityComponent,
		CharactersAnimationComponent,
	],
	declarations: [
		ButtonArrowComponent,
		BackgroundDexStyleComponent,
		HeaderCurveComponent,
		CardMemberComponent,
		CardFunctionalityComponent,
		CharactersAnimationComponent,
	],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
