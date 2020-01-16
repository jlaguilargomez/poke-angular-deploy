import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-functionality',
	templateUrl: './card-functionality.component.html',
	styleUrls: ['./card-functionality.component.scss'],
})
export class CardFunctionalityComponent implements OnInit {
	@Input() num;
	@Input() title;
	@Input() img;
	@Input() info;
	constructor() {}

	ngOnInit() {}
}
