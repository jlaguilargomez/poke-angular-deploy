import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-back-top-btn',
	templateUrl: './back-top-btn.component.html',
	styleUrls: ['./back-top-btn.component.scss'],
})
export class BackTopBtnComponent implements OnInit {
	scrollPosition: number;

	constructor() {}

	public backToTop(): void {
		document.body.scrollTop = 0;
	}

	ngOnInit() {}
}
