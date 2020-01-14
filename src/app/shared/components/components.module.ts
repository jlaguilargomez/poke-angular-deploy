import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';
import { BackgroundDexStyleComponent } from '../background-dex-style/background-dex-style.component';

@NgModule({
	imports: [],
	exports: [ButtonArrowComponent, BackgroundDexStyleComponent],
	declarations: [ButtonArrowComponent, BackgroundDexStyleComponent],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
