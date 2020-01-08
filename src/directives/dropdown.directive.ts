import { Directive, HostListener, HostBinding } from '@angular/core';

// this directive allows to change the class of the dropdown

@Directive({
	selector: '[appDropdown]',
})
export class DropDownDirective {
	@HostBinding('class.open') isOpen: boolean = false;

	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
	}
}
