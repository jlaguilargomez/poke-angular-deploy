import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-hamburguer-icon',
	templateUrl: './hamburguer-icon.component.html',
	styleUrls: ['./hamburguer-icon.component.scss'],
})
export class HamburguerIconComponent implements OnInit {
	displayMenu = false;
	constructor() {}

	render() {
		this.displayMenu = !this.displayMenu;
	}

	ngOnInit() {}
}
