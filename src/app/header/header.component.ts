import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@ViewChild('hamburguerIcon', { static: true }) hamburguerIcon: ElementRef;

	displayMenu: boolean = true;

	constructor() {}

	render() {
		this.displayMenu = !this.displayMenu;
	}

	ngOnInit() {}
}
