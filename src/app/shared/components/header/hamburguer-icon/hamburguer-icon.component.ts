import { Component, OnInit, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
	selector: 'app-hamburguer-icon',
	templateUrl: './hamburguer-icon.component.html',
	styleUrls: ['./hamburguer-icon.component.scss'],
})
export class HamburguerIconComponent implements OnInit {
	@Input() displayMenu;
	constructor() {}

	ngOnInit() {}
}
