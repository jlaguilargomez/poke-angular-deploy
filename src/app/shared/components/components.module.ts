import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonArrowComponent } from './button-arrow/button-arrow.component';

@NgModule({
	imports: [],
	exports: [ButtonArrowComponent],
	declarations: [ButtonArrowComponent],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
