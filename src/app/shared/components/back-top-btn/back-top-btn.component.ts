import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-back-top-btn',
	templateUrl: './back-top-btn.component.html',
	styleUrls: ['./back-top-btn.component.scss'],
})
export class BackTopBtnComponent implements OnInit {
	scrollPosition: number;

	constructor() {
		this.scrollPosition = document.body.scrollTop;
	}

	ngOnInit() {
		console.log(this.scrollPosition);
	}

	renderScrollPosition() {
		this.scrollPosition = document.body.scrollTop;
		return this.scrollPosition;
	}

	public backToTop(): void {
		document.body.scrollTop = 0;
	}

	ngOnChanges() {
		console.log(this.scrollPosition);
	}
}
