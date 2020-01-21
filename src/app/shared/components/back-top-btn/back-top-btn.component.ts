import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-back-top-btn',
	templateUrl: './back-top-btn.component.html',
	styleUrls: ['./back-top-btn.component.scss'],
})
export class BackTopBtnComponent implements OnInit {
	public topPosition;

	constructor() {}

	public backToTop(): void {
		window.scroll(0, 0);
	}

	public hideBtn() {
		this.topPosition = window.pageYOffset === 0 ? true : false;
	}

	ngOnInit() {}
}
