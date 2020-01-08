import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@ViewChild('hamburguerIcon', { static: true }) hamburguerIcon: ElementRef;
	displayMenu: boolean = true;

	constructor() {}

	render() {}

	ngOnInit() {
		console.log(this.hamburguerIcon);
	}
}
