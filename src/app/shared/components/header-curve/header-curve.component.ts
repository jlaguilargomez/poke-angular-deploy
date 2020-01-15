import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-header-curve',
	templateUrl: './header-curve.component.html',
	styleUrls: ['./header-curve.component.scss'],
})
export class HeaderCurveComponent implements OnInit {
	@Input() text: string;
	constructor() {}

	ngOnInit() {}
}
