import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
	selector: 'app-hamburguer-icon',
	templateUrl: './hamburguer-icon.component.html',
	styleUrls: ['./hamburguer-icon.component.scss'],
})
export class HamburguerIconComponent implements OnInit {
	constructor() {}

	icon: HTMLElement;
	menu: HTMLElement;

	renderSomething(e) {
		console.log(e);
	}

	ngOnInit() {
		this.icon = document.querySelector('.hamburguer-icon');
		this.menu = document.querySelector('.hamburguer-icon');

		console.log(this.icon);

		fromEvent(this.icon, 'click').subscribe(() => console.log('clicked'));
	}
}
