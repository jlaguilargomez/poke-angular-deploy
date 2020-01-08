import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
	selector: 'app-hamburguer-icon',
	templateUrl: './hamburguer-icon.component.html',
	styleUrls: ['./hamburguer-icon.component.scss'],
})
export class HamburguerIconComponent implements OnInit {
	constructor() {}

	renderSomething(e) {
		console.log(e);
	}

	ngOnInit() {}
}
